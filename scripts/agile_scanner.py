#!/usr/bin/env python3
import os
import datetime
from pathlib import Path

def agile_scan():
    root = Path(r"c:\Users\D_A_N\OneDrive\Desktop\Planejamento Estratégico - CBMAL")
    now = datetime.datetime.now()
    yesterday = now - datetime.timedelta(days=1)
    
    recent_files = []
    for path in root.rglob("*"):
        if path.is_file() and not any(part.startswith(".") for part in path.parts):
            try:
                mtime = datetime.datetime.fromtimestamp(path.stat().st_mtime)
                if mtime > yesterday:
                    recent_files.append(f"- {path.relative_to(root)} ({mtime.strftime('%H:%M')})")
            except: continue

    handoff_dir = root / "06_Diário_e_Memórias_IA" / "Memorias_de_Sessao"
    last_handoff = "Nenhum encontrado"
    if handoff_dir.exists():
        files = sorted(handoff_dir.glob("*.md"), reverse=True)
        if files: last_handoff = files[0].name

    print("### 🔍 SCANNER RECENTE")
    print("\n".join(recent_files[:10]) if recent_files else "Nenhuma modificação detectada.")
    print(f"\n### 📥 ÚLTIMO HANDOFF: {last_handoff}")

if __name__ == "__main__":
    agile_scan()
