---
tipo: Nota Técnica
numero_sei: <% tp.prompt("Número do Processo SEI") %>
data: <% tp.date.now("YYYY-MM-DD") %>
status: Elaboração
---

# <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bras%C3%A3o_do_CBMAL.png/50px-Bras%C3%A3o_do_CBMAL.png" style="vertical-align: middle; margin-right: 10px;"> NOTA TÉCNICA Nº __/2026 - CBMAL/EMG/APO

**ASSUNTO:** <% tp.file.title %>
**REFERÊNCIA:** Processo SEI nº <% tp.frontmatter.numero_sei %>

---

## 1. INTRODUÇÃO
1.1. Trata-se de...

## 2. ANÁLISE TÉCNICA
2.1. Conforme a **Política de Gestão Estratégica**...
2.2. ...

## 3. CONCLUSÃO
3.1. Diante do exposto, sugere-se...

---
> [!info] **Controle de Elaboração**
> **Elaborado por:** <% tp.prompt("Seu Nome/Posto") %>
> **Data:** <% tp.date.now("DD [de] MMMM [de] YYYY") %>
> **Assistência:** Antigravity IA
> **Padrão Visual:** Manual CBMAL 2022 (Exo 2)

