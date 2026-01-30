# PLANO DE EXECUÇÃO (Conductor Plan)

## 1. Fases de Execução

- [ ] **Fase 1: Preparação**
  - [ ] Ler e estruturar dados do `QUADRO_PACTUACAO_POR_DIRETORIA.md`.
  - [ ] Criar template do Ofício (Markdown) com placeholders `{{DIRETORIA}}`, `{{INDICADORES}}`, `{{PROCESSO_SEI}}`.

- [ ] **Fase 2: Produção (Fábrica de Ofícios)**
  - [ ] Gerar `OFICIO_VALIDACAO_DAT.md`
  - [ ] Gerar `OFICIO_VALIDACAO_COB.md`
  - [ ] Gerar `OFICIO_VALIDACAO_DAL.md`
  - [ ] Gerar `OFICIO_VALIDACAO_DP.md`
  - [ ] Gerar `OFICIO_VALIDACAO_DS.md`
  - [ ] Gerar `OFICIO_VALIDACAO_DE.md`
  - [ ] Gerar `OFICIO_VALIDACAO_SG.md` (Inclui ASCOM/Ouvidoria)
  - [ ] Gerar `OFICIO_VALIDACAO_APO.md`
  - [ ] Gerar `OFICIO_VALIDACAO_DTI_CORREG.md`

- [ ] **Fase 3: Controle de Qualidade**
  - [ ] Skill Audit: `redacao-oficial` (Verificar pronomes de tratamento e estrutura).
  - [ ] Skill Audit: `inteligencia-benchmarking` (Validar clareza da instrução de "viabilidade").

## 2. Skills Necessárias

- `redacao-oficial` (CBMAL): Para garantir o padrão de Ofício Militar.
- `ferramentas-office`: Caso seja solicitado converter para DOCX/PDF (neste momento, entregaremos em MD).

## 3. Guardrails e Validação

- **Critério de Aceite 1:** Todo indicador listado no Quadro de Pactuação deve aparecer no respectivo ofício.
- **Critério de Aceite 2:** O prazo de 30 dias deve estar explícito.
- **Critério de Aceite 3:** A tabela de indicadores deve conter: Código, Nome, Meta e Frequência.
