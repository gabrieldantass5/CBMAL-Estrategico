---
description: Gerenciamento de energia física, mental e emocional
---

# Workflow: Energia

Gerencia energia (física, mental, emocional) para produtividade sustentável e prevenção de burnout.

## 📋 Comandos Disponíveis

### `/energia --check`

**Propósito**: Avaliar nível de energia atual e sugerir tipo de trabalho ideal.

**Execução**:

1. Perguntar ao usuário: "Qual seu nível de energia agora? (1-5)"
   - 1-2: Baixa (cansado, exausto)
   - 3: Moderada (nem cansado nem energizado)
   - 4-5: Alta (descansado, energizado, focado)

2. Registrar resposta no diário atual (campo `energia_inicial` se início do dia, ou criar observação).

3. Sugerir tipo de trabalho baseado no nível:
   - **Energia Alta (4-5)**:

     ```
     🚀 Energia excelente para Deep Work!
     Sugestões:
     - Análises estratégicas complexas
     - Criação de documentos críticos
     - Planejamento de alto nível
     - Resolução de problemas complexos
     
     Use: /executar [tarefa] --deep-work
     ```

   - **Energia Moderada (3)**:

     ```
     ⚙️ Energia adequada para tarefas táticas.
     Sugestões:
     - Atualizar Kanban
     - Processar e-mails
     - Tarefas administrativas
     - Reuniões de alinhamento
     
     Use: /executar [tarefa] --pomodoro (para manter foco)
     ```

   - **Energia Baixa (1-2)**:

     ```
     🛑 Energia baixa detectada. PAUSA OBRIGATÓRIA.
     Você não será produtivo em tarefas complexas neste estado.
     
     Ações recomendadas:
     1. Pausa de 15-30 minutos
     2. Hidratação (500ml água)
     3. Movimento leve (caminhada, alongamento)
     4. Lanche saudável se necessário
     
     Use: /energia --pausa
     
     Se persistir após pausa, considere encerrar o dia ou fazer tarefas mecânicas muito simples.
     ```

4. Comparar com histórico do mesmo horário (se disponível) e alertar se energia está consistentemente baixa nesse período.

---

### `/energia --pausa`

**Propósito**: Forçar pausa de recuperação com sugestões estruturadas.

**Execução**:

1. Apresentar menu de opções de pausa:

   ```
   🧘 PAUSA DE RECUPERAÇÃO
   
   Escolha uma atividade (ou faça todas):
   
   1. 💧 HIDRATAÇÃO
      - Beba 250-500ml de água
      - Evite cafeína se já tomou >2 cafés hoje
   
   2. 🚶 MOVIMENTO
      - Caminhada de 5-10 min
      - Alongamento básico (pescoço, ombros, costas)
      - Exercício de respiração (4-7-8: inspire 4s, segure 7s, expire 8s)
   
   3. 🍎 NUTRIÇÃO
      - Lanche saudável se última refeição foi >3h atrás
      - Evite açúcar refinado (causa crash depois)
   
   4. 👀 DESCANSO VISUAL
      - Regra 20-20-20: Olhe para algo a 20 pés (6m) por 20 segundos
      - Feche os olhos por 1-2 minutos
   
   5. 🧠 RESET MENTAL
      - 3 minutos de mindfulness/meditação
      - Escrever 3 itens de gratidão
      - Ouvir música relaxante
   
   ⏱️ Tempo sugerido: 15 minutos
   ```

2. Iniciar timer de 15 minutos (informar usuário quando acabar).

3. Após pausa, perguntar: "Como está sua energia agora? (1-5)"

4. Registrar pausa no diário:

   ```markdown
   **Pausa de Recuperação**: [HH:MM] - Energia antes: [X], depois: [Y]
   ```

5. Se energia continuar baixa (<3), sugerir pausa mais longa ou encerramento do dia.

---

### `/energia --dashboard`

**Propósito**: Visualizar histórico de energia e identificar padrões.

**Execução**:

1. Ler todos os diários da última semana (ou mês, se especificado).

2. Extrair campos:
   - `energia_inicial`
   - `energia_final`
   - Observações de pausas

3. Calcular:
   - Média diária de energia inicial
   - Média diária de energia final
   - Delta de energia (final - inicial)
   - Dias com pausas de recuperação

4. Gerar visualização textual:

   ```
   📊 DASHBOARD DE ENERGIA - Última Semana
   
   ┌─────────────┬──────────┬─────────┬───────┐
   │ Dia         │ Energia  │ Energia │ Delta │
   │             │ Inicial  │ Final   │       │
   ├─────────────┼──────────┼─────────┼───────┤
   │ Seg 20/01   │ 4/5 🟢   │ 2/5 🔴  │ -2    │
   │ Ter 21/01   │ 3/5 🟡   │ 3/5 🟡  │  0    │
   │ Qua 22/01   │ 5/5 🟢   │ 4/5 🟢  │ -1    │
   │ Qui 23/01   │ 3/5 🟡   │ 2/5 🔴  │ -1    │
   │ Sex 24/01   │ 4/5 🟢   │ 3/5 🟡  │ -1    │
   └─────────────┴──────────┴─────────┴───────┘
   
   📈 ESTATÍSTICAS
   - Média Inicial: 3.8/5
   - Média Final: 2.8/5
   - Delta Médio: -1.0 (tendência de desgaste)
   
   ⚠️ ALERTAS
   - Energia final baixa em 40% dos dias
   - Delta negativo em 100% dos dias (preocupante)
   
   💡 RECOMENDAÇÕES
   1. Aumentar frequência de pausas (meta: a cada 50-90min)
   2. Considerar encerrar dia mais cedo quando energia < 3
   3. Revisar qualidade do sono e hidratação
   ```

5. Salvar dashboard em `06_Diário_e_Memórias_IA/Dashboard_Energia_[Data].md`.

---

### `/energia --optimize`

**Propósito**: Analisar padrões e sugerir mudanças no workflow para preservar energia.

**Execução**:

1. Ler diários das últimas 2-4 semanas.

2. Correlacionar:
   - Horários de pico de energia
   - Tipos de tarefa realizadas em cada nível de energia
   - Impacto de pausas na recuperação

3. Identificar padrões:
   - "Você tem energia consistentemente alta entre 9h-11h" (proteger para Deep Work)
   - "Energia cai drasticamente após almoço às 14h" (evitar tarefas complexas)
   - "Pausas de 15min aumentam energia em +1 ponto em média"

4. Gerar relatório de otimização:

   ```markdown
   # 🔬 Análise de Otimização de Energia
   
   ## ⏰ Seus Horários Nobres (Alta Energia)
   - **09:00 - 11:30**: Energia média 4.2/5 🟢
   - **15:30 - 17:00**: Energia média 3.5/5 🟡
   
   **Recomendação**: Proteja 9h-11h30 para Deep Work. Bloqueie este horário no calendário e recuse reuniões.
   
   ## 📉 Horários de Baixa Energia
   - **13:00 - 14:30**: Energia média 2.3/5 🔴 (pós-almoço)
   - **18:00+**: Energia média 2.0/5 🔴
   
   **Recomendação**: Use 13h-14h30 para tarefas mecânicas (e-mails, admin). Considere encerrar dia às 17h30.
   
   ## 💊 Eficácia de Pausas
   - Pausas aumentam energia em média +0.8 pontos
   - Você faz pausas em apenas 40% dos dias (meta: 100%)
   
   **Recomendação**: Configure alarme a cada 90 minutos para pausa obrigatória.
   
   ## 🎯 Plano de Ação
   1. **Time Blocking**: Alocar 9h-11h30 exclusivamente para trabalho estratégico
   2. **Pausas Programadas**: 10h45, 14h00, 16h00
   3. **Hard Stop**: Encerrar expediente às 17h30 (energia insustentável após isso)
   4. **Experimento**: Testar almoço mais leve para reduzir queda pós-refeição
   ```

5. Salvar relatório em `06_Diário_e_Memórias_IA/Analise_Energia_[Data].md`.

---

## 📝 Integração com Outros Workflows

### Com `/sincronizar`

- **Início do dia** (`/sincronizar --start`): Automaticamente executar `/energia --check` para avaliar energia inicial.
- **Fim do dia** (`/sincronizar --end`): Solicitar energia final e atualizar diário.

### Com `/executar`

- Antes de iniciar tarefa complexa, verificar se energia ≥ 4. Se < 4, alertar e sugerir pausa primeiro.
- Durante `--deep-work` ou `--pomodoro`, bloquear execução de `/energia` (exceto `--pausa` em emergência).

### Com `/orquestrar`

- **Weekly Review** (`/orquestrar --weekly-review`): Incluir sumário de energia da semana.

---

## 🔧 Parâmetros Avançados (Futuro)

- `/energia --check --silent`: Registra energia sem exibir sugestões (para logging rápido).
- `/energia --dashboard --month`: Dashboard do mês completo.
- `/energia --optimize --export-calendar`: Exportar horários nobres para Google Calendar.

---

## 📚 Referências

- Implementation Plan: [implementation_plan.md](file:///C:/Users/D_A_N/.gemini/antigravity/brain/c3ee36b3-8b2f-4785-bbfa-56b973a6519a/implementation_plan.md)
- Template de Diário: [Template_Diario_Conductor.md](file:///c:/Users/D_A_N/OneDrive/Desktop/Planejamento%20Estratégico%20-%20CBMAL/06_Diário_e_Memórias_IA/Arquivos_Diário/_Templates/Template_Diario_Conductor.md)

---

*Workflow criado em 25/01/2026 como parte da Fase 1 de otimização de produtividade.*
