---
tipo: skill
status: Ativo
---
# Skill: Análise de Sessão (Feedback Loop)

## Descrição
Esta skill analisa os logs de conversa ou o arquivo de "pontos de fricção" do usuário para sugerir melhorias no sistema de prompts, regras de usuário e workflows do Conductor CBMAL.

## Instruções
1. **Identificar Atrito**: Procure por palavras-chave em conversas passadas ou notas de erro (ex: "não era isso", "erro", "repetitivo", "esqueceu").
2. **Propor Melhoria**: Sugira uma nova regra para o `user_rules` ou uma alteração no `GEMINI_CONDUCTOR_CBMAL.md`.
3. **Refinar Workflows**: Se um workflow está falhando em um passo específico, sugira a correção.

## Como Usar
"Analise nossa última sessão e sugira uma melhoria para o meu sistema de regras."
