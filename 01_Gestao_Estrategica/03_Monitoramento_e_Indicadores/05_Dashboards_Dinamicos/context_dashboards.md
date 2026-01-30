# 🧠 Contexto: Dashboards Dinâmicos CBMAL (2025-2029)

## 📌 Objetivo

Transformar o monitoramento de indicadores estratégicos de um processo estático (Markdown/Planilha) em uma experiência visual dinâmica e de "comando", inspirada nos conceitos de 2026 (Remotion, Live Data, High Performance UI).

## 🚀 Inspiração (Video Analysis)

- **Dinamismo**: Dashboards que não são apenas gráficos, mas "peças visuais" que respiram (animações sutis, transições fluidas).
- **Conectividade**: Dados alimentados via backend (Simulado via JSON/Excel por enquanto).
- **Padrão Estético**: Uso do Gemini 3 Pro para garantir que o UI/UX pareça "premium" e institucional.

## 📊 Fontes de Dados

- **Caderno de Indicadores v2.2**: Contém as fórmulas, metas e fontes de cada indicador.
- **Quadro de Pactuação**: Define quais diretorias são responsáveis por cada dado.

## 🛠️ Tecnologias Cogitadas

- **HTML/JS/CSS (Vanilla)**: Máxima flexibilidade.
- **Chart.js / D3.js**: Para visualização de dados.
- **Tailwind (se necessário)**: Para agilidade no layout.
- **Remotion/Framer Motion**: Para animações de alto nível.

## 📅 Estado Atual

Fase de iniciação e planejamento arquitetural via workflow `/conductor`.

## 📋 Estratégias de Alimentação de Dados (Ideias Guardadas)

*Compilado de sugestões para implementação futura:*

1. **Planilha Mestra (Híbrida)**: Uso de Excel padronizado lido via Python (`pandas`) para atualizar o `JSON` do Dashboard. Melhor custo-benefício inicial.
2. **IA Documental (OCR/Docling)**: Extração direta de valores de Ofícios e Relatórios jogados na `Inbox`.
3. **Google Sheets API**: Conexão direta com planilha na nuvem para atualização em tempo real sem scripts locais.
4. **Supabase/API**: O padrão profissional com banco de dados real e alta performance para histórico.
5. **Interface de Entrada "Admin"**:
    - **Página Local**: Um `ADM_GESTAO.html` para preenchimento manual rápido.
    - **Modo Chat**: Atualização via comandos naturais aqui no Antigravity (IA-Driven).
