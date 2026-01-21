---
name: bpm-modeling
description: Criação e manutenção de diagramas de processo em notação BPMN 2.0.
---

# 🏭 Especialista em Modelagem de Processos (BPMN)

Esta skill define o padrão oficial de modelagem de processos do CBMAL. Toda criação de fluxogramas deve obedecer RIGOROSAMENTE a estas diretrizes para garantir compatibilidade com softwares de mercado (Camunda, Bizagi, Obsidian BPMN) e clareza na comunicação.

## 📜 1. Padrão Técnico

1.  **Formato de Arquivo**:
    *   Sempre gere o código **XML BPMN 2.0** (`.bpmn`).
    *   **NUNCA** use JSON canvas (`.canvas`) ou imagens estáticas (`.png`) se o objetivo for modelagem técnica.
    *   O código XML deve ser válido e conter o `namespace` padrão `http://bpmn.io/schema/bpmn`.

2.  **Estrutura de Colaboração (Collaboration Diagram)**:
    *   Todo processo deve estar envelopado em uma tag `<bpmn:collaboration>`.
    *   **Pools (Piscinas)**: Representam o Processo como um todo (Ex: "Processo de Compras").
    *   **Lanes (Raias)**: Representam os **Atores/Papéis** (Ex: "Solicitante", "Gerente", "Sistema").
    *   *Regra de Ouro*: Nunca desenhe tarefas soltas sem Lane. Se há uma ação, há um responsável.

## 🎨 2. Regras de Modelagem (Semântica)

1.  **Nomes de Tarefas**:
    *   Sempre use o padrão **Verbo no Infinitivo + Substantivo** (Ex: "Analisar Pedido", "Emitir Parecer").
    *   Evite nomes vagos como "Processo" ou "Análise".

2.  **Fluxos Alternativos (Gateways)**:
    *   Todo ponto de decisão deve usar um Gateway (`<bpmn:exclusiveGateway>` ou similar).
    *   **Caminho Feliz (Happy Path)**: O fluxo principal onde tudo dá certo.
    *   **Caminho de Exceção**: O que acontece se der errado? (Ex: "Reprovado", "Prazo Expirado").
    *   *Regra*: Se existe uma pergunta ("Aprovado?"), devem existir no mínimo duas saídas ("Sim" e "Não").

3.  **Eventos**:
    *   Todo processo tem **AO MENOS UM** Evento de Início (`StartEvent`).
    *   Todo processo tem **AO MENOS UM** Evento de Fim (`EndEvent`).
    *   Nomeie os eventos de fim para indicar o estado final (Ex: "Pedido Entregue" ou "Pedido Cancelado").

## 🛠️ 3. Como Gerar o Código XML

Como você não possui um editor gráfico, você deve escrever o XML manualmente. Para garantir que o layout visual (Di) não quebre:

1.  **Use Coordenadas Relativas Simples**:
    *   Avance no eixo X (Horizontal) para a linha do tempo.
    *   Use o eixo Y (Vertical) para mudar de Lanes.
    *   Mantenha um espaçamento padrão (ex: 150px entre tarefas).

2.  **Template Básico**:
    ```xml
    <bpmn:definitions ...>
      <bpmn:collaboration id="Collaboration_1">
        <bpmn:participant id="Participant_1" name="Nome do Processo" processRef="Process_1"/>
      </bpmn:collaboration>
      <bpmn:process id="Process_1" isExecutable="false">
        <bpmn:laneSet id="LaneSet_1">
          <bpmn:lane id="Lane_Ator1" name="Ator 1">...</bpmn:lane>
          <bpmn:lane id="Lane_Ator2" name="Ator 2">...</bpmn:lane>
        </bpmn:laneSet>
        ... (Elementos do fluxo)
      </bpmn:process>
      <bpmndi:BPMNDiagram ...> ... (Layout Visual) </bpmndi:BPMNDiagram>
    </bpmn:definitions>
    ```

## 🔍 4. Checklist de Qualidade

Antes de entregar o arquivo `.bpmn`:
- [ ] O arquivo começa com `<?xml version="1.0" encoding="UTF-8"?>`?
- [ ] Existe uma `Pool` principal nomeando o processo?
- [ ] Cada tarefa está dentro da `Lane` correta do seu executor?
- [ ] Os fluxos condicionais (Gateways) têm rótulos nas setas (ex: "Sim", "Não")?
- [ ] **CRÍTICO**: Cada elemento tem coordenadas visuais (`<bpmndi:BPMNShape>` e `<bpmndi:BPMNEdge>`)?
- [ ] O XML fecha corretamente todas as tags?

**⚠️ Lição Aprendida (Jan/2026)**: BPMNs sem a seção `<bpmndi:BPMNDiagram>` completa renderizam vazios no Obsidian. Sempre incluir coordenadas X/Y para todos os elementos.
