# PROCESSOS DE MONITORAMENTO ESTRATÉGICO (BPMN)
**Anexo ao Plano de Monitoramento da Estratégia 2025-2029**

Este documento detalha os fluxos de trabalho (workflows) citados no Plano de Monitoramento, utilizando notação BPMN simplificada para orientação dos executores.

---

## 1. MACROFLUXO DE MONITORAMENTO (CADEIA DE VALOR)

Visão geral de como o dado sai da ponta (Setor) e vira decisão estratégica (Alto Comando).

```mermaid
flowchart TD
    %% Atores
    OL[Oficial de Ligação]
    ODS[Chefe do ODS]
    APO[APO / Gestão Estratégica]
    RME[Reunião de Monitoramento]
    
    %% Fluxo
    subgraph COLETA
    OL -->|Coleta Dados e Evidências| SEI[Processo SEI]
    SEI -->|Valida Dados| ODS
    end
    
    subgraph PROCESSAMENTO
    ODS -->|Envia para APO| APO
    APO -->|Audita e Alimenta SGE| SGE[Sistema SGE]
    SGE -->|Gera Farol| REL[Relatório de Farol]
    end
    
    subgraph DECISÃO
    REL -->|Subsidia Pauta| RME
    RME -->|Delibera Ações| ATA[Ata Decisória]
    end
    
    ATA -->|Retroalimenta| OL
    
    %% Estilos
    style RME fill:#f9f,stroke:#333,stroke-width:4px
    style SGE fill:#bbf,stroke:#333,stroke-width:2px
```

---

## 2. RITO DA REUNIÃO DE MONITORAMENTO (RME)

Cronograma reverso de preparação para garantir a efetividade da reunião.

```mermaid
sequenceDiagram
    participant ODS as ODS / Setores
    participant APO as APO / Estratégia
    participant AC as Alto Comando (RME)

    Note over ODS, APO: FASE PREPARATÓRIA
    APO->>ODS: D-10: Encerramento da Coleta (Corte)
    APO->>APO: Processamento e Análise
    APO->>ODS: D-7: Envio do Relatório Preliminar (Farol)
    
    rect rgb(255, 240, 240)
    Note right of ODS: Apenas Indicadores VERMELHOS/AMARELOS
    ODS->>APO: D-3: Envio de Justificativas e PCM
    end
    
    APO->>AC: D-1: Envio do Material Consolidado
    
    Note over ODS, AC: FASE DE EXECUÇÃO
    AC->>ODS: DIA "D": Realização da RME
    
    Note over ODS, AC: FASE PÓS-RME
    APO->>AC: D+2: Minuta da Ata
    AC->>APO: Homologação
    APO-->>ODS: Publicação BGO e Atualização de Metas
```

---

## 3. TRATAMENTO DE DESVIOS (PLANO DE CONTRAMEDIDA - PCM)

Fluxo acionado quando uma meta não é atingida.

```mermaid
flowchart TD
    Inicio((Início)) --> ChecaMeta{Meta Atingida?}
    ChecaMeta -- Sim (Verde) --> Fim((Fim))
    ChecaMeta -- Não (Verm/Amarelo) --> Justificativa[Iniciar PCM]
    
    subgraph ANÁLISE DE CAUSA
    Justificativa --> Porques[Aplicar 5 Porquês]
    Porques --> CausaRaiz[Identificar Causa Raiz]
    end
    
    subgraph PLANO DE AÇÃO
    CausaRaiz --> DefinirAcao[Propor Ação Corretiva]
    DefinirAcao --> DefinirPrazo[Definir Responsável e Prazo]
    end
    
    subgraph VALIDAÇÃO
    DefinirPrazo --> RME{Aprovação na RME?}
    RME -- Não --> Refazer[Refinar Ação]
    Refazer --> DefinirAcao
    RME -- Sim --> Executar[Executar Ação]
    end
    
    Executar --> Monitorar[Monitorar na Próxima RME]
    Monitorar --> ChecaMeta
```

---

## 4. SOLICITAÇÃO DE ADIAMENTO DE PRAZO

Fluxo excepcional para alteração de datas pactuadas.

```mermaid
flowchart TD
    %% Nós
    Solicitante[Diretoria Solicitante]
    SEI([Processo SEI])
    Gab[Gabinete Cmt Geral]
    APO[Parecer Técnico APO]
    Decisao{Comando Defere?}
    FimSim((Fim - SGE Atualizado))
    FimNao((Fim - Meta Mantida))

    %% Arestas
    Solicitante -->|Solicita via SEI| SEI
    SEI -->|Encaminha| Gab
    Gab -->|Solicita Análise| APO
    APO -->|Emite Parecer| Gab
    Gab -->|Decisão Final| Decisao
    
    Decisao --|Sim| --> FimSim
    Decisao --|Não| --> FimNao

    %% Estilos
    style Decisao fill:#ff9,stroke:#333
    style APO fill:#bbf,stroke:#333
```
