---
description: Realiza uma auditoria de alinhamento estratégico em um documento ou texto selecionado, verificando consistência com o Plano Estratégico 2025-2029.
---

1.  **Identificar o Documento Alvo**:
    *   Identifique o arquivo ou texto que o usuário deseja auditar.
    *   Se não especificado, solicite ao usuário o caminho do arquivo usando `ask_user`.

2.  **Carregar Contexto Estratégico**:
    *   Utilize a ferramenta `find_by_name` para localizar arquivos chave como "Plano Estratégico" e "2025-2029".
    *   Leia o conteúdo destes arquivos para estabelecer a "Verdade Estratégica".

3.  **Análise de Alinhamento**:
    *   Compare o documento alvo com a "Verdade Estratégica".
    *   Verifique:
        *   **Terminologia**: Uso correto dos termos oficiais?
        *   **Metas e Prazos**: Estão coerentes com os marcos de 2025-2029?
        *   **Atribuições**: As responsabilidades citadas conflitam com o organograma oficial?

4.  **Relatório de Auditoria**:
    *   Gere um relatório em Markdown com o seguinte formato:
        # Relatório de Auditoria Estratégica
        **Documento Analisado:** [Nome]
        **Data:** [Data Atual]
        
        ## 1. Resumo Executivo
        (Parecer geral sobre o alinhamento)

        ## 2. Inconsistências Detectadas
        | Localização | Texto Atual | Correção Sugerida | Motivo |
        |---|---|---|---|
        | Pág X, Par Y | ... | ... | ... |

        ## 3. Recomendações
        (Ações corretivas sugeridas)

5.  **Conclusão**:
    *   Apresente o relatório ao usuário e pergunte se deseja realizar as correções automaticamente no documento original.
