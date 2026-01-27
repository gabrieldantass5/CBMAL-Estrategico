# 📊 Proposta de Dashboard: Política Estratégica & Monitoramento

**Status**: Rascunho de Design (v1.0)  
**Público**: Comando Geral (Estratégico)  
**Objetivo**: Visualizar a saúde da estratégia e o cumprimento da Política 2025-2029.

---

## 🧠 Análise do Motor de Raciocínio (CBMAL Standard)

### 1. Perfil do Público

- **Decidindo sobre**: Alocação de recursos e prioridades políticas.
- **Necessidade**: Saber "estamos no caminho?" em 10 segundos.
- **Tone**: Autoridade, clareza, zero ruído visual.

### 2. Seleção de KPIs Estratégicos

| KPI | Visualização | Razão |
|-----|--------------|-------|
| **Índice de Cumprimento da Política** | Gauge Chart (0-100%) | Status imediato da missão. |
| **Saúde do Monitoramento (Planos)** | Semáforo (Verde/Amarelo/Vermelho) | Identificar bloqueios nos Planos Setoriais. |
| **Evolução dos Objetivos (OE)** | Radar Chart ou Barras Agrupadas | Ver qual pilar da estratégia está mais fraco. |
| **Alertas Críticos** | Card de Texto Grande | Chamar atenção para o que precisa de decisão agora. |

---

## 🎨 Especificação Visual

### Paleta de Cores (CBMAL High-Contrast)

- **Primary**: `#002366` (Marinho CBMAL) - Usar em cabeçalhos e KPIs principais.
- **Accent**: `#D4AF37` (Ouro) - Usar em bordas de destaque e ícones de prestígio.
- **Success**: `#4B5320` (Verde Militar) - Apenas para metas batidas.
- **Warning**: `#B22222` (Vermelho Bombeiro) - Apenas para metas em risco crítico.

### Tipografia

- **Títulos**: Montserrat Bold (Moderno e Forte).
- **Dados**: Inter (Alta legibilidade).

---

## 📐 Esboço de Layout (Wireframe Conceitual)

```text
+--------------------------------------------------------------------------+
| [BRASÃO CBMAL]   DASHBOARD ESTRATÉGICO - POLÍTICA 2025-2029    [DATA]   |
+--------------------------------------------------------------------------+
|                                                                          |
|  +-------------------+   +-----------------------+   +----------------+  |
|  |   CUMPRIMENTO     |   |   PLANOS EM DIA       |   | PROJETOS CRIT. |  |
|  |      78%          |   |        12/15          |   |       02       |  |
|  |    [GAUGE]        |   |      [SEMÁFORO]       |   |     [ALERTA]   |  |
|  +-------------------+   +-----------------------+   +----------------+  |
|                                                                          |
|  +---------------------------------------+   +-------------------------+ |
|  | EVOLUÇÃO POR OBJETIVO ESTRATÉGICO     |   | AÇÕES IMEDIATAS (APO)   | |
|  |                                       |   |                         | |
|  | OE.01 [████████░░] 80%                |   | 1. Assinar Portaria X   | |
|  | OE.02 [██████░░░░] 60%                |   | 2. Revisar Taxa Jan     | |
|  | OE.03 [█████████░] 90%                |   | 3. Briefing RME         | |
|  +---------------------------------------+   +-------------------------+ |
|                                                                          |
+--------------------------------------------------------------------------+
```

---

## ✅ Checklist de Qualidade (Método CLEAN)

- [x] **C**ontexto: Título claro e OE vinculado.
- [x] **L**impeza: Sem bordas pesadas ou cores 3D.
- [x] **E**nfase: O 78% de cumprimento é o maior elemento visual.
- [x] **A**cessibilidade: Contraste verificado para visualização em telões/tablets.
- [x] **N**avegação: Fluxo natural do resumo para o detalhe.

---
**Gerado via `dashboard-designer-cbmal`** | Inspirado em UI/UX Pro Max
**Assinado: APO/EMG**

```
Telemetria: docs=1; kpis=4; processos=1; alinhamento=Geral; checklist=[1,2,3,4,5]
```
