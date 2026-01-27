---
description: Comando mestre de ciclo de vida - sincroniza contexto no início, fim ou para check-ins rápidos.
---

// turbo-all

# 🦅 COMANDO: /sincronizar

Comando unificado para entrar, sair ou fazer check-ins rápidos no sistema.

## 🎯 Modos de Operação

### Modo 1: Start (Padrão - Rotina Matinal)

Use ao iniciar o dia ou uma nova sessão.

1. **Scanner de Atividades**:
    * Executar `scripts/agile_scanner.py` para listar arquivos modificados nas últimas 24h.
    * **Ler o `06_Diário_e_Memórias_IA/DNA_DO_SISTEMA.md`** para recuperar decisões pétreas.
    * Ler a **Nota Diária mais recente** em `06_Diário_e_Memórias_IA/Arquivos_Diário/` (que agora contém o Handoff da última sessão).

2. **Reconstrução de Contexto**:
    * Cruzar o planejado (Handoff) com o executado (Scanner).
    * Validar prioridades na [ARVORE_DE_OPORTUNIDADES.md](file:///c:/Users/D_A_N/OneDrive/Desktop/Planejamento%20Estrat%C3%A9gico%20-%20CBMAL/01_Gestao_Estrategica/ARVORE_DE_OPORTUNIDADES.md).
    * Apresentar status do [KANBAN_ESTRATEGICO.md](file:///c:/Users/D_A_N/OneDrive/Desktop/Planejamento%20Estrat%C3%A9gico%20-%20CBMAL/KANBAN_ESTRATEGICO.md).

3. **Briefing Matinal (Coach Style)**:
    * Criar/Atualizar nota diária em `06_Diário_e_Memórias_IA/Arquivos_Diário/`.
    * Apresentar:
        * "Onde paramos ontem"
        * "O que focar hoje"
        * **Pergunta Provocativa**: "Essa tarefa realmente remove um impedimento estratégico ou é apenas burocracia?"

4. **Definição de Alvo**:
    * Estabelecer a meta da sessão em uma frase clara.

### Modo 2: End (Handoff - Fim de Sessão)

Use ao encerrar o dia ou sessão (comando: `/sincronizar --end`).

1. **Compilação de Progresso**:
    * Listar tarefas concluídas e pendentes.
    * Registrar decisões críticas e aprendizados técnicos.

2. **Atualização da Nota Diária (Handoff)**:
    * No arquivo `06_Diário_e_Memórias_IA/Arquivos_Diário/YYYY-MM-DD.md`, anexar o resumo da sessão:

        ```markdown
        ---
        ## 🤝 Handoff da Sessão [HH:MM]
        **Status**: [Em Progresso / Bloqueado / Concluído]

        ### 🧠 Resumo do Contexto
        [O que foi feito nesta sessão]

        ### ⏭️ Próximas Ações
        - [ ] [Ação 1]

        ### 📂 Arquivos Críticos
        - [Lista de modificações]
        ```

3. **Atualização do DNA do Sistema**:
    * Condensar decisões críticas e aprendizados em `06_Diário_e_Memórias_IA/DNA_DO_SISTEMA.md`.
    * Sugerir atualizações para Skills ou Biblioteca de Contexto.

### Modo 3: Quick (Ritual Ágil - Check-in Rápido)

Use para sincronizações rápidas durante o dia (comando: `/sincronizar --quick`).

1. **Sincronização Silenciosa**:
    * Executar scanner e cruzar com handoff.
    * Resumir em 3 tópicos: "Onde paramos", "Impedimentos", "Próximo Salto".

2. **Briefing Tactical**:
    * Apresentar status do Kanban (Em Curso).
    * Definir meta imediata em uma frase.

## 🏁 Resultado Final

* Contexto sincronizado e memória preservada.
* Prioridades claras para a sessão.
