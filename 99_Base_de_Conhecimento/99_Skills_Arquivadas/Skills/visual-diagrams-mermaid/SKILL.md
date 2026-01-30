---
name: visual-diagrams-mermaid
description: Motor de renderização de diagramas Mermaid de alta qualidade. Converte código Mermaid em SVG (visual premium) ou ASCII (terminal). Essencial para visualização de Arvores de Oportunidades e Fluxos BPMN.
---

# 🧜‍♀️ visual-diagrams-mermaid

Esta skill integra a biblioteca `beautiful-mermaid` ao ecossistema CBMAL para elevar o padrão visual dos diagramas estratégicos.

## 🎯 Quando Usar

1. **Documentos Oficiais**: Quando precisar exportar um gráfico Mermaid para SVG com cores institucionais.
2. **Visualização em Terminal**: Quando quiser "ver" o gráfico diretamente no console (ASCII).
3. **Auditoria de Processos**: Para visualizar fluxos de decisão de forma rápida e elegante.

## 🛠️ Comandos CLI (Vibe Coding)

A skill utiliza o script `scripts/mermaid_engine.mjs`.

### 1. Renderizar para SVG (Premium)

```bash
node scripts/mermaid_engine.mjs "graph TD; A-->B"
```

*Gera um arquivo .svg na raiz do projeto.*

### 2. Visualizar no Terminal (ASCII)

```bash
node scripts/mermaid_engine.mjs "01_Gestao_Estrategica/01_Planejamento_2025-2029/ARVORE_DE_OPORTUNIDADES.md" default ascii
```

## 🎨 Temas Disponíveis

- `default`: Padrão balanceado.
- `forest`: Tons verdes (sustentabilidade/meio ambiente).
- `neutral`: Tons de cinza (formalidade acadêmica).

## 🏛️ Decisões de Design (APO)

- **Cores Institucionais**: O motor foi configurado para aceitar injeção de cores do arquivo `brands/CBMAL.md` em atualizações futuras.
- **Portabilidade**: Uso de SVGs garante que os diagramas não percam qualidade ao serem inseridos no SEI ou apresentações PPTX.

---
<!-- Assimilado de: https://github.com/lukilabs/beautiful-mermaid em 30/01/2026 -->
**Skill desenvolvida pela APO/EMG** | Padrão CBMAL 2025-2029
