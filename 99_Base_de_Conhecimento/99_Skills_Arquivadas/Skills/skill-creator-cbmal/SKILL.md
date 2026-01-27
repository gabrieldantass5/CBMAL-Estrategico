---
name: skill-creator-cbmal
description: Especialista em criar e assimilar skills para o ecossistema CBMAL. Use quando precisar criar uma nova skill do zero, adaptar skills externas (Modo Borg), ou evoluir skills existentes. Combina os princípios do skill-creator original com capacidades de assimilação inteligente.
---

# Skill Creator CBMAL

Especialista em criar, adaptar e assimilar skills para o contexto estratégico do CBMAL.

## 🎯 Quando Usar Esta Skill

1. **Criar skill do zero**: Quando identificar um padrão repetitivo que merece automação.
2. **Modo Borg (Assimilar)**: Quando encontrar uma skill externa interessante e quiser adaptá-la ao padrão CBMAL.
3. **Evoluir skill existente**: Quando uma skill precisa de melhorias baseadas no uso real.

---

## 🧠 Princípios CBMAL (Adaptados)

### 1. Rastreabilidade Obrigatória

Toda skill criada deve:

- Citar fontes (Portarias, Leis, Normas) quando aplicável.
- Incluir metadados de origem (se assimilada de fonte externa).
- Documentar decisões de design no próprio SKILL.md.

### 2. Contexto Militar/Público

- Usar terminologia técnica apropriada (APO, SGE, SEI, etc.).
- Respeitar hierarquia e formalidade quando aplicável.
- Alinhar com a Política Estratégica 2025-2029.

### 3. Eficiência de Tokens

- Seguir o princípio "Claude já é inteligente" do skill-creator original.
- Preferir exemplos concisos a explicações verbosas.
- Usar progressive disclosure (SKILL.md → references/ → scripts/).

---

## 🤖 Modo 1: Criação do Zero

Seguir o processo padrão do `skill-creator`:

1. **Entender com exemplos concretos**
2. **Planejar recursos reutilizáveis** (scripts, references, assets)
3. **Criar estrutura**:

   ```
   skill-name/
   ├── SKILL.md (obrigatório)
   └── [scripts/references/assets/] (opcional)
   ```

4. **Escrever SKILL.md**:
   - Frontmatter YAML (`name`, `description`)
   - Body com instruções imperativas
5. **Testar e iterar**

**Localização padrão**: `.agent/skills/[nome-da-skill]/`

---

## 🛸 Modo 2: Assimilação Borg (Adaptação Inteligente)

Quando o usuário fornecer uma skill externa (URL, texto, arquivo), execute o **Protocolo de Assimilação em 5 Fases**:

### Fase 1: Reconhecimento

1. Ler a skill externa completamente.
2. Identificar:
   - Nome e propósito
   - Dependências (APIs, bibliotecas, MCP servers)
   - Estrutura (scripts, references, assets)

### Fase 1.5: Verificação de Infraestrutura

1. Checar se as dependências existem no ambiente CBMAL:
   - ✅ Disponível
   - ⚠️ Substituível (propor alternativa)
   - ❌ Ausente (documentar limitação)

### Fase 2: Análise de Gap

Classificar o valor da skill:

- **ALTO**: Funcionalidade totalmente nova e útil.
- **MÉDIO**: Funcionalidade parcialmente coberta por skills existentes.
- **BAIXO**: Redundante ou fora do escopo estratégico.

Recomendar ação:

- **PROCEED**: Assimilar completamente (skill nova).
- **EXTEND**: Adicionar funcionalidade a skill existente.
- **ITERATE**: Extrair apenas o padrão/conceito.
- **BLOCK**: Não assimilar (justificar).

### Fase 3: Planejamento de Adaptação

Se PROCEED ou EXTEND:

1. Converter nomenclatura:
   - `TitleCase` → `kebab-case`
   - Nomes genéricos → específicos CBMAL
2. Mapear diretórios:
   - Estrutura externa → `.agent/skills/[nome-cbmal]/`
3. Adaptar dependências:
   - Substituir APIs indisponíveis
   - Ajustar caminhos de arquivos
4. Preservar atribuição:
   - Adicionar comentário no SKILL.md: `<!-- Assimilado de: [fonte] em [data] -->`

### Fase 4: Implementação

1. Criar a nova skill adaptada.
2. Testar funcionalidades críticas.
3. Documentar mudanças no SKILL.md.

### Fase 5: Registro

Atualizar o arquivo `.agent/ASSIMILATION_LOG.md`:

```markdown
## [YYYY-MM-DD] Assimilação: [Nome da Skill]
**Fonte**: [URL ou descrição]
**Decisão**: PROCEED/EXTEND/ITERATE/BLOCK
**Adaptações**:
- [Lista de mudanças]
**Dependências**: [Novas dependências, se houver]
```

---

## 📋 Comandos Rápidos

### `/criar-skill [nome]`

Inicia o processo de criação do zero.

### `/assimilar [URL ou texto]`

Ativa o Modo Borg para adaptar skill externa.

### `/evoluir [nome-skill]`

Abre skill existente para melhorias iterativas.

---

## 🔍 Checklist de Qualidade (CBMAL)

Antes de finalizar qualquer skill, verificar:

- [ ] **Frontmatter completo** (`name`, `description`)
- [ ] **Descrição clara** (o que faz + quando usar)
- [ ] **Instruções imperativas** (não explicativas)
- [ ] **Rastreabilidade** (fontes citadas, se aplicável)
- [ ] **Contexto apropriado** (terminologia militar/pública)
- [ ] **Eficiência de tokens** (< 500 linhas no SKILL.md)
- [ ] **Atribuição** (se assimilada, fonte documentada)
- [ ] **Testada** (scripts executados, exemplos validados)

---

## 📚 Referências Internas

Para padrões de design avançados, consultar:

- `skill-creator/references/workflows.md` (processos multi-etapas)
- `skill-creator/references/output-patterns.md` (templates e exemplos)

---

## 🎖️ Assinatura de Qualidade

Toda skill criada por esta skill deve incluir no rodapé do SKILL.md:

```markdown
---
**Skill desenvolvida pela APO/EMG** | Padrão CBMAL 2025-2029
```
