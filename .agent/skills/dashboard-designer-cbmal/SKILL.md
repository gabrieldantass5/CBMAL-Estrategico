---
name: dashboard-designer-cbmal
description: Especialista em design de dashboards estratégicos para o contexto CBMAL. Usa um motor de raciocínio para sugerir visualizações, paletas institucionais e layouts baseados no público (Comando Geral, RME, Setorial).
---

# 📊 Dashboard Designer CBMAL

Esta skill aplica inteligência de design ao contexto da gestão estratégica militar, garantindo que dashboards sejam legíveis, acionáveis e alinhados à identidade visual do CBMAL.

---

## 🎯 Quando Usar

Use quando precisar:

1. **Planejar um novo dashboard** no Power BI, Excel ou Miro.
2. **Revisar a estética** de dashboards existentes.
3. **Escolher gráficos** que melhor representem um KPI específico.
4. **Garantir acessibilidade** e clareza para o Comando Geral.

---

## 🧠 Motor de Raciocínio (Reasoning Engine)

Ao receber um pedido de dashboard, siga este protocolo de análise:

### 1. Perfil do Público-Alvo

- **Estratégico (Comando Geral)**: Foco em "Big Picture", poucos indicadores, alto contraste, sem ruído.
- **Tático (RME/APO)**: Foco em tendências, metas trimestrais, alertas de desvio.
- **Operacional (Seções)**: Foco em detalhes, tabelas, frequência diária/semanal.

### 2. Seleção de Paleta (CBMAL Standard)

| Uso | Cor Sugerida | Tom (HEX/CBMAL) |
|-----|--------------|-----------------|
| **Base/Fundo** | Branco ou Cinza Muito Claro | `#F8FAFC` |
| **Destaque/KPI** | Marinho CBMAL | `#002366` |
| **Alerta/Crítico** | Vermelho Bombeiro | `#B22222` |
| **Atenção** | Amarelo/Ouro | `#D4AF37` |
| **Normalidade** | Verde Militar | `#4B5320` |

### 3. Matriz de Visualização

- **Tendência no Tempo**: Gráfico de Linhas (Area Chart se houver volume).
- **Comparação**: Gráfico de Barras Horizontais (melhor para rótulos longos).
- **Composição**: Gráfico de Rosca (evitar fatias > 5).
- **Status de Meta**: Gauge Chart ou Bullet Graph.

---

## 🛠️ Workflow de Design

### Passo 1: O Método "C.L.E.A.N."

1. **C**ontexto: Qual a pergunta que este dashboard responde?
2. **L**impeza: Remova gridlines, bordas desnecessárias e cores vibrantes demais.
3. **E**nfase: O dado mais importante deve ser 20% maior que os outros.
4. **A**cessibilidade: Contraste mínimo de 4.5:1 (Padrão WCAG).
5. **N**avegação: Fluxo de leitura em "Z" (Canto superior esquerdo para inferior direito).

### Passo 2: Geração de Especificação

Invocar esta skill para gerar o seguinte output (Markdown):

1. **Conceito Visual** (Estilo: Minimalista Corporativo).
2. **Paleta Específica**.
3. **Sugestão de Wireframe** (Tabela/Lista de Cards).
4. **Lista de Alertas Sugeridos**.

---

## ✅ Checklist de Qualidade (Pre-Delivery)

Antes de aprovar o design:

- [ ] O dashboard passa no "Teste dos 5 Segundos" (entende-se o status principal)?
- [ ] Há uso excessivo de vermelho por razões não-críticas?
- [ ] Os rótulos estão em Português claro e sem jargões desnecessários?
- [ ] A paleta Marinho/Ouro do CBMAL está presente sem ser cansativa?
- [ ] Fontes: Usar preferencialmente **Inter**, **Arial** ou **Montserrat**.

---
**Assimilado via Borg Mode** (Inspiração: UI/UX Pro Max)  
**Skill desenvolvida pela APO/EMG** | Padrão CBMAL 2025-2029
