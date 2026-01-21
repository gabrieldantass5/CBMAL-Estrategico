---
description: (The Conductor Master) Orquestra múltiplos sub-agentes para processar notas, extrair tarefas e manter o alinhamento estratégico total.
---

// turbo-all
1.  **Fase 0: Sincronização de Contexto (Mindset)**:
    *   **Ação**: Ler os arquivos da `.agent/biblioteca_contexto/`.
    *   **Objetivo**: Sincronizar o tom de voz e as prioridades atuais do Comando antes de processar qualquer dado.

2.  **Fase 1: O Bibliotecário (Organizador)**:
    *   **Ação**: Executar o workflow `/organizar_inbox`.
    *   **Objetivo**: Garantir que todos os arquivos soltos estejam em suas pastas do método PARA.

3.  **Fase 2: O Garimpeiro de Tarefas (Extrator)**:
    *   **Ação**: Scanear novos arquivos em `99_Base_de_Conhecimento/Rascunhos_e_Notas` e notas diárias recentes.
    *   **Extração**: Identificar checklists `[ ]`, termos como "FAZER:", "PENDENTE:", "AÇÃO:" ou "ENCAMINHAR:".
    *   **Tagueamento**: Atribuir automaticamente tags como `#foco_profundo`, `#burocracia_sei` ou `#urgente` baseado no contexto.
    *   **Atualização**: Inserir essas novas tarefas na coluna "Backlog" ou "A Fazer" do `KANBAN_ESTRATEGICO.md`.

4.  **Fase 3: O Conector Neural (Semeador)**:
    *   **Ação**: Executar o workflow `/conectar_ideias` para cada nova nota técnica ou rascunho processado na Fase 1.
    *   **Objetivo**: Criar backlinks semânticos entre a produção recente e o Plano Estratégico.

5.  **Fase 4: O Auditor Estratégico (Validador)**:
    *   **Ação**: Cruzar as novas tarefas extraídas com a [ARVORE_DE_OPORTUNIDADES.md](file:///c:/Users/D_A_N/OneDrive\Desktop\Planejamento Estratégico - CBMAL\01_Gestao_Estrategica\ARVORE_DE_OPORTUNIDADES.md).
    *   **Insight**: Alertar se houver tarefas que não contribuem para nenhum objetivo estratégico (Desperdício de energia).

6.  **Fase 5: O Estrategista (Dashboard)**:
    *   **Ação**: Executar o workflow `/dashboard_upgrade`.
    *   **Objetivo**: Gerar a visão executiva final da saúde do sistema.

7.  **Fase Final: Debriefing e Aprendizado**:
    *   **Ação**: Perguntar: *"O que aprendemos ou decidimos hoje que deve ser imortalizado na Biblioteca de Contexto?"*.
    *   **Ação**: Identificar se alguma Skill (como a de Taxa de Bombeiros ou Redação) precisa de atualização baseada em novas jurisprudências ou portarias detectadas no processo.

8.  **Finalização**:
    *   Gerar um relatório resumido:
        - ✅ Notas organizadas.
        - 📌 N novas tarefas detectadas (tagueadas por prioridade).
        - 🔗 Conexões neurais criadas.
        - 🧠 Sugestões de atualização de contexto/skills.
