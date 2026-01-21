---
description: (The Heart) Sincronização de contexto, definição de prioridades e salvamento de progresso (Handoff).
---

// turbo-all
# 🦅 COMANDO: /sincronizar

Este workflow deve ser utilizado no início e no fim de cada sessão para garantir a continuidade perfeita e o alinhamento estratégico.

## 🌅 FASE 1: Início de Sessão (Reconstrução de Contexto)
1. **Sincronização Silenciosa**:
    * Executar `scripts/agile_scanner.py` para identificar arquivos modificados nas últimas 24h.
    * Ler o último arquivo de Handoff em `06_Diário_e_Memórias_IA/Memorias_de_Sessao/`.

2. **Briefing Tactical (Coach Style)**:
    * Cruzar o planejado (Handoff) com o executado (Scanner).
    * Validar prioridades na [ARVORE_DE_OPORTUNIDADES.md](file:///c:/Users/D_A_N/OneDrive/Desktop/Planejamento%20Estrat%C3%A9gico%20-%20CBMAL/01_Gestao_Estrategica/ARVORE_DE_OPORTUNIDADES.md).
    * Apresentar o status do [KANBAN_ESTRATEGICO.md](file:///c:/Users/D_A_N/OneDrive/Desktop/Planejamento%20Estrat%C3%A9gico%20-%20CBMAL/KANBAN_ESTRATEGICO.md).
    * Gerar a "Pergunta Provocativa do Dia" para evitar burocracia desnecessária.

3. **Definição de Alvo**:
    * Estabelecer a meta da sessão em uma frase clara.

## 🌙 FASE 2: Encerramento (Handoff & Memória)
*Caso o usuário esteja encerrando a sessão:*

1. **Compilação de Progresso**:
    * Listar tarefas concluídas e pendentes.
    * Registrar decisões críticas e aprendizados técnicos (novas portarias, mudanças de fluxo).

2. **Geração do Handoff**:
    * Criar arquivo `HANDOFF_YYYY-MM-DD_HHMM.md` na pasta de memórias.
    * Estrutura: [STATUS ATUAL] -> [PENDÊNCIAS IMEDIATAS] -> [CONTEXTO PARA O PRÓXIMO AGENTE].

3. **Limpeza de Memória**:
    * Sugerir atualizações para a Biblioteca de Contexto ou Skills baseadas na produção do dia.
