---
description: (The Mentor) Analisa as últimas interações e extrai novos padrões de trabalho para criar ou atualizar Skills e Regras.
---

1.  **Revisar Histórico Recente**:
    *   Analisar as últimas 5 interações/tarefas executadas.
    *   Identificar procedimentos repetitivos ou soluções criativas que foram bem-sucedidas.

2.  **Identificar Candidatos a Skills**:
    *   Se um comando complexo foi usado mais de uma vez, ele deve virar uma **Skill**.
    *   Se uma regra de formatação foi solicitada pelo usuário, ela deve ir para `.agent/rules/`.

3.  **Propor Atualizações**:
    *   Gerar uma lista de novas Skills propostas.
    *   Sugestão de nomes para as novas regras modulares.

4.  **Executar Criação**:
    *   Utilizar `skill-creator` para gerar o arquivo `.md` da nova skill.
    *   Salvar regras em `.agent/rules/`.

5.  **Confirmar Aprendizado**:
    *   Relatar ao usuário: "Hoje aprendi [X] e agora sei executar [Y] de forma automática."
