# 🦅 Produto: PowerPoint Generator CBMAL (V1.0)

## 🎯 Briefing 5W2H

- **O quê (What)**: Uma ferramenta de automação (script Python + integração IA) que transforma rascunhos em Markdown e planos estratégicos em apresentações PowerPoint (.pptx) profissionais.
- **Por quê (Why)**: Eliminar o trabalho manual de "copiar e colar" do Obsidian para slides, garantindo que a identidade visual oficial (brands/CBMAL.md) seja aplicada instantaneamente.
- **Quem (Who)**: Seção de Gestão Estratégica (APO/EMG).
- **Onde (Where)**: Ambiente local (Cockpit CBMAL) com saídas para apresentações institucionais e seminários.
- **Quando (When)**: Desenvolvimento iniciado em 28/01/2026. Meta de MVP em 48h.
- **Como (How)**: Utilizando a biblioteca `python-pptx` junto com o poder de estruturação do Agente para mapear tópicos em slides.
- **Quanto (How Much)**: Investimento zero em software (Open Source). Ganho estimado de 2h de trabalho por apresentação.

## 🛡️ Escopo e Restrições

- **Incluso**:
  - Aplicação automática da paleta CBMAL (Vermelho #C10A0A, Azul #4A94FF).
  - Inserção do Brasão (Fênix) em todos os slides.
  - Formatação de títulos em Exo 2 Black e corpo em Exo 2 Regular.
  - Geração de slides de: Capa, Agenda, Conteúdo (Texto/Bullet points) e Encerramento.
- **Não Incluso (V1.0)**:
  - Gráficos complexos gerados dinamicamente (serão adicionados na V2).
  - Animações e transições.

## ⚠️ Risco Jurídico/Operacional

- **Consistência Visual**: Risco de desvio do manual de identidade se o template base estiver corrompido. *Mitigação*: Uso de arquivo `reference.pptx` blindado.
- **Legibilidade**: Excesso de texto em um único slide. *Mitigação*: IA deve atuar como "editor" e quebrar conteúdos longos em múltiplos slides automaticamente.

## 🧠 Conexões Neurais (IA)

- [[brands/CBMAL.md]] - *Fonte primária de estilos e ativos visuais.*
- [[01_Gestao_Estrategica/01_Planejamento_2025-2029/Plano Estratégico CBMAL 2025-2029.md]] - *Alinhamento com o Objetivo Estratégico de Modernização Tecnológica.*
- [[99_Base_de_Conhecimento/00_Legislacoes/MANUAL_IDENTIDADE_VISUAL_2022.md]] - *Validação cega de conformidade via Prova dos Nove.*
