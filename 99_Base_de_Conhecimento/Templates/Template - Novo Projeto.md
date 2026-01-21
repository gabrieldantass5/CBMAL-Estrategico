---
projeto: <% tp.file.title %>
gerente: <% tp.prompt("Gerente do Projeto") %>
setor: APO
inicio: <% tp.date.now("YYYY-MM-DD") %>
---

# 🚀 Projeto: <% tp.file.title %>

## 📌 Visão Geral
**Objetivo:** <% tp.prompt("Objetivos principal do projeto") %>

## 📊 Status
- **Fase:** Iniciação
- **Progresso:** 0%
- **Saúde:** 🟢

## 📋 Entregas Principais
- [ ] 

## 🗓️ Cronograma Resumido
| Marco | Data Prevista | Status |
| ----- | ------------- | ------ |
| Planejamento | <% tp.date.now("DD/MM/YYYY", 15) %> | ⚪ |
| Execução | <% tp.date.now("DD/MM/YYYY", 60) %> | ⚪ |

## 🔗 Referências
- Documentos no Drive: 
- Processo SEI: 
