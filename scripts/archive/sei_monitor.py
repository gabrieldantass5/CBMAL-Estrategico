#!/usr/bin/env python3
"""
SEI Inbox Monitor - Verifica novos processos na caixa de entrada do SEI
Usando agent-browser para automação

Autor: Automação CBMAL
Data: 2026-01-19
"""

import subprocess
import json
import os
from datetime import datetime
from pathlib import Path

# Configurações
SEI_URL = "https://sei.al.gov.br"  # Ajuste conforme seu estado
INBOX_PATH = "/sei/controlador.php?acao=procedimento_controlar"
STATE_FILE = Path(__file__).parent / "sei_state.json"
INBOX_HISTORY = Path(__file__).parent / "sei_inbox_history.json"

# Caminho para o executável nativo no Windows
AGENT_BROWSER_EXE = r"C:\Users\D_A_N\AppData\Roaming\npm\node_modules\agent-browser\bin\agent-browser-win32-x64.exe"

def run_agent_browser(command: list[str]) -> str:
    """Executa comando do agent-browser (nativo no Windows) e retorna output."""
    try:
        # Usa o executável nativo direto para evitar erros de shell
        full_command = [AGENT_BROWSER_EXE] + command
        
        result = subprocess.run(
            full_command,
            capture_output=True,
            text=True,
            timeout=60, # Aumentado para lidar com rede
            shell=True # Necessário para alguns binários no Windows
        )
        return result.stdout
    except subprocess.TimeoutExpired:
        return "TIMEOUT"
    except Exception as e:
        return f"ERROR: {e}"

def save_auth_state():
    """Salva estado de autenticação após login manual."""
    print("🔐 Abrindo SEI para login manual...")
    print("   Faça login normalmente, depois pressione ENTER aqui.")
    
    # Abre navegador visível
    run_agent_browser(["open", SEI_URL, "--headed"])
    
    input("\n✅ Pressione ENTER após fazer login no SEI... ")
    
    # Salva estado
    run_agent_browser(["state", "save", str(STATE_FILE)])
    print(f"💾 Estado salvo em: {STATE_FILE}")

def load_auth_state() -> bool:
    """Carrega estado de autenticação salvo."""
    if not STATE_FILE.exists():
        print("⚠️ Nenhum estado de autenticação encontrado.")
        print("   Execute primeiro: python sei_monitor.py --login")
        return False
    
    run_agent_browser(["state", "load", str(STATE_FILE)])
    return True

def get_inbox_processes() -> list[dict]:
    """Captura lista de processos da caixa de entrada."""
    # Navega para a caixa de entrada
    run_agent_browser(["open", f"{SEI_URL}{INBOX_PATH}"])
    
    # Aguarda carregamento
    run_agent_browser(["wait", "--load", "networkidle"])
    
    # Captura snapshot interativo em JSON
    snapshot = run_agent_browser(["snapshot", "-i", "--json"])
    
    # Extrai números de processo (padrão E:XXXXX.XXXXXXX/XXXX)
    processes = []
    try:
        data = json.loads(snapshot)
        for element in data.get("elements", []):
            text = element.get("text", "")
            if text.startswith("E:") and "/" in text:
                processes.append({
                    "numero": text.strip(),
                    "ref": element.get("ref", ""),
                    "capturado_em": datetime.now().isoformat()
                })
    except json.JSONDecodeError:
        # Fallback: extrai texto bruto
        import re
        pattern = r"E:\d+\.\d+/\d+"
        matches = re.findall(pattern, snapshot)
        processes = [{"numero": m, "capturado_em": datetime.now().isoformat()} for m in matches]
    
    return processes

def load_history() -> list[str]:
    """Carrega histórico de processos conhecidos."""
    if INBOX_HISTORY.exists():
        with open(INBOX_HISTORY, "r") as f:
            data = json.load(f)
            return data.get("processos_conhecidos", [])
    return []

def save_history(processos: list[str]):
    """Salva histórico de processos conhecidos."""
    with open(INBOX_HISTORY, "w") as f:
        json.dump({
            "ultima_verificacao": datetime.now().isoformat(),
            "processos_conhecidos": processos
        }, f, indent=2)

def check_for_new_processes():
    """Verifica se há novos processos na caixa de entrada."""
    print("🔍 Verificando caixa de entrada do SEI...")
    
    # Carrega autenticação
    if not load_auth_state():
        return
    
    # Captura processos atuais
    current_processes = get_inbox_processes()
    current_numbers = [p["numero"] for p in current_processes]
    
    # Carrega histórico
    known_processes = load_history()
    
    # Detecta novos
    new_processes = [p for p in current_numbers if p not in known_processes]
    
    # Relatório
    print(f"\n📊 Resultado da verificação ({datetime.now().strftime('%d/%m/%Y %H:%M')})")
    print(f"   Total de processos na caixa: {len(current_numbers)}")
    print(f"   Processos novos: {len(new_processes)}")
    
    if new_processes:
        print("\n🆕 NOVOS PROCESSOS DETECTADOS:")
        for proc in new_processes:
            print(f"   → {proc}")
    else:
        print("\n✅ Nenhum processo novo desde a última verificação.")
    
    # Atualiza histórico
    save_history(current_numbers)
    
    # Fecha navegador
    run_agent_browser(["close"])
    
    return new_processes

def take_screenshot():
    """Tira screenshot da caixa de entrada."""
    if not load_auth_state():
        return
    
    run_agent_browser(["open", f"{SEI_URL}{INBOX_PATH}"])
    run_agent_browser(["wait", "--load", "networkidle"])
    
    filename = f"sei_inbox_{datetime.now().strftime('%Y%m%d_%H%M%S')}.png"
    run_agent_browser(["screenshot", "--full", filename])
    print(f"📸 Screenshot salvo: {filename}")
    
    run_agent_browser(["close"])

if __name__ == "__main__":
    import sys
    
    print("=" * 50)
    print("  SEI Inbox Monitor - CBMAL")
    print("=" * 50)
    
    if len(sys.argv) > 1:
        if sys.argv[1] == "--login":
            save_auth_state()
        elif sys.argv[1] == "--screenshot":
            take_screenshot()
        elif sys.argv[1] == "--help":
            print("""
Uso:
  python sei_monitor.py           # Verifica novos processos
  python sei_monitor.py --login   # Faz login e salva sessão
  python sei_monitor.py --screenshot  # Tira screenshot da caixa
  python sei_monitor.py --help    # Mostra esta ajuda
            """)
    else:
        check_for_new_processes()
