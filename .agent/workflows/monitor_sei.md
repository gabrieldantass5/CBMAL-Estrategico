---
description: Monitora a caixa de entrada do SEI para detectar novos processos.
---

# Monitor de Caixa de Entrada SEI

Este workflow automatiza a verificação de novos processos no SEI.

## Pré-requisitos
- Python 3.x instalado
- `agent-browser` instalado (`npm install -g agent-browser`)
- Chromium instalado (`npx playwright install chromium`)

## Primeira Execução (Login)

### Passo 1: Salvar Sessão Autenticada
Execute o script em modo login:
```bash
python scripts/sei_monitor.py --login
```

Isso irá:
1. Abrir o SEI no navegador visível
2. Aguardar você fazer login manualmente
3. Salvar o estado da sessão para uso futuro

### Passo 2: Verificar Caixa de Entrada
Após salvar a sessão:
```bash
python scripts/sei_monitor.py
```

O script irá:
1. Carregar a sessão salva
2. Navegar até a caixa de entrada
3. Capturar a lista de processos
4. Comparar com a verificação anterior
5. Listar os processos NOVOS

## Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `python scripts/sei_monitor.py` | Verifica novos processos |
| `python scripts/sei_monitor.py --login` | Faz login e salva sessão |
| `python scripts/sei_monitor.py --screenshot` | Tira screenshot da caixa |

## Agendamento Automático

Para verificar periodicamente, configure o **Agendador de Tarefas do Windows**:
1. Abra "Agendador de Tarefas"
2. Crie nova tarefa básica
3. Configure para executar a cada X horas
4. Ação: Executar programa → `python`
5. Argumentos: `C:\caminho\scripts\sei_monitor.py`

## Arquivos Gerados

| Arquivo | Descrição |
|---------|-----------|
| `scripts/sei_state.json` | Estado de autenticação salvo |
| `scripts/sei_inbox_history.json` | Histórico de processos verificados |

## Importante
- A sessão expira após algumas horas → refaça `--login` se necessário
- O script NÃO armazena senhas, apenas cookies de sessão
- Execute primeiro com `--headed` para debug se houver problemas
