---
description: (The Connector) Analisa uma nota e cria backlinks semânticos para outros conceitos do cofre.
---

1.  **Seleção do Alvo**:
    *   Identificar a nota ativa ou solicitar ao usuário qual nota deve ser enriquecida.

2.  **Busca Semântica**:
    *   Ler o conteúdo da nota.
    *   Identificar 3 a 5 **Conceitos Chave** (ex: "Eficiência", "Burocracia", "Indicadores").
    *   Procurar no cofre (grep/search) por outras notas que abordem esses mesmos conceitos.

3.  **Geração de Backlinks**:
    *   Inserir no final da nota uma seção:
    ```markdown
    ## 🧠 Conexões Neurais (IA)
    - [[Outra Nota Relevante]] - *Por que conecta? Explicação breve.*
    - [[Objetivo Estratégico X]] - *Impacto direto identificado.*
    ```

4.  **Validação**:
    *   Garantir que os links funcionam (arquivo existe).
