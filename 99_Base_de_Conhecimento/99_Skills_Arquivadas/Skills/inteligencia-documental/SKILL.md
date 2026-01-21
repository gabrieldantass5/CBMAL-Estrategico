---
name: inteligencia-documental
description: Protocolo de Leitura e Análise de Documentos (PDFs). Define quando usar leitura rápida ou processamento pesado.
---

# 📜 PROTOCOLO DE LEITURA DE PDF (V2.0 - FAST TRACK)

Para garantir velocidade e eficiência no CBMAL OS, siga estritamente este fluxo de decisão ao receber um PDF para análise.

## 🟢 1. MODO PADRÃO: Leitura Rápida (Fast Track)
**Quando usar:**
- Para 95% dos casos (Ofícios, Portarias, Despachos, Leis, Relatórios Textuais).
- Quando o usuário pedir "analise este documento" ou "o que diz este arquivo?".
- **Objetivo:** Velocidade instantânea via terminal.

**Como executar:**
```bash
python scripts/read_pdf_fast.py "Caminho/Do/Arquivo.pdf"
```
*Este script usa PyMuPDF (fitz) para extração direta de texto, sem overhead.*

## 🔴 2. MODO PESADO: Análise Complexa (Deep Track)
**Quando usar (SOMENTE SE):**
- O documento contém **TABELAS FINANCEIRAS COMPLEXAS** que precisam ser processadas como dados estruturados.
- O PDF é uma **IMAGEM ESCANEADA** (sem texto selecionável) e o Fast Track falhou.
- O usuário **PEDIU EXPRESSAMENTE** ("Use o Docling", "Extração profunda", "Converta as tabelas").

**Como executar:**
- **Docling:** Para converter tabelas em Markdown.
```bash
# Via ambiente virtual específico se necessário
python scripts/converter_pdf.py "Caminho/Do/Arquivo.pdf"
```
- **Agent Browser:** Para visualização visual se a conversão falhar.

## ⚠️ CONSIDERAÇÃO FINAL
Nunca inicie pelo modo pesado. Se o Fast Track falhar (retornar pouco texto ou lixo), avise o usuário e sugira o modo pesado.
