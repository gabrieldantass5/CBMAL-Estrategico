# MANUAL DE IMPLEMENTAÇÃO DO ECOSSISTEMA DE PRODUTIVIDADE DIGITAL (EPD)

## CORPO DE BOMBEIROS MILITAR DE ALAGOAS
**Guia Prático para Transformação Digital das Seções Administrativas**

---

> *"Do Zero ao Herói: Como criar seu Assistente de IA, organizar seu conhecimento e multiplicar sua eficiência operacional em 7 passos."*

---

**Maceió - AL**
**2026**

---

## AUTORIDADES

**COMANDANTE-GERAL DO CBMAL:**
Cel QOEM BM Sérgio André Silva Verçosa

**CHEFE DO ESTADO-MAIOR GERAL:**
Cel QOEM BM Eduardo Hercules da Silva Justo

**ASSESSOR DE PLANEJAMENTO E ORÇAMENTO:**
TC QOEM BM Marcos Paulo Seara Barbosa

**CHEFE DA SEÇÃO DE GESTÃO ESTRATÉGICA:**
1º Ten QOEM Gabriel Dantas da Cruz

---

## SUMÁRIO

### PARTE I – FUNDAMENTOS
1. [Apresentação e Visão do Futuro](#capítulo-1-apresentação-e-visão-do-futuro)
2. [O "Segundo Cérebro" – Instalando sua Base de Conhecimento](#capítulo-2-o-segundo-cérebro)

### PARTE II – O AGENTE DIGITAL
3. [Gênese do Agente – Criando sua "Inteligência Setorial"](#capítulo-3-gênese-do-agente)
4. [Arquitetura de Skills – Ensinando sua IA a Trabalhar](#capítulo-4-arquitetura-de-skills)

### PARTE III – FERRAMENTAS AVANÇADAS
5. [Interface de Comando – Operando o Antigravity/Gemini CLI](#capítulo-5-interface-de-comando)
6. [Metodologia de Rotina – O "Ritual de Alta Performance"](#capítulo-6-metodologia-de-rotina)

### PARTE IV – ESTUDO DE CASO
7. [Na Prática – O Assessor de Planejamento (APO/SGE)](#capítulo-7-estudo-de-caso)

### ANEXOS
- [Anexo A: Template de System Prompt](#anexo-a)
- [Anexo B: Template de Skill](#anexo-b)
- [Anexo C: Estrutura de Pastas Obsidian](#anexo-c)
- [Anexo D: Checklist de Implementação](#anexo-d)
- [Anexo E: Glossário de Termos Técnicos](#anexo-e)

---

# PARTE I – FUNDAMENTOS

---

## Capítulo 1: Apresentação e Visão do Futuro

### 1.1 Por que este Manual Existe?

Você já se sentiu sobrecarregado com a quantidade de documentos, processos e prazos da sua seção? Já perdeu um arquivo importante porque não lembrava em qual pasta havia salvo? Já desejou ter um "assistente" que pudesse ajudar nas tarefas repetitivas enquanto você foca no que realmente importa?

Este manual foi criado para resolver esses problemas.

O **Ecossistema de Produtividade Digital (EPD)** é um conjunto de ferramentas, métodos e práticas que, quando combinados, transformam a forma como você trabalha. Não se trata de substituir o militar, mas de **amplificar suas capacidades**.

> **Analogia Militar:**  
> Pense no EPD como um "kit de campanha" digital. Assim como o bombeiro não vai para uma ocorrência sem EPI, rádio e viatura, o militar administrativo do século XXI não deveria trabalhar sem suas ferramentas digitais adequadas.

### 1.2 O que é o Ecossistema de Produtividade Digital (EPD)?

O EPD é composto por **três pilares integrados**:

```
┌─────────────────────────────────────────────────────────────┐
│                    ECOSSISTEMA EPD - CBMAL                  │
│                    (Arquitetura Antigravity 2.0)            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌───────────────┐   ┌───────────────┐   ┌──────────────┐ │
│   │   DNA DIGITAL │   │    AGENTE     │   │  AUTOMAÇÃO   │ │
│   │  (agents.md)  │ ⇄ │  (3 Camadas:  │ ⇄ │  (Browser +  │ │
│   │               │   │  O/D/E)       │   │   Python)    │ │
│   └───────────────┘   └───────────────┘   └──────────────┘ │
│                                                             │
│         DIRETRIZES     +    ORQUESTRAÇÃO    +    EXECUÇÃO   │
└─────────────────────────────────────────────────────────────┘
```

| Pilar | O que é | Para que serve |
|:---|:---|:---|
| **Segundo Cérebro** | Sua base de conhecimento digital (Obsidian + backup na nuvem) | Guardar e encontrar qualquer informação em segundos |
| **Agente Digital** | Um assistente de IA configurado para seu setor | Produzir documentos, responder dúvidas, automatizar tarefas |
| **Metodologia de Rotina** | Sistema de gestão pessoal (Kanban + Notas Diárias) | Manter o foco, rastrear progresso, nunca perder uma tarefa |

### 1.3 Benefícios Comprovados: O Caso da APO/CBMAL

Este manual não é teoria. Tudo o que você aprenderá aqui foi **testado e validado** na Seção de Gestão Estratégica (SGE) da APO/CBMAL durante o ciclo 2025-2029.

**Resultados documentados:**

| Métrica | Antes do EPD | Depois do EPD | Ganho |
|:---|:---|:---|:---|
| Tempo para criar um PAP | 4-6 horas | 30-45 minutos | **87%** |
| Documentos revisados simultaneamente | 1 a 2 | 6+ | **3x** |
| Perda de arquivos/versões | Frequente | Zero | **100%** |
| Consistência entre documentos | Manual | Automática | **∞** |

> **📌 NA PRÁTICA (APO / Antigravity 2.0):**  
> *Em janeiro de 2026, a APO elevou o sistema para a arquitetura de 3 camadas. Agora, o arquivo `agents.md` serve como o DNA do workspace, permitindo que a IA use o `agent-browser` para verificar o SEI e atualize o **PAP nº 10** (Registro de Planos) de forma coordenada.*

### 1.4 Requisitos Mínimos

Antes de começar, verifique se você possui:

**Hardware:**
- [ ] Computador com Windows 10 ou 11
- [ ] Mínimo de 8 GB de RAM (recomendado: 16 GB)
- [ ] Conexão estável com a internet

**Software (todos gratuitos):**
- [ ] Conta Google (para o Google Drive)
- [ ] Obsidian (download em obsidian.md)
- [ ] Google Drive Desktop (backup automático)
- [ ] Acesso ao Google Antigravity ou Gemini CLI (via assinatura Google)

**Conhecimentos Prévios:**
- [ ] Saber usar o Windows básico (pastas, arquivos)
- [ ] Saber navegar na internet
- [ ] **NÃO é necessário saber programar!**

### 1.5 Como Usar Este Manual

Este manual foi projetado para ser seguido **sequencialmente**, do Capítulo 1 ao 7. Cada capítulo constrói sobre o anterior.

**Ícones de Orientação:**

| Ícone | Significado |
|:---|:---|
| 💡 | Dica importante |
| ⚠️ | Atenção / Cuidado |
| 📌 | Exemplo prático da APO |
| ✅ | Tarefa a ser realizada |
| 📖 | Conceito a ser memorizado |

**Tempo estimado de leitura e implementação:**
- Leitura completa: ~2 horas
- Implementação básica: ~4 horas
- Domínio completo: ~2 semanas de prática

---

### Resumo do Capítulo 1

✅ O EPD é um conjunto de ferramentas e métodos para multiplicar sua eficiência.  
✅ É composto por 3 pilares: Segundo Cérebro, Agente Digital e Metodologia de Rotina.  
✅ Os resultados foram comprovados na APO/CBMAL.  
✅ Você não precisa saber programar para usar.

**Próximo capítulo:** Vamos instalar o Obsidian e criar seu "Segundo Cérebro".

---

## Capítulo 2: O "Segundo Cérebro" – Instalando sua Base de Conhecimento

### 2.1 O que é o Obsidian e Por que Usá-lo?

O **Obsidian** é um aplicativo gratuito para criar e organizar notas. Mas não é um bloco de notas comum – é uma **base de conhecimento interconectada**.

> **Analogia Militar:**  
> Imagine que sua mente é o Quartel General (QG). O Obsidian é como ter um **Estado-Maior digital** que organiza todas as informações, cria conexões entre elas e as deixa prontas para consulta instantânea.

**Por que o Obsidian?**
- ✅ **Gratuito** para uso pessoal
- ✅ **Offline** – seus dados ficam no seu computador, não em servidores externos
- ✅ **Formato aberto** – arquivos em texto simples (.md), legíveis por qualquer editor
- ✅ **Extensível** – milhares de plugins para personalizar
- ✅ **Veloz** – encontre qualquer informação em segundos

### 2.2 Instalação Passo a Passo (Windows)

**Passo 1: Download**
1. Acesse: https://obsidian.md
2. Clique em "Download for Windows"
3. Execute o instalador e siga as instruções

**Passo 2: Criar seu Vault (Cofre)**
O "Vault" é a pasta onde todos os seus arquivos serão armazenados.

1. Ao abrir o Obsidian, clique em "Create new vault"
2. Dê um nome significativo (ex: `SGE_CBMAL` ou `S1_Pessoal`)
3. **IMPORTANTE:** Escolha um local dentro do Google Drive (veremos isso na seção 2.5)

💡 **Dica:** Use o padrão `[Sigla_Seção]_CBMAL` para facilitar identificação.

**Passo 3: Configurações Iniciais**
1. Vá em ⚙️ Settings → Editor
2. Ative "Spell check" (corretor ortográfico)
3. Em Settings → Files & Links → Default location for new notes → Escolha "In the folder specified below" e crie uma pasta `Inbox`

### 2.3 Estrutura de Pastas Recomendada

A organização das pastas é **fundamental** para encontrar informações rapidamente. Recomendamos a seguinte estrutura:

```
📁 [NOME_SEÇÃO]_CBMAL/
├── 📁 00_INBOX/                    ← Notas rápidas e capturas
├── 📁 01_Planejamento/             ← Planos, metas, estratégias
├── 📁 02_Processos/                ← PAPs, fluxos, checklists
├── 📁 03_Documentos/               ← Minutas, modelos, templates
├── 📁 04_Referências/              ← Normas, legislação, manuais
├── 📁 05_Projetos/                 ← Projetos em andamento
├── 📁 06_Diário/                   ← Notas diárias e memórias
│   └── 📁 2026/
│       └── 📁 01-Janeiro/
├── 📁 07_Arquivo/                  ← Documentos antigos/inativos
├── 📁 Skills/                      ← Skills para a IA
├── 📁 .agent/                      ← Configurações do Agente
├── 📄 00_START_HERE.md             ← Página inicial
├── 📄 KANBAN.md                    ← Quadro de tarefas
└── 📄 PAINEL_DE_CONTROLE.md        ← Dashboard geral
```

> **📌 NA PRÁTICA (APO):**  
> *A estrutura acima é baseada na APO/SGE. As pastas `06_Diário` e `Skills` são especialmente importantes para o funcionamento do Agente Digital.*

### 2.4 Plugins Essenciais

O Obsidian possui plugins que ampliam suas funcionalidades. Para instalá-los:

1. Vá em ⚙️ Settings → Community plugins
2. Desative o "Restricted mode" (modo restrito)
3. Clique em "Browse" e pesquise pelo nome do plugin
4. Clique em "Install" e depois em "Enable"

**Plugins Recomendados (por ordem de prioridade):**

| Plugin | Para que serve | Prioridade |
|:---|:---|:---|
| **Kanban** | Criar quadros de tarefas visuais | ⭐⭐⭐ |
| **Calendar** | Visualizar notas diárias em calendário | ⭐⭐⭐ |
| **Templater** | Criar templates automáticos de notas | ⭐⭐⭐ |
| **Dataview** | Consultas avançadas nos seus dados | ⭐⭐ |
| **Excalidraw** | Desenhar diagramas e fluxogramas | ⭐⭐ |
| **Outliner** | Melhorar listas e tópicos | ⭐ |

⚠️ **Atenção:** Instale um plugin por vez e teste antes de instalar o próximo.

### 2.5 Integração com Google Drive Desktop (Backup Automático)

Esta é a **etapa mais importante** para segurança dos seus dados.

**Por que usar o Google Drive?**
- ✅ Backup automático em tempo real
- ✅ Acesso de qualquer dispositivo
- ✅ Histórico de versões (recupere arquivos antigos)
- ✅ Sincronização instantânea

**Passo 1: Instalar o Google Drive Desktop**
1. Acesse: https://www.google.com/drive/download/
2. Baixe o "Drive for Desktop"
3. Instale e faça login com sua conta Google

**Passo 2: Configurar Sincronização**
1. Após a instalação, clique no ícone do Drive na barra de tarefas
2. Vá em ⚙️ Preferências → Google Drive
3. Selecione "Espelhar arquivos" (Mirror files)
4. Sua pasta do Drive aparecerá em `G:\Meu Drive\` (ou letra similar)

**Passo 3: Mover seu Vault para o Drive**
1. Feche o Obsidian
2. Mova toda a pasta do seu Vault para `G:\Meu Drive\[NOME_VAULT]`
3. Abra o Obsidian novamente
4. Clique em "Open another vault"
5. Selecione a nova localização no Google Drive

💡 **Dica:** A partir de agora, todas as suas notas serão salvas automaticamente na nuvem!

**Verificando o Backup:**
1. Acesse https://drive.google.com no navegador
2. Você deve ver sua pasta do Vault lá
3. Qualquer alteração no Obsidian aparecerá em segundos no Drive

### 2.6 Criando sua Primeira Nota

Vamos criar sua página inicial:

1. No Obsidian, pressione `Ctrl + N` para criar uma nova nota
2. Nomeie como `00_START_HERE`
3. Cole o seguinte template:

```markdown
# 🏠 Central de Comando - [NOME DA SEÇÃO]

## 📍 Navegação Rápida
- [[KANBAN|📋 Quadro de Tarefas]]
- [[PAINEL_DE_CONTROLE|📊 Dashboard]]

## 📂 Áreas Principais
- [[01_Planejamento/index|Planejamento]]
- [[02_Processos/index|Processos e PAPs]]
- [[03_Documentos/index|Documentos e Templates]]

## 📅 Notas Recentes
(O plugin Dataview pode preencher isso automaticamente)

---
*Última atualização: {{date}}*
```

4. Salve com `Ctrl + S`

✅ Parabéns! Seu "Segundo Cérebro" está funcionando!

---

### Resumo do Capítulo 2

✅ O Obsidian é sua base de conhecimento pessoal (gratuito e offline).  
✅ A estrutura de pastas organiza seu conhecimento por temas.  
✅ Os plugins Kanban e Calendar são essenciais para produtividade.  
✅ O Google Drive Desktop garante backup automático e seguro.

**Próximo capítulo:** Vamos criar seu Agente Digital – a IA que entende seu setor.


---

# PARTE II – O AGENTE DIGITAL

---

## Capítulo 3: Gênese do Agente – Criando sua "Inteligência Setorial"

### 3.1 O que é um Agente de IA?

Um **Agente de IA** é uma inteligência artificial configurada para entender o contexto específico do seu trabalho e executar tarefas de acordo com suas instruções.

> **Analogia Militar:**  
> Imagine que você recebeu um novo soldado na seção. Antes de colocá-lo para trabalhar, você precisa explicar:
> - Qual é a missão da seção?
> - Quais são as regras e normas?
> - Como ele deve se comportar?
> - O que ele pode e não pode fazer?
>
> O **System Prompt** é exatamente isso: a "Ordem de Serviço" do seu estagiário digital.

**O que o Agente pode fazer por você:**
- ✅ Redigir documentos no padrão do setor
- ✅ Responder dúvidas sobre normas e procedimentos
- ✅ Revisar e corrigir textos
- ✅ Criar cronogramas e checklists
- ✅ Monitorar prazos e alertar sobre pendências
- ✅ Manter a consistência entre documentos

### 3.2 Anatomia de um System Prompt Eficaz

O **System Prompt** é o texto que define a personalidade e as capacidades do seu Agente. Um bom prompt tem as seguintes seções:

```
┌─────────────────────────────────────────────────────────────┐
│                  ESTRUTURA DO SYSTEM PROMPT                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. IDENTIDADE                                              │
│     → Quem é o Agente? Qual seu nome/papel?                │
│                                                             │
│  2. CONTEXTO INSTITUCIONAL                                  │
│     → Onde ele trabalha? Qual a missão do setor?           │
│                                                             │
│  3. COMPETÊNCIAS                                            │
│     → O que ele sabe fazer? Quais suas especialidades?     │
│                                                             │
│  4. REGRAS DE CONDUTA                                       │
│     → O que ele DEVE e NÃO DEVE fazer?                     │
│                                                             │
│  5. FORMATO DE SAÍDA                                        │
│     → Como ele deve formatar suas respostas?               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 3.3 Template: "Meu Primeiro Agente de Seção"

Copie e personalize o template abaixo para criar seu Agente:

```markdown
# System Prompt: [NOME DO AGENTE]

## 1. Identidade
Você é o **[NOME]**, assistente digital da **[NOME DA SEÇÃO]** do Corpo de Bombeiros Militar de Alagoas (CBMAL).

## 2. Contexto Institucional
- **Setor:** [Ex: Seção de Pessoal (S1)]
- **Missão:** [Ex: Gerenciar a vida funcional dos militares do CBMAL]
- **Documentos de Referência:**
  - [Ex: Estatuto dos Militares de Alagoas]
  - [Ex: Manual de Gestão de Pessoas do CBMAL]

## 3. Competências
Você é especialista em:
- [Ex: Elaboração de portarias de férias e licenças]
- [Ex: Controle de efetivo e movimentações]
- [Ex: Redação oficial no padrão SEI]

## 4. Regras de Conduta
- SEMPRE use linguagem formal e impessoal
- SEMPRE cite a norma de referência ao responder
- NUNCA invente informações que não conhece
- NUNCA tome decisões que cabem ao Comandante

## 5. Formato de Saída
- Use Markdown para formatação
- Organize respostas com títulos e listas
- Inclua tabelas quando apropriado
```

💡 **Dica:** Salve este arquivo como `AGENTE_[SEÇÃO].md` dentro da pasta `.agent/` do seu Vault.

### 3.4 Onde Usar o System Prompt

Dependendo da ferramenta que você utiliza, o System Prompt é configurado em locais diferentes:

| Ferramenta | Onde Configurar |
|:---|:---|
| **Google Antigravity** | Arquivo `.agent/agents.md` (DNA do Workspace) |
| **ChatGPT** | Custom Instructions ou GPT Builder |
| **Claude** | Projects → Instructions |
| **Gemini Web** | Colar no início do chat |

💡 **NOVIDADE (Antigravity 2.0):** Use o arquivo `agents.md` na pasta `.agent/`. Ele estabelece a **Arquitetura 3-Layer** (Diretiva, Orquestração e Execução), garantindo que a IA nunca perca o contexto institucional mesmo em conversas longas.

### 3.5 Boas Práticas

**O que incluir:**
- ✅ Nome e papel claro
- ✅ Lista de documentos que o Agente deve "conhecer"
- ✅ Exemplos de tarefas que ele deve executar
- ✅ Formato esperado das respostas
- ✅ Restrições explícitas

**O que evitar:**
- ❌ Instruções vagas ("seja útil")
- ❌ Excesso de texto (mais de 1 página)
- ❌ Contradições nas regras
- ❌ Expectativas irrealistas ("saiba tudo")

> **📌 NA PRÁTICA (APO):**  
> *O Agente da APO, chamado "Gemini Conductor", possui um System Prompt de ~500 palavras que define 5 modos de operação: Planejamento, Execução, Verificação, Suporte e Criativo. Isso permite alternar comportamentos conforme a tarefa.*

### 3.6 Testando seu Agente

Após criar o System Prompt, teste com as seguintes perguntas:

1. **Teste de Identidade:**  
   "Quem é você e qual sua missão?"  
   *(O Agente deve responder conforme o prompt)*

2. **Teste de Competência:**  
   "Como faço para solicitar férias de um militar?"  
   *(O Agente deve usar o conhecimento do setor)*

3. **Teste de Restrição:**  
   "Pode aprovar minhas férias agora?"  
   *(O Agente deve recusar, pois não pode tomar decisões)*

Se o Agente falhar em algum teste, ajuste o System Prompt e teste novamente.

---

### Resumo do Capítulo 3

✅ O Agente de IA é configurado por um System Prompt (sua "Ordem de Serviço").  
✅ Um bom prompt tem 5 seções: Identidade, Contexto, Competências, Regras e Formato.  
✅ Salve o prompt na pasta `.agent/` do seu Vault.  
✅ Sempre teste o Agente antes de usá-lo em produção.

**Próximo capítulo:** Vamos ensinar seu Agente a executar tarefas específicas usando Skills.

---

## Capítulo 4: Arquitetura de Skills – Ensinando sua IA a Trabalhar

### 4.1 O que são Skills e Para que Servem?

**Skills** são arquivos de texto (Markdown) que ensinam o Agente a executar tarefas específicas. Enquanto o System Prompt define "quem" o Agente é, as Skills definem "como" ele faz determinadas atividades.

> **Analogia Militar:**  
> Pense assim: o System Prompt é o **Regulamento Geral** (define missão e valores), enquanto as Skills são os **Manuais Técnicos** (explicam como executar cada procedimento).

**Exemplos de Skills:**
- `redacao-oficial.md` → Como redigir documentos no padrão SEI
- `especialista-paps.md` → Como criar Procedimentos Administrativos Padrão
- `gestao-ferias.md` → Como processar pedidos de férias

### 4.2 Estrutura Padrão de uma Skill (SKILL.md)

Toda Skill deve seguir um formato padronizado para que o Agente possa lê-la corretamente:

```markdown
---
name: [Nome da Skill]
description: [Uma linha descrevendo o que ela faz]
version: 1.0
---

# [NOME DA SKILL]

## Propósito
[Descreva em 2-3 linhas o objetivo desta Skill]

## Quando Usar
- [Situação 1 em que a Skill deve ser ativada]
- [Situação 2]

## Procedimento
### Passo 1: [Título]
[Instruções detalhadas]

### Passo 2: [Título]
[Instruções detalhadas]

## Exemplos
[Inclua exemplos de entrada e saída esperada]

## Regras e Restrições
- [O que NÃO deve ser feito]
- [Limitações conhecidas]

## Referências
- [Links para normas, leis ou outros documentos]
```

### 4.3 Transformando Manuais em Skills (Passo a Passo)

Vamos transformar um manual existente em uma Skill que a IA pode usar:

**Passo 1: Identifique o Conhecimento Tácito**
Faça uma lista das tarefas que você faz "de cabeça", sem consultar manuais:
- Como você formata uma portaria?
- Quais campos são obrigatórios em cada documento?
- Quais são os prazos legais?

**Passo 2: Estruture em Etapas**
Transforme cada tarefa em passos sequenciais:
1. Primeiro faço X
2. Depois consulto Y
3. Por fim, envio para Z

**Passo 3: Adicione Exemplos Concretos**
A IA aprende muito melhor com exemplos reais:
- "Exemplo de cabeçalho correto: ..."
- "Exemplo de erro comum: ..."

**Passo 4: Defina Restrições Claras**
Explicite o que a IA NÃO deve fazer:
- "NUNCA assine em nome do Comandante"
- "SEMPRE verifique se o processo está no SEI antes de redigir"

**Passo 5: Salve na Pasta `Skills/`**
Nomeie o arquivo de forma descritiva: `gestao-ferias.md`, `redacao-ato-normativo.md`

### 4.4 Catálogo de Skills da APO (Exemplo Real)

Veja as Skills que a APO/SGE utiliza no seu dia a dia:

| Skill | Função | Linhas |
|:---|:---|:---|
| `especialista-paps` | Criação de Procedimentos Administrativos Padrão | ~90 |
| `gestao-estrategica` | Metodologia BSC e monitoramento | ~120 |
| `redacao-oficial` | Padrão de documentos SEI/BGO | ~80 |
| `secretario-executivo` | Gestão de rotina e Kanban | ~60 |
| `gemini-conductor` | Orquestração de tarefas complexas | ~150 |

> **📌 NA PRÁTICA (APO):**  
> *Quando o usuário pede "Crie um PAP sobre gestão de férias", o Agente automaticamente consulta a Skill `especialista-paps`, que contém o template visual, a lista de tópicos obrigatórios e exemplos de PAPs anteriores. O resultado? Um documento profissional em minutos.*

### 4.5 Como a IA Lê e Executa uma Skill

Quando você usa uma ferramenta como o Antigravity:

1. O Agente recebe sua mensagem
2. Ele identifica que precisa executar uma tarefa específica
3. Ele busca na pasta `Skills/` um arquivo relevante
4. Ele lê as instruções da Skill
5. Ele executa a tarefa seguindo o procedimento definido
6. Ele formata a saída conforme especificado

**Fluxo Visual:**

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   USUÁRIO   │ ──▶ │   AGENTE    │ ──▶ │   SKILL     │
│  "Crie um   │     │  Identifica │     │  Lê as      │
│   PAP..."   │     │  a tarefa   │     │  instruções │
└─────────────┘     └─────────────┘     └─────────────┘
                           │                   │
                           ▼                   ▼
                    ┌─────────────┐     ┌─────────────┐
                    │  EXECUTA    │ ◀── │  APLICA     │
                    │  e entrega  │     │  regras     │
                    └─────────────┘     └─────────────┘
```

### 4.6 Criando sua Primeira Skill

**Exercício Prático:** Vamos criar uma Skill simples para "Solicitar Material de Expediente".

1. Crie um arquivo chamado `solicitacao-material.md` na pasta `Skills/`
2. Cole o seguinte conteúdo:

```markdown
---
name: Solicitação de Material de Expediente
description: Auxilia na criação de pedidos de material para a seção
version: 1.0
---

# SOLICITAÇÃO DE MATERIAL DE EXPEDIENTE

## Propósito
Orientar a elaboração de pedidos de material de consumo e permanente
para o setor, seguindo as normas da DAL.

## Quando Usar
- Quando o estoque de material estiver baixo
- Para pedidos programados (início de semestre)
- Para materiais específicos de projetos

## Procedimento

### Passo 1: Identificar a Necessidade
- Liste os materiais necessários
- Consulte o catálogo de materiais da DAL
- Verifique o código de cada item

### Passo 2: Elaborar o Pedido
Use o modelo abaixo:

**MEMORANDO Nº ____/[ANO] - [SEÇÃO]**

ASSUNTO: Solicitação de Material de Expediente

À Diretoria de Apoio Logístico

1. Solicito os materiais abaixo para [justificativa]:

| Item | Descrição | Qtd | Código |
|:---|:---|:---|:---|
| 1 | Papel A4 | 10 resmas | MAT-001 |
| 2 | Caneta esferográfica | 20 un | MAT-015 |

2. Atenciosamente,

[Chefe da Seção]

### Passo 3: Tramitar no SEI
- Criar processo do tipo "Solicitação de Material"
- Anexar o memorando
- Enviar para DAL

## Regras e Restrições
- SEMPRE verificar disponibilidade orçamentária antes
- NUNCA solicitar materiais fora do catálogo sem justificativa
- Prazo mínimo de antecedência: 15 dias úteis

## Referências
- Instrução Normativa DAL nº 01/2024
- Catálogo de Materiais CBMAL
```

3. Salve o arquivo
4. Teste pedindo ao Agente: "Me ajude a solicitar papel e canetas para a seção"

---

### Resumo do Capítulo 4

✅ Skills são "manuais técnicos" que ensinam a IA a executar tarefas.  
✅ Toda Skill tem: Propósito, Procedimento, Exemplos e Restrições.  
✅ Salve as Skills na pasta `Skills/` do seu Vault.  
✅ A IA lê e aplica as Skills automaticamente quando necessário.

**Próximo capítulo:** Vamos operar as ferramentas avançadas (Antigravity/CLI).

---

# PARTE III – FERRAMENTAS AVANÇADAS

---

## Capítulo 5: Interface de Comando – Operando o Antigravity/Gemini CLI

### 5.1 O que é o Google Antigravity?

O **Google Antigravity** (também conhecido como **Gemini Code Assist** ou **Jules**) é uma interface avançada que permite que a IA trabalhe diretamente com seus arquivos, execute comandos e produza documentos de forma autônoma.

> **Analogia Militar:**  
> Se o Obsidian é seu "Quartel General" e as Skills são seus "Manuais", o Antigravity é o **Centro de Operações** – onde você dá ordens e vê as ações sendo executadas em tempo real.

**Capacidades do Antigravity:**
- ✅ Ler e editar arquivos do seu computador
- ✅ Criar novos documentos automaticamente
- ✅ Operar Navegadores (via **Skill agent-browser**)
- ✅ Navegar na web para pesquisas táticas
- ✅ Manter o "DNA" via arquivo `agents.md`
- ✅ Usar automações Python (ex: Monitor SEI)

### 5.2 Instalação e Configuração Inicial

**Pré-requisitos:**
- Conta Google Workspace ou Google One com acesso ao Gemini Advanced
- VSCode (Visual Studio Code) instalado

**Passo 1: Instalar a Extensão**
1. Abra o VSCode
2. Vá em Extensions (Ctrl+Shift+X)
3. Pesquise por "Gemini Code Assist" ou "Jules"
4. Clique em Install

**Passo 2: Configurar o Workspace**
1. No VSCode, abra sua pasta do Vault (File → Open Folder)
2. A extensão detectará automaticamente os arquivos

**Passo 3: Autenticar**
1. Clique no ícone do Gemini na barra lateral
2. Faça login com sua conta Google

💡 **Dica:** Configure o Antigravity para abrir seu Vault diretamente ao iniciar.

### 5.3 Comandos Essenciais para Iniciantes

| Comando | O que faz | Exemplo |
|:---|:---|:---|
| "Leia o arquivo X" | Mostra o conteúdo de um arquivo | "Leia o arquivo KANBAN.md" |
| "Crie um arquivo X" | Cria novo arquivo com conteúdo | "Crie um PAP sobre férias" |
| "Edite o arquivo X" | Modifica arquivo existente | "Adicione uma tarefa ao Kanban" |
| "Busque por Y" | Procura texto em todos os arquivos | "Busque todas as menções a 'RME'" |
| "Liste os arquivos em Z" | Mostra conteúdo de uma pasta | "Liste os arquivos em Skills/" |

### 5.4 Fluxo de Trabalho: Produzindo Documentos com IA

**Exemplo: Criar uma Nota Técnica**

1. **Sua Instrução:**
   ```
   Crie uma Nota Técnica sobre a necessidade de atualização do
   sistema de rádio, usando o padrão SEI. Salve em 03_Documentos/
   ```

2. **O Agente irá:**
   - Consultar a Skill `redacao-oficial`
   - Buscar modelos existentes na pasta
   - Gerar o documento formatado
   - Salvar no local indicado

3. **Você revisa e aprova:**
   - Verifique os dados técnicos
   - Ajuste detalhes específicos
   - Envie para o SEI

### 5.5 Monitoramento de Ações e Auditoria

O Antigravity mantém um histórico de todas as ações realizadas. Para auditar:

1. Revise a conversa anterior
2. Verifique os arquivos modificados (o Git pode ajudar aqui)
3. Consulte as Notas Diárias geradas

> **📌 NA PRÁTICA (APO):**  
> *Toda sessão de trabalho com o Agente gera automaticamente uma entrada na Nota Diária, registrando: Skills utilizadas, arquivos modificados e métricas de produtividade.*

---

### Resumo do Capítulo 5

✅ O Antigravity permite que a IA edite arquivos e execute comandos.  
✅ Instale via extensão no VSCode.  
✅ Use comandos simples como "Crie", "Edite", "Busque".  
✅ Mantenha rastro de auditoria via Notas Diárias.

---

## Capítulo 6: Metodologia de Rotina – O "Ritual de Alta Performance"

### 6.1 O Kanban Estratégico

O **Kanban** é um sistema visual para gerenciar seu fluxo de trabalho. No Obsidian, ele funciona como um quadro de tarefas interativo.

**Estrutura Recomendada (4 Colunas):**

| Coluna | Significado | Limite |
|:---|:---|:---|
| 📥 **Backlog** | Tarefas planejadas, aguardando início | Sem limite |
| 🏗️ **Em Curso** | O que você está fazendo AGORA | Máx. 3 tarefas |
| ⏳ **Revisão** | Pronto, aguardando aprovação/terceiros | Máx. 5 tarefas |
| ✅ **Concluído** | Missões cumpridas | Mover para arquivo semanalmente |

**Como Usar:**
1. Crie um arquivo `KANBAN.md` na raiz do Vault
2. Ative o plugin Kanban no Obsidian
3. Arraste tarefas entre colunas conforme evoluem
4. Revise diariamente (5 minutos pela manhã)

### 6.2 Notas Diárias: Rastro de Auditoria

A **Nota Diária** é seu diário de bordo profissional. Ela registra o que você fez, facilitando prestação de contas e memória institucional.

**Template Recomendado:**

```markdown
# 📅 Diário de Bordo - {{date}}

## 🎯 Objetivo do Dia
- [O que você quer entregar hoje]

## 🏗️ Atividades Realizadas
- [x] [Tarefa concluída 1]
- [x] [Tarefa concluída 2]
- [ ] [Tarefa não finalizada]

## 💡 Insights e Observações
> [Algo que você aprendeu ou precisa lembrar]

## ⏭️ Próximos Passos
1. [O que fazer amanhã]
2. [Pendências para resolver]

---
*Telemetria:* skills=[lista]; docs=[lista]; tempo=[estimado]
```

**Dica:** Use o plugin Templater para gerar automaticamente.

### 6.3 Ciclo Semanal: Revisão e Planejamento

**Sexta-feira (15 minutos) – Revisão da Semana:**
1. O que eu entreguei?
2. O que ficou pendente?
3. O que aprendi?

**Segunda-feira (10 minutos) – Planejamento:**
1. Quais são as 3 prioridades da semana?
2. Há algum prazo crítico chegando?
3. Preciso de apoio de alguém?

### 6.4 Indicadores de Produtividade Pessoal

Monitore sua evolução com métricas simples:

| Indicador | Como Medir | Meta Sugerida |
|:---|:---|:---|
| Tarefas Concluídas/Semana | Contar itens ✅ no Kanban | ≥ 10 |
| Tempo Médio por Documento | Anotar na Nota Diária | Reduzir 10%/mês |
| % Uso do Agente | Skills acionadas/dia | ≥ 3 |

---

### Resumo do Capítulo 6

✅ O Kanban organiza visualmente suas tarefas em 4 colunas.  
✅ A Nota Diária é seu diário de bordo profissional.  
✅ Revise semanalmente para manter o foco.  
✅ Monitore indicadores simples de produtividade.

---

# PARTE IV – ESTUDO DE CASO

---

## Capítulo 7: Na Prática – O Assessor de Planejamento (APO/SGE)

### 7.1 Contexto: A Seção Antes do EPD

Em dezembro de 2025, a Seção de Gestão Estratégica (SGE) enfrentava desafios comuns a muitas seções administrativas:

- 📁 Arquivos espalhados em múltiplas pastas
- 📝 Documentos sem padronização
- ⏰ Dificuldade em encontrar informações antigas
- 🔄 Retrabalho constante
- 📊 Monitoramento manual e trabalhoso

### 7.2 Implementação: As 5 Fases da Transformação

**Fase 1: Organização (Semana 1)**
- Instalação do Obsidian
- Criação da estrutura de pastas
- Migração dos arquivos existentes

**Fase 2: Automação (Semana 2)**
- Configuração do Google Drive (backup)
- Criação do Agente "Gemini Conductor"
- Elaboração das primeiras Skills

**Fase 3: Padronização (Semana 3)**
- Criação dos 9 PAPs de sucessão
- Definição de templates oficiais
- Estabelecimento do Kanban

**Fase 4: Integração (Semana 4)**
- Conexão das ferramentas
- Treinamento de uso diário
- Criação das Notas Diárias

**Fase 5: Automação Cibernética (Semana 5)**
- Implementação do `agents.md` (Configuração Mestre)
- Instalação do `agent-browser` para interação com o SEI
- Criação do **PAP nº 10** para monitoramento de Planos Diretores
- Integração da Verificação SEI na Rotina Matinal

### 7.3 Resultados: Métricas de Ganho de Eficiência

| Processo | Antes | Depois | Melhoria |
|:---|:---|:---|:---|
| Criar um PAP | 4-6 horas | 30 min | **92%** |
| Revisar documento | 2 horas | 20 min | **83%** |
| Encontrar arquivo | 10-15 min | 10 seg | **99%** |
| Atualizar múltiplos docs | Manual | Automático | **∞** |

### 7.4 Lições Aprendidas

1. **Comece simples:** Não tente implementar tudo de uma vez
2. **Documente tudo:** As Skills são seu investimento de longo prazo
3. **Itere constantemente:** O sistema melhora com o uso
4. **Compartilhe conhecimento:** O sucesso individual vira sucesso coletivo

---

# ANEXOS

---

## Anexo A: Template de System Prompt (Agente Genérico)

```markdown
# System Prompt: Assistente [SEÇÃO]

## Identidade
Você é o assistente digital da [SEÇÃO] do CBMAL.

## Contexto
- Setor: [Nome completo]
- Missão: [Missão do setor]
- Chefia: [Posto e nome do chefe]

## Competências
- [Lista de especialidades]

## Regras
- SEMPRE: [regras obrigatórias]
- NUNCA: [proibições]

## Formato
- Use Markdown
- Seja conciso
- Cite referências
```

---

## Anexo B: Template de Skill

```markdown
---
name: [Nome]
description: [Descrição curta]
version: 1.0
---

# [TÍTULO]

## Propósito
[2-3 linhas]

## Quando Usar
- [Situação 1]
- [Situação 2]

## Procedimento
### Passo 1: [Título]
[Instruções]

## Exemplos
[Entrada/Saída]

## Restrições
- [Lista]

## Referências
- [Links]
```

---

## Anexo C: Estrutura de Pastas Obsidian (Modelo CBMAL)

```
📁 [SEÇÃO]_CBMAL/
├── 00_INBOX/
├── 01_Planejamento/
├── 02_Processos/
├── 03_Documentos/
├── 04_Referências/
├── 05_Projetos/
├── 06_Diário/
├── 07_Arquivo/
├── Skills/
├── .agent/
├── 00_START_HERE.md
├── KANBAN.md
└── PAINEL_DE_CONTROLE.md
```

---

## Anexo D: Checklist de Implementação do EPD

- [ ] **Semana 1:** Instalar Obsidian e criar Vault
- [ ] **Semana 1:** Configurar Google Drive Desktop
- [ ] **Semana 1:** Criar estrutura de pastas
- [ ] **Semana 2:** Escrever System Prompt do Agente
- [ ] **Semana 2:** Criar primeira Skill
- [ ] **Semana 2:** Configurar Antigravity/CLI
- [ ] **Semana 3:** Implementar Kanban
- [ ] **Semana 3:** Iniciar Notas Diárias
- [ ] **Semana 4:** Testar fluxo completo
- [ ] **Contínuo:** Refinar e expandir Skills

---

## Anexo E: Glossário de Termos Técnicos

| Termo | Definição |
|:---|:---|
| **Agente** | IA configurada para um contexto específico |
| **Backup** | Cópia de segurança dos arquivos |
| **CLI** | Interface de linha de comando (terminal) |
| **LLM** | Large Language Model (modelo de linguagem) |
| **Markdown** | Linguagem de formatação de texto simples |
| **Prompt** | Instrução dada à IA |
| **Skill** | Arquivo que ensina a IA a executar uma tarefa |
| **System Prompt** | Configuração inicial da personalidade da IA |
| **Vault** | Pasta principal do Obsidian |
| **Workspace** | Área de trabalho de um projeto |

---

**FIM DO MANUAL**

---

*Documento elaborado pela Assessoria de Planejamento e Orçamento (APO/CBMAL)*  
*Versão 1.0 – Janeiro de 2026*

---