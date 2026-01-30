# 🚂 Plano: Dashboards Dinâmicos de Indicadores (v1.0)

Este plano visa criar o primeiro protótipo de dashboard dinâmico para o CBMAL, focado no monitoramento estratégico do ciclo 2025-2029.

## 🏗️ Arquitetura e Estrutura

1. **Camada de Dados**:
   - `data/indicators.json`: Mock de dados extraído do Caderno v2.2.
   - `data/monitoring_history.json`: Histórico simulado para gerar gráficos de tendência.

2. **UI/UX (Frontend)**:
   - `index.html`: Estrutura base com containers para os KPIs.
   - `styles.css`: Estilização "Dark Mode Premium" com acentos institucionais (Vermelho Bombeiro CBMAL).
   - `dashboard.js`: Lógica de renderização, animações de entrada e atualização de dados.

3. **Componentes**:
   - **KPI Cards**: Valor atual vs. Meta (com barra de progresso animada).
   - **Trend Chart**: Gráfico de linha para evolução trimestral.
   - **Alert System**: Notificações visuais para indicadores "fora da meta" (Vermelho/Amarelo).

## 📝 Passo a Passo Pormenorizado

### Fase 1: Fundação e Dados

- [ ] Extrair top 5 indicadores prioritários do Caderno v2.2.
- [ ] Criar arquivo `indicators_mock.json` com valores de exemplo (Jan/Fev/Mar 2026).
- [ ] Definir a paleta de cores CBMAL Pro via skill `visual_identity_pro`.

### Fase 2: Desenvolvimento do Cockpit

- [ ] Desenvolver o layout base (Mobile-friendly e Desktop).
- [ ] Implementar as animações de entrada (Fade-in, slide-up) para dar o ar de "Tecnologia 2026".
- [ ] Criar os gráficos dinâmicos usando Chart.js.

### Fase 3: Refinamento e Interatividade

- [ ] Adicionar efeito de "Glow" e vidro (Glassmorphism) nos cards.
- [ ] Implementar a lógica de comparação (Meta vs. Atual) com ícones dinâmicos.
- [ ] Validar conformidade visual com a skill `dashboard-designer-cbmal`.

## ⚠️ Pontos de Risco

- **Excesso de Contexto**: O dashboard pode ficar pesado se tentarmos colocar todos os 50 indicadores de uma vez. Focaremos nos 5 principais do Comando Geral.
- **Complexidade Técnica**: O uso de bibliotecas de animação pesadas pode comprometer a velocidade no SEI (se integrarmos via HTML).

---

**Comandante, o plano de arquitetura está aprovado? Posso iniciar a execução da Fase 1?**
