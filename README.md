<p align="center">
  <img src=".agent/assets/images/banner_principal.jpg" width="600" style="border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.5);" alt="Ecossistema CBMAL">
</p>

# 🚒 Ecossistema de Gestão Estratégica - CBMAL (2025-2029)

> **Orquestração de Inteligência Artificial para Alta Performance Institucional.**

Este repositório é o centro nervoso da **Assessoria de Planejamento Estratégico do Corpo de Bombeiros Militar de Alagoas**. Ele combina automação via IA, gestão visual moderna e rigor metodológico para transformar diretrizes em resultados operacionais.

---

## 🏗️ Pilares do Ecossistema

O projeto integra três frentes de tecnologia para garantir agilidade e rastreabilidade:

### 1. 🤖 Inteligência Agêntica (Cursor AI + Gemini)
O "Agente Condutor" opera através de **Skills** e **Workflows** customizados, localizados na pasta `.agent`.
- **Skills**: Conhecimento especialista em SEI, Redação Oficial (Portaria 18/2024), Gestão de Projetos e Taxa de Bombeiros.
- **Workflows**: Automações acionáveis por comandos como `/gerar_pap`, `/auditoria_estrategica` e `/analisar`.

### 2. 📓 Gestão de Conhecimento (Obsidian)
Toda a documentação é otimizada para o **Obsidian**, permitindo uma "Segunda Memória" conectada:
- **Conexões Neurais**: Notas interligadas que facilitam a descoberta de dependências entre projetos.
- **Backlinks Semânticos**: Histórico de decisões e reuniões (Diários de Memória) acessível instantaneamente.

### 3. 📊 Visualização e Governança
- **Kanban Estratégico**: Acompanhamento em tempo real de tarefas e metas em `KANBAN_ESTRATEGICO.md`.
- **Diagramas e BPMN**: Modelagem de processos via Mermaid.js.
- **Memória Persistente**: Sistema de rastreabilidade e handoff em `06_Diário_e_Memórias_IA`.
- **Dashboards de Monitoramento**: Visualização executiva de indicadores (KPIs).

---

## 🚀 Funcionalidades e Exemplos

### 🛠️ Comandos de Comando (Slash Commands)
| Comando | O que ele faz? | Exemplo de Uso |
| :--- | :--- | :--- |
| `/analisar` | Gera insights de desempenho. | "Analise a produção desta semana." |
| `/aprender` | **[NOVO]** Extrai novos padrões e cria Skills automaticamente. | "Aprenda com as últimas interações." |
| `/gerar_pap` | Cria normas técnicas. | "Gere um PAP para o novo fluxo." |
| `/auditoria` | Verifica alinhamento. | "Este despacho está alinhado ao Plano?" |
| `/orquestrar`| Organiza o ambiente. | "Limpe a inbox e conecte as notas da última reunião." |

### 📈 Exemplo de Fluxo BPMN (Visualizável no Obsidian/GitHub)
```mermaid
graph TD
    A[Início do Processo] --> B{Análise Técnica}
    B -- Aprovado --> C[Encaminhamento SEI]
    B -- Pendente --> D[Ajustes pela Assessoria]
    D --> B
    C --> E[Conclusão/Arquivo]
```

---

## 📂 Guia de Navegação

*   **`01_Gestao_Estrategica/`**: Planos, Metas e Indicadores 2025-2029.
*   **`02_Escritorio_Projetos/`**: Documentação de projetos ativos (TAP, EAP).
*   **`03_Gestao_Processos/`**: Mapeamentos e Fluxogramas BPMN.
*   **`04_Normatizacao_e_Modelos/`**: Portarias, Modelos Word/SEI e Checklists.
*   **`05_Controle_Operacional/`**: Dashboards e acompanhamento de metas.
*   **`06_Diario_e_Memorias_IA/`**: Registro de evolução e aprendizado da IA.
*   **`07_Taxa_de_Bombeiros/`**: Gestão específica da arrecadação e legislação pertinente.

---

## 📖 Documentação de Referência (Acesso Rápido)

Toda a operação do sistema está centralizada no **Cockpit Estratégico**:
### 👉 [**CLIQUE AQUI PARA ENTRAR NO COCKPIT ( 00_START_HERE.md )**](./00_START_HERE.md)

Lá você encontrará:
1.  **Painel de Controle**: Status em tempo real.
2.  **Manual de Operações**: Lista de comandos (`/insights`, `/aprender`, etc).
3.  **Filosofia**: Como operar o agente Conductor.

---
*Assessoria de Planejamento e Orçamento*
