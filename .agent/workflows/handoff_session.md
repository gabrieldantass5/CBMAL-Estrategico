---
description: Salva o contexto atual da sessão no Obsidian para garantir continuidade perfeita (Conductor Style).
---

1.  **Gerar Resumo da Sessão**:
    *   Sintetizar as principais conquistas e mudanças feitas.
    *   Listar perguntas em aberto ou bloqueios.
    *   Definir os próximos passos exatos para o próximo agente/sessão.

2.  **Criar Arquivo de Handoff**:
    *   **Diretório Alvo**: `c:/Users/D_A_N/OneDrive/Desktop/Planejamento Estratégico - CBMAL/06_Diário_e_Memórias_IA`
    *   **Formato do Nome**: `YYYY-MM-DD_Handoff_[Assunto].md`
    *   **Template de Conteúdo**:
        ```markdown
        # 🤝 Handoff de Sessão: [Assunto]
        **Data**: {{date}}
        **Status**: [Em Progresso / Bloqueado / Concluído]

        ## 🧠 Resumo do Contexto
        [Resumo conciso do que foi feito pelo Conductor]

        ## ⏭️ Próximas Ações
        - [ ] [Ação Específica 1]
        - [ ] [Ação Específica 2]

        ## 📂 Arquivos Críticos
        - [Lista de arquivos modificados ou necessários]
        ```

3.  **Executar Escrita**:
    *   Usar `write_to_file` para salvar a nota.

4.  **Confirmar**:
    *   Notificar o usuário que o estado foi salvo e o "Conductor" está pronto para a próxima sessão.
