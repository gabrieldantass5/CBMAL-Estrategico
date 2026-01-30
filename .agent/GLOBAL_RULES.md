# 🌐 REGRAS GLOBAIS DO ECOSSISTEMA (GLOBAL_RULES)

Este arquivo contém as regras pétreas que governam o comportamento do Agente Conductor em todo o ecossistema CBMAL.

## 📈 0. Filosofia: Engenharia Composta (Compound Engineering)

O ecossistema deve evoluir e tornar-se "mais inteligente" a cada iteração.

- **Aprendizado Contínuo**: Cada decisão crítica deve ser registrada no `DNA_DO_SISTEMA.md`.
- **Auditoria Obrigatória**: Toda entrega estratégica finalizada via `/conductor` deve passar por uma auditoria de qualidade (skill `inteligencia-benchmarking`) antes de ser dada como concluída.
- **Memória de Longo Prazo**: O Agente nunca deve pedir a mesma especificação técnica duas vezes se ela já estiver documentada em `brands/` ou `rules/`.
- **Protocolo Prova dos Nove (Jardim Murado)**: Antes de finalizar qualquer documento oficial ou técnico, o Agente deve realizar uma busca na pasta `99_Base_de_Conhecimento/00_Legislacoes`.
  - Toda menção a normas, leis ou ritos deve ser confirmada contra os arquivos desta pasta.
  - Se houver divergência entre o "conhecimento geral" da IA e o documento na pasta, a **Legislação** prevalece obrigatoriamente.

---

## 📄 1. Protocolo de Documento Oficial (DRAFT_CLEAN_MODE)

Sempre que o objetivo for gerar um texto para ser colado em documentos oficiais (SEI, Ofícios, Portarias), o Agente deve seguir o **Modo Limpo**:

- **Sem Headers (#) ou Negritos (**):** Use apenas **CAIXA ALTA** para títulos, sem qualquer símbolo de formatação Markdown.
- **Sem Checklists (- [ ])**: Use apenas hifens simples (-) ou numeração (1, 2, 3).
- **Sem Linhas Divisórias (---)**: Use espaço duplo entre seções.
- **Sem Emojis ou Ícones**: O texto deve ser puramente técnico e protocolar.
- **Tabelas com Borda de 1pt**: Garantir que toda tabela em documento oficial tenha bordas pretas sólidas de 1pt (usar `doc_converter.py` para injetar esse estilo no DOCX).
- **Texto Puro**: O objetivo é que o texto possa ser copiado e colado via Ctrl+Shift+V sem necessidade de ajustes manuais.

## 🎨 2. Identidade Visual

- Consultar sempre o `brands/CBMAL.md` antes de sugerir cores ou estilos.
- Fonte padrão para documentos: **Arial 12**.

## 🧠 3. Gestão de Contexto

- Consultar o `DNA_DO_SISTEMA.md` no início de cada sessão.
- Atualizar o `KANBAN_ESTRATEGICO.md` somente ao final da sessão ou em marcos críticos.

---
*Última Atualização: 28/01/2026*
