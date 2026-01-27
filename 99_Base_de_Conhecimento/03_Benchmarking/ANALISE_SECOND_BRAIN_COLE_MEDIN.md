# 🧠 Análise de Benchmarking: Second Brain System (Cole Medin)

**Fonte**: [I Built My Second Brain with Claude Code + Obsidian + Skills](https://www.youtube.com/watch/jYMhDEzNAN0)  
**Data da Análise**: 26/01/2026  
**Analista**: Gemini Conductor CBMAL

---

## 🎯 Resumo Executivo

Cole Medin apresenta um sistema de "Second Brain" baseado em **Claude Code + Obsidian + Skills** que economiza "dezenas de horas por semana". O sistema não é voltado para automação total, mas para **ideação, pesquisa e organização** — exatamente o que precisamos no CBMAL.

### Principais Insights

1. **Progressive Disclosure**: Skills carregam contexto apenas quando necessário (3 camadas).
2. **MCP2Skill**: Transformar MCPs em skills para evitar sobrecarga de contexto.
3. **Brand & Voice Generator**: Skill que cria um "DNA" de marca/voz para personalizar todas as saídas.
4. **PowerPoint Generator**: Geração de slides on-brand via Python (não só texto).
5. **Obsidian como Canvas**: Markdown local + file system = formato ideal para LLMs.

---

## 📊 Comparação: Sistema Cole vs. CBMAL Atual

| **Aspecto** | **Cole Medin** | **CBMAL Atual** | **Gap/Oportunidade** |
|-------------|----------------|-----------------|----------------------|
| **Organização de Skills** | Progressive Disclosure (3 camadas) | Skills carregadas diretamente | ⚠️ Podemos otimizar contexto |
| **MCP Integration** | MCP2Skill (via Python script) | MCPs diretos (não temos ainda) | ✅ Implementar se necessário |
| **Brand System** | Skill dedicada (`brand-voice-generator`) | Hardcoded em `visual_identity_pro` | 🔄 Centralizar em arquivo único |
| **PowerPoint** | Python-based (cookbook/) | Não temos | ⭐ Alta prioridade (apresentações) |
| **Research Engine** | Mencionado, não detalhado | Temos `inteligencia-benchmarking` | ✅ Já temos equivalente |
| **Obsidian Integration** | File system direto | File system direto | ✅ Já alinhado |
| **Global Rules** | `.claude.md` com gotchas de MCPs | `.agent/CONTEXT_MAP.md` + skills | 🔄 Consolidar regras globais |

---

## 🔍 Conceitos-Chave Extraídos

### 1. **Progressive Disclosure (3 Camadas)**

Cole implementa um sistema de carregamento progressivo de contexto:

```
Camada 1: Descrição curta (YAML frontmatter)
         ↓ (Claude decide se precisa)
Camada 2: skill.md completo
         ↓ (Apenas se necessário)
Camada 3: Arquivos auxiliares (cookbook/, examples/, etc.)
```

**Aplicação CBMAL**:

- Atualmente carregamos o `SKILL.md` inteiro sempre.
- Podemos adicionar um campo `trigger_keywords` no frontmatter para otimizar.
- Arquivos de referência (ex: `normas/`, `templates/`) só carregados quando invocados.

---

### 2. **MCP2Skill Pattern**

Cole criou um script Python (`mcp_client.py`) que:

- Lê um `mcp-config.json` (igual ao Claude Desktop).
- Expõe funções para listar servidores, ferramentas e executar ações.
- Evita carregar 20+ ferramentas do Zapier MCP no contexto inicial.

**Aplicação CBMAL**:

- **Não precisamos agora** (não usamos MCPs ainda).
- Se integrarmos SEI via MCP no futuro, esse padrão será crítico.

---

### 3. **Brand & Voice Generator**

Skill que faz perguntas ao usuário e gera um arquivo `brands/BRAND_NAME.md` com:

- Tom de voz (formal, técnico, acessível).
- Paleta de cores (hex codes).
- Tipografia preferida.
- Exemplos de escrita.

**Aplicação CBMAL**:

- Temos `visual_identity_pro` com paleta hardcoded.
- **Oportunidade**: Criar `brands/CBMAL.md` e referenciar em todas as skills de design.
- Benefício: Facilita manutenção (um único arquivo para atualizar cores/fontes).

---

### 4. **PowerPoint Generator (Python-based)**

Cole usa **python-pptx** com scripts modulares:

- `cookbook/create_slide.py`
- `cookbook/edit_slide.py`
- `cookbook/apply_brand.py`

**Por que é melhor que ferramentas como Gamma**:

- Controle total sobre layout, fontes, cores.
- On-brand (usa o `brands/BRAND_NAME.md`).
- Pode gerar gráficos, tabelas, imagens inline.

**Aplicação CBMAL**:

- **Alta prioridade**: Criamos muitas apresentações (RME, Comando, Seminários).
- Podemos criar `skills/powerpoint-cbmal/` baseado no template dele.
- Integrar com `brands/CBMAL.md` para slides automáticos no padrão institucional.

---

### 5. **Obsidian como Canvas**

Cole usa Obsidian para:

- Armazenar todas as saídas (scripts, posts, apresentações).
- Aplicar "human touch" antes de publicar.
- Visualizar conexões no graph view.

**Aplicação CBMAL**:

- **Já fazemos isso** com a estrutura de pastas.
- Podemos melhorar com templates do Obsidian (via Templater plugin).

---

## 🚀 Oportunidades de Melhoria (Priorizadas)

### 🔥 Quick Wins (1-2 horas)

1. **Criar `brands/CBMAL.md`**:
   - Consolidar paleta, tipografia e tom de voz.
   - Referenciar em `visual_identity_pro`, `dashboard-designer-cbmal`, `redacao-oficial`.

2. **Adicionar `trigger_keywords` no frontmatter das skills**:
   - Exemplo: `keywords: ["dashboard", "painel", "visualização"]` na `dashboard-designer-cbmal`.
   - Facilita descoberta automática pelo agente.

3. **Documentar "Gotchas" em `.agent/GLOBAL_RULES.md`**:
   - Criar arquivo com regras globais (ex: "Sempre usar `brands/CBMAL.md` para cores").
   - Equivalente ao `.claude.md` do Cole.

---

### ⭐ Médio Prazo (1 semana)

1. **Implementar PowerPoint Generator CBMAL**:
   - Adaptar o template do Cole para o padrão CBMAL.
   - Criar `skills/powerpoint-cbmal/cookbook/` com scripts Python.
   - Testar com uma apresentação de RME.

2. **Progressive Disclosure nas Skills**:
   - Refatorar skills grandes (ex: `gestao-estrategica`) para separar:
     - `SKILL.md` (instruções principais).
     - `references/` (normas, templates, exemplos).
   - Instruir o agente a carregar `references/` apenas quando necessário.

---

### 🔮 Longo Prazo (1 mês+)

1. **MCP2Skill (se necessário)**:
   - Se integrarmos SEI, Gmail ou outros serviços via MCP, implementar o padrão do Cole.

2. **Research Engine Dedicado**:
   - Cole menciona um "research engine" não detalhado no vídeo.
   - Podemos expandir `inteligencia-benchmarking` para incluir:
     - Scraping automático de sites de referência (FNSP, CBMDF, etc.).
     - SGinteze semanal de novidades.

---

## 🧩 Padrões Arquiteturais Identificados

### Estrutura de Skill (Cole Medin)

```
skill-name/
├── SKILL.md              # Instruções principais + frontmatter
├── cookbook/             # Scripts Python (se aplicável)
│   ├── script1.py
│   └── script2.py
├── examples/             # Exemplos de uso
│   └── example_output.md
└── references/           # Documentação auxiliar
    └── api_docs.md
```

### Frontmatter Padrão

```yaml
---
name: PowerPoint Generator
description: Create and edit on-brand PowerPoint presentations
triggers:
  - "create presentation"
  - "generate slides"
  - "make powerpoint"
---
```

---

## 🎓 Lições Aprendidas

### O que Cole faz BEM

1. **Foco em Ideação, não Automação**: O Second Brain não substitui o humano, apenas acelera.
2. **Context Efficiency**: Progressive Disclosure é essencial para escalar (ele tem 50+ skills).
3. **Brand Consistency**: Um único arquivo de marca garante coerência em todas as saídas.
4. **Python para Tarefas Complexas**: PowerPoint, vídeos (Remotion), etc. — código é mais flexível que prompts.

### O que NÃO precisamos (ainda)

1. **MCP2Skill**: Não usamos MCPs no CBMAL.
2. **Remotion (geração de vídeos)**: Não é prioridade.
3. **Zapier Integration**: Não temos necessidade de conectar Gmail/Asana/etc.

---

## 📋 Checklist de Ações Sugeridas

### Fase 1: Consolidação (Hoje)

- [ ] Criar `brands/CBMAL.md` com paleta, tipografia e tom de voz.
- [ ] Adicionar `trigger_keywords` em 3-5 skills principais.
- [ ] Criar `.agent/GLOBAL_RULES.md` com regras globais.

### Fase 2: PowerPoint (Esta semana)

- [ ] Adaptar o PowerPoint Generator do Cole para CBMAL.
- [ ] Testar com uma apresentação real (ex: próxima RME).
- [ ] Documentar no Manual EPD.

### Fase 3: Otimização (Próximo mês)

- [ ] Refatorar skills grandes para Progressive Disclosure.
- [ ] Expandir `inteligencia-benchmarking` com scraping automático.

---

## 🔗 Recursos Úteis

- **Repo do Cole**: [Não fornecido no vídeo, mas ele menciona no description]
- **Anthropic Skill Creator**: Já temos em `skill-creator-cbmal`.
- **Python-PPTX Docs**: <https://python-pptx.readthedocs.io/>

---

## 🧠 Conexões Neurais (IA)

- [[IDEIAS_SISTEMA_CBMAL]] - *Centraliza as propostas derivadas desta análise para implementação no ecossistema.*
- [[CBMAL]] - *Referência de identidade visual (brands/) inspirada pelo conceito de Brand & Voice do Cole.*
- [[Plano Estratégico CBMAL 2025-2029]] - *O sistema de Second Brain visa aumentar a eficiência da gestão deste plano.*

**Última Atualização**: 27/01/2026 17:30
