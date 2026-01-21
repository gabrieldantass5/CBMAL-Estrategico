---
description: Executa automações web usando o agent-browser (navegação, preenchimento de formulários, captura de dados, screenshots).
---

# Automação Web com Agent Browser

Este workflow guia a execução de tarefas automatizadas em navegadores web.

## Pré-requisitos
- `agent-browser` instalado globalmente (`npm install -g agent-browser`)
- Chromium instalado (`npx playwright install chromium`)

## Workflow Principal

### 1. Definir o Objetivo
Pergunte ao usuário:
- Qual URL navegar?
- Qual ação realizar? (preencher formulário, coletar dados, fazer screenshot)
- Precisa de autenticação?

### 2. Navegação Inicial
```bash
agent-browser open <url>
agent-browser snapshot -i
```
Analise os elementos interativos retornados (`@e1`, `@e2`, etc.).

### 3. Interação
Execute as ações baseadas nos refs do snapshot:
- **Preencher campos**: `agent-browser fill @eX "valor"`
- **Clicar botões**: `agent-browser click @eX`
- **Aguardar carregamento**: `agent-browser wait --load networkidle`

### 4. Coleta de Dados (se aplicável)
```bash
agent-browser get text @eX        # Extrair texto
agent-browser screenshot out.png  # Capturar tela
agent-browser pdf out.pdf         # Exportar como PDF
```

### 5. Encerramento
```bash
agent-browser close
```

## Casos de Uso Comuns

### A. Screenshot de Página
```bash
agent-browser open https://exemplo.com
agent-browser screenshot --full pagina_completa.png
agent-browser close
```

### B. Preenchimento de Formulário
```bash
agent-browser open https://site.com/formulario
agent-browser snapshot -i
# Identifique os refs dos campos
agent-browser fill @e1 "Nome Completo"
agent-browser fill @e2 "email@exemplo.com"
agent-browser click @e3  # Botão de envio
agent-browser wait --text "Sucesso"
agent-browser close
```

### C. Extração de Dados
```bash
agent-browser open https://site.com/tabela
agent-browser snapshot -i --json > elementos.json
agent-browser get text ".tabela-dados" > dados.txt
agent-browser close
```

## Dicas
- Use `--headed` para visualizar o navegador durante debug
- Use sessões (`--session nome`) para tarefas paralelas
- Salve estados de autenticação com `agent-browser state save auth.json`

## Limitações
- Não funciona em sites com captcha avançado
- Requer que o Chromium esteja instalado
- Alguns sites detectam automação e bloqueiam
