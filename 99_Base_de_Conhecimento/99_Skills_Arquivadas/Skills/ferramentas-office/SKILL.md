---
name: ferramentas-office
description: Toolbox para manipulação programática de arquivos DOCX, PPTX e PDF. Use para extração de texto, criação de documentos formatados e OCR (Docling). Alternativa leve aos conversores online.
---

# 🛠️ Ferramentas Office (Toolbox Unificado)

## Objetivo

Consolidar todas as operações de manipulação de documentos Microsoft Office e PDFs em uma única skill, reduzindo a fragmentação do Conductor.

---

## Capacidades

### 📄 Word (DOCX)

- Extração de texto e parágrafos.
- Criação de novos documentos com formatação.
- Edição via XML (OOXML) para alterações complexas.

### 📽️ PowerPoint (PPTX)

- Extração de texto de slides.
- Criação de apresentações a partir de Markdown/HTML.
- Edição de templates existentes.

### 📕 PDF

- Extração de texto e tabelas (`pdfplumber`).
- Merge e split de arquivos (`pypdf`).
- OCR para documentos escaneados (via Docling).

---

## Modo de Operação

1. **Identificar Formato:** Verifique a extensão do arquivo (`.docx`, `.pptx`, `.pdf`).
2. **Selecionar Ferramenta:** Use a biblioteca Python apropriada.
3. **Executar e Validar:** Confirme que o output está correto antes de salvar.

---

## Ferramentas e Dependências

- Python: `pypdf`, `pdfplumber`, `python-docx`, `python-pptx`
- CLI: `pandoc`, `qpdf`
