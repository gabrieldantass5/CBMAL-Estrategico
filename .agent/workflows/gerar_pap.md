---
description: Gera um rascunho de Procedimento Operacional Padrão (PAP) formatado de acordo com as normas do CBMAL.
---

1.  **Briefing Inicial**:
    *   Verifique se o usuário forneceu os dados básicos (Título, Objetivo, Passos).
    *   Se não, faça perguntas direcionadas para coletar essas informações.

2.  **Consulta de Templates**:
    *   Verifique na pasta `99_Base_de_Conhecimento` se existem templates de PAP.
    *   Se existir, leia o template para usar como base.

3.  **Mineração de Processo**:
    *   Organize os passos fornecidos pelo usuário em uma sequência lógica e cronológica.
    *   Identifique pontos de decisão (Sim/Não) e ramificações.

4.  **Redação Técnica (Estilo CBMAL)**:
    *   Escreva o conteúdo utilizando:
        *   Verbos no imperativo ("Faça", "Verifique") ou infinitivo impessoal, conforme padrão dos documentos existentes.
        *   Clareza e concisão.
        *   Referências cruzadas a outros normas (se souber).

5.  **Geração do Artefato**:
    *   Crie um arquivo Markdown com a estrutura:
        *   Cabecalho Padrão.
        *   1. Finalidade.
        *   2. Referências.
        *   3. Descrição do Procedimento (Use Mermaid para fluxogramas se complexo).
        *   4. Anexos/Formulários.

6.  **Revisão**:
    *   Apresente o rascunho e pergunte se o usuário quer expandir alguma seção específica.
