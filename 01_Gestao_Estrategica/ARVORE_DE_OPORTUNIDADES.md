# 🌳 Árvore de Oportunidades (OST) - CBMAL 2025-2029

> **Metodologia:** Teresa Torres (Opportunity Solution Tree)
> **Objetivo:** Garantir que todo PAP ou Projeto ataque uma dor real que impede um Objetivo Estratégico.

## 🗺️ Mapa de Impacto

```mermaid
graph TD
    %% --- NÍVEL 1: OUTCOMES (OBJETIVOS ESTRATÉGICOS) ---
    OE1[🏆 OE1: Modernizar a Gestão Institucional]
    OE2[⚡ OE2: Otimizar a Resposta Operacional]
    
    %% --- NÍVEL 2: OPPORTUNITIES (DORES / NECESSIDADES) ---
    Dor1(Dor: Processos Administrativos Lentos e Manuais)
    Dor2(Dor: Falta de Dados para Decisão)
    Dor3(Dor: Baixa Padronização de Rotinas)
    
    %% --- NÍVEL 3: SOLUTIONS (PAPS E PROJETOS) ---
    Sol1[📝 PAP 06: Notas Técnicas Padronizadas]
    Sol2[⚙️ PAP 05: Instrução de Despachos SEI]
    Sol3[📊 Caderno de Indicadores + PAP 02]
    Sol4[🔄 Skill IA: Ferramentas Office]
    Sol5[📑 PAP 07: Avaliação de Impacto]

    %% --- CONEXÕES ---
    OE1 --> Dor1
    OE1 --> Dor2
    OE1 --> Dor3
    
    Dor1 --> Sol1
    Dor1 --> Sol2
    Dor1 --> Sol4
    
    Dor2 --> Sol3
    Dor2 --> Sol5
    
    Dor3 --> Sol1
    Dor3 --> Sol3

    %% --- ESTILOS ---
    classDef outcome fill:#2e7d32,color:white,stroke:#1b5e20,stroke-width:2px;
    classDef opportunity fill:#f9a825,color:black,stroke:#f57f17,stroke-width:2px;
    classDef solution fill:#1565c0,color:white,stroke:#0d47a1,stroke-width:2px;
    
    class OE1,OE2 outcome;
    class Dor1,Dor2,Dor3 opportunity;
    class Sol1,Sol2,Sol3,Sol4,Sol5 solution;
```

---

## 🔬 Discovery Contínuo (Anotações)

### Oportunidade: "Processos Administrativos Lentos"
- **Hipótese:** Se padronizarmos a escrita de notas técnicas, reduziremos o tempo de revisão em 50%.
- **Validação:** O *PAP 06* foi implementado e a Skill `redacao-oficial` automatizou a formatação. Resultado: Tempo médio caiu drasticamente.

### Oportunidade: "Falta de Dados para Decisão"
- **Hipótese:** Se tivermos um painel de indicadores automático, o Comando poderá corrigir rotas mensalmente.
- **Experimento:** O *Painel de Controle* + *Caderno de Indicadores* estão ativos. Próximo passo: Validar se estão sendo consultados.

---
**Ultima Atualização:** 19/01/2026
