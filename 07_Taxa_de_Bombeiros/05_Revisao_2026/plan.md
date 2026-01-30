---
tipo: Plano
status: Em Execução
tags: [planejamento, conductor, taxa-bombeiros]
autor: Antigravity AI
data: 2026-01-27
---
# Conductor Plan: Implementação da Revisão Tributária 2026

Este plano detalha as etapas técnicas para atingir o produto definido em `product.md`.

## Fases de Execução

### Fase 1: Diagnóstico e Coleta (D+0 a D+2)

- [ ] Mapear todas as taxas vigentes no arquivo `01_Legislacao`.
- [ ] Identificar lacunas em comparação com o `Caderno de Indicadores` (novos serviços prestados que não têm taxa).
- [ ] Ativar Skill: `inteligencia-benchmarking` para comparar com taxas do CBMPE e CBMSC (referências comuns).

### Fase 2: Redação da Minuta (D+3 a D+5)

- [ ] Elaborar nota técnica justificando as alterações (Skill: `redacao-oficial`).
- [ ] Traduzir justificativas em texto jurídico (Minuta de Projeto de Lei).
- [ ] Revisão ortográfica e de padrão CBMAL (Portaria 18/2024).

### Fase 3: Formalização e Envio (D+6)

- [ ] Preparar Ofício de encaminhamento ao Comando Geral.
- [ ] Gerar PDF/Word para inserção no SEI.
- [ ] Marcar item como "Sincronizado" no `CRONOGRAMA_ENTREGAS_2025_2026.md`.

## Guardrails e Validação

- **Critério de Aceite 1:** A soma das taxas deve cobrir o custo operacional das vistorias (Equilíbrio Econômico).
- **Critério de Aceite 2:** A minuta deve seguir rigorosamente a skill `redacao-oficial`.

## Skills Necessárias

- `gestao-estrategica`: Para alinhar com o objetivo de sustentabilidade financeira.
- `inteligencia-dados`: Para cálculos de impacto financeiro.
- `redacao-oficial`: Para a forma dos documentos.

---
Telemetria: skills=[gestao-estrategica, redacao-oficial, inteligencia-dados]; artefatos=[product.md]; iteracoes=1; tokens=~500; retrabalho=baixo
