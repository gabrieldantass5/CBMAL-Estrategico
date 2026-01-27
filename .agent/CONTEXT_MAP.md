# 🗺️ MAPA DE CONTEXTO (GPS)

Este arquivo serve como o mapa oficial da estrutura de diretórios para agentes de IA. Use-o para navegar, salvar arquivos e entender a semântica de cada pasta.

## 📂 Estrutura Raiz

* **`00_START_HERE.md`**: 🧭 Ponto de partida. O "Cockpit" do sistema. Contém links rápidos e status geral.
* **`KANBAN_ESTRATEGICO.md`**: 📊 Quadro de tarefas táticas. Onde o trabalho é gerenciado.

## 🏗️ Áreas Funcionais

### `01_Gestao_Estrategica` (O Coração da Estratégia)

* *Propósito*: Documentos "Pétreos" e planejamento de longo prazo (2025-2029).
* **`02_Politica_Institucional`**: Minutas da Política Estratégica.
* **`03_Monitoramento_e_Indicadores`**: Cadernos de indicadores, fichas técnicas e planos de monitoramento.
* **`04_Avaliacao_Estrategica`**: Planos de avaliação e relatórios de impacto.

### `02_Escritorio_Projetos` (A Fábrica)

* *Propósito*: Gestão de Projetos (PMO). Onde as coisas são construídas.
* *Subpastas*: Cada projeto deve ter sua própria pasta aqui.

### `03_Gestao_Processos` (O Fluxo)

* *Propósito*: Mapeamento de processos, BPMN e fluxogramas.
* *Conteúdo*: Arquivos `.bpmn`, imagens exportadas e documentação de processos.

### `04_Normatizacao_e_Modelos` (Os Padrões)

* *Propósito*: Templates, normas, logos e identidade visual.
* *Uso*: Consulte aqui antes de criar documentos para garantir conformidade (Redação Oficial, SEI).

### `05_Controle_Operacional_SGE` (A Rotina)

* *Propósito*: Cronogramas, prazos, escalas e administração da seção.

### `06_Diário_e_Memórias_IA` (A Memória)

* *Propósito*: Registro histórico e contexto da IA.
* **`Arquivos_Diário`**: 📔 O "Diário de Bordo". Notas diárias (YYYY-MM-DD). Onde o `/log-session` escreve.
* **`Memorias_de_Sessao`**: Logs técnicos de sessões passadas.

### `07_Taxa_de_Bombeiros` (Projeto Específico)

* *Propósito*: Dados, legislação e estudos sobre a Taxa de Bombeiros.

### `08_Manual_EPD_CBMAL` (Produto)

* *Propósito*: Desenvolvimento do Manual do Escritório de Projetos e Dados.

### `99_Base_de_Conhecimento` (A Biblioteca)

* *Propósito*: Referências, pesquisas, benchmarking e rascunhos.
* *Regra*: Se é referência externa ou estudo, vai aqui.

## 🤖 Configuração do Agente (`.agent`)

* **`skills/`**: Habilidades especializadas (scripts e prompts).
* **`workflows/`**: Instruções passo-a-passo para tarefas complexas.
