# 🗺️ Plano de Execução: PPT Generator CBMAL

## 🏁 Fases de Execução

- [x] **Fase 1: Infraestrutura**
  - [x] Criar diretório `scripts/templates_pptx` para armazenar o arquivo base.
  - [x] Validar a presença da biblioteca `python-pptx` no ambiente.
- [x] **Fase 2: Motor de Design** ✅
  - [x] Mapear as cores de `brands/CBMAL.md` para o código Python.
  - [x] Criar função para inserção automática do Brasão e numeração de slides.
- [x] **Fase 3: Lógica de Conversão**
  - [x] Desenvolver o analisador que diferencia `#` (Novo Slide) de `-` (Bullet point).
  - [x] Implementar a regra de "Safe Text" para evitar slides superlotados.
- [x] **Fase 4: Integração Conductor** ✅
  - [x] Criar a skill `pptx-generator-cbmal` para que o Agente possa gerar slides sob demanda.
- [x] **Fase 5: Auditoria de Qualidade** 🛡️ ✅
  - [x] Realizar auditoria visual (Benchmarking) para comparar com os melhores padrões de apresentação militar.

## 🛡️ Guardrails e Validação

- **Critério de Aceite 1**: O arquivo gerado deve abrir sem erros no PowerPoint e Google Slides.
- **Critério de Aceite 2**: As cores devem ser exatamente as especificadas em `brands/CBMAL.md`.
- **Critério de Aceite 3**: Títulos nunca devem ser cortados.

## 🛠️ Skills Necessárias

- `visual_identity_pro` (Cores e Fontes)
- `ferramentas-office` (Motor python-pptx)
- `inteligencia-benchmarking` (Fase de Auditoria)
