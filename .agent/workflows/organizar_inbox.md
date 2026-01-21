---
description: (The Librarian) Analisa notas na Inbox e as move para a pasta correta (PARA) baseada no conteúdo.
---

1.  **Scanner de Inbox & Brain Dumps**:
    *   Listar arquivos em `Inbox/` (ou pasta raiz se Inbox não existir).
    *   **Detecção de Brain Dump:** Se o arquivo contiver listas desestruturadas, áudio transcrito ou pensamentos soltos, classificar como "Brain Dump".

2.  **Processamento e Classificação**:
    *   **Brain Dumps**: 
        *   Extrair tarefas acionáveis, atribuir tags de natureza (`#foco_profundo`, `#burocracia`, `#externo`) e inserir no `KANBAN_ESTRATEGICO.md`.
        *   Mover arquivo original para `99_Base_de_Conhecimento/Rascunhos_e_Notas`.
    *   **PARA Method (Outros Arquivos)**:
        *   **Projetos**: Tem prazo fim? -> Mover para `02_Projetos_e_Demandas`.
        *   **Áreas**: Responsabilidade contínua? -> Mover para `01_Gestao_Estrategica`.
        *   **Recursos**: Material de consulta? -> Mover para `99_Base_de_Conhecimento`.
        *   **Arquivo**: Irrelevante? -> Mover para `_Archive`.

3.  **Ação de Movimento**:
    *   Usar comando `Move-Item` (PowerShell) para realocar os arquivos.
    *   Adicionar tag `#processado_pela_IA` ao final do arquivo.

4.  **Confirmar**:
    *   Listar "Para onde foi o quê".
