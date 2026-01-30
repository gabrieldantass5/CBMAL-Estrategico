import re

# Caminho do arquivo
file_path = r'c:\Users\D_A_N\OneDrive\Desktop\Planejamento Estratégico - CBMAL\01_Gestao_Estrategica\03_Monitoramento_e_Indicadores\01_Instrumentos_Oficiais\CADERNO_DE_INDICADORES_ESTRATEGICOS_v2.0.md'

# Ler o conteúdo
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Novo indicador IE-09.04 (Assistência Social)
new_ie_09_04 = """

### **FICHA TÉCNICA \\- IE-09.04: TEMPO MÉDIO DE ATENDIMENTO DA ASSISTÊNCIA SOCIAL**

| Campo | Descrição |
| :---: | :---: |
| **Código** | IE-09.04 |
| **Nível** | **Estratégico** |
| **Nome** | Tempo Médio de Atendimento da Assistência Social |
| **Sigla** | TMAS |
| **Objetivo Estratégico Vinculado** | OE.09 \\- Valorizar o profissional bombeiro militar |
| **Tema Estratégico** | Tema 4 \\- Pessoas |
| **Definição** | Tempo médio (em dias corridos) entre a solicitação de um atendimento de assistência social (DS) e a realização do primeiro atendimento ao militar ou familiar. |
| **Justificativa** | A Diretoria de Saúde (DS) é responsável por atendimentos de assistência social aos militares e familiares. Medir apenas o número absoluto de atendimentos não reflete a **agilidade** do serviço. Este indicador permite avaliar a **capacidade de resposta** e identificar necessidades de ampliação de equipe ou otimização de processos. |
| **Fórmula de Cálculo** | `TMAS = Σ(Data Primeiro Atendimento - Data Solicitação) / Total de Solicitações Atendidas` |
| **Unidade de Medida** | Dias corridos |
| **Frequência de Medição** | Trimestral |
| **Fonte de Dados** | DS - Registros de Atendimento (planilha/sistema) |
| **Responsável pela Aferição** | Diretoria de Saúde (DS) |
| **Linha de Base (2024)** | A levantar |
| **Meta** | ≤ 7 dias |
| **Polaridade** | Quanto Menor, Melhor |
| **Faixas de Farol** | 🟢 ≤ 7 dias 🟡 8 a 15 dias 🔴 > 15 dias |
| **Viabilidade** | **Média** - Requer formalização do registro de datas (início de solicitação e atendimento) em planilha ou sistema específico. |
| **Origem** | Sugestão técnica do Maj Macedo (Jan/2026). |
| **Observações** | **NOVO INDICADOR** incluído na v2.2. Exclui demandas espontâneas sem agendamento prévio. |

---"""

# Novo indicador IE-11.03 (Ouvidoria)
new_ie_11_03 = """

### **FICHA TÉCNICA \\- IE-11.03: TEMPO MÉDIO DE RESPOSTA DA OUVIDORIA**

| Campo | Descrição |
| :---: | :---: |
| **Código** | IE-11.03 |
| **Nível** | **Estratégico** |
| **Nome** | Tempo Médio de Resposta da Ouvidoria |
| **Sigla** | TMRO |
| **Objetivo Estratégico Vinculado** | OE.11 \\- Reestruturar correição e ouvidoria |
| **Tema Estratégico** | Tema 4 \\- Pessoas |
| **Definição** | Tempo médio (em dias corridos) entre o recebimento de uma demanda na Ouvidoria e a emissão da primeira resposta ao demandante. |
| **Justificativa** | Atualmente, o IE-11.02 mede apenas a **taxa de atendimento** (100% das demandas são respondidas). Contudo, **não há métrica de agilidade**. Medir o tempo médio permite avaliar a **qualidade do serviço** e identificar gargalos processuais. Alinhado a boas práticas de transparência e accountability (CGU/TCU). |
| **Fórmula de Cálculo** | `TMRO = Σ(Data Resposta - Data Recebimento) / Total de Demandas Respondidas` |
| **Unidade de Medida** | Dias corridos |
| **Frequência de Medição** | Trimestral |
| **Fonte de Dados** | Sistema de Ouvidoria / Registros Manuais (SEI) |
| **Responsável pela Aferição** | Ouvidoria do CBMAL |
| **Linha de Base (2024)** | A levantar |
| **Meta** | ≤ 15 dias (prazo legal: 30 dias conforme Lei de Acesso à Informação) |
| **Polaridade** | Quanto Menor, Melhor |
| **Faixas de Farol** | 🟢 ≤ 15 dias 🟡 16 a 30 dias 🔴 > 30 dias |
| **Viabilidade** | **Alta** - Dados já disponíveis em sistema ou planilhas de controle. |
| **Origem** | Sugestão técnica do Maj Macedo (Jan/2026) - Complementar ao IE-11.02. |
| **Observações** | **NOVO INDICADOR** incluído na v2.2. Considera-se "primeira resposta" qualquer manifestação oficial da Ouvidoria ao demandante, ainda que parcial. |

---"""

# Encontrar onde inserir IE-09.04 (após IT-09.03)
pattern_09 = r'(### \*\*FICHA TÉCNICA \\- IT-09\.03:.*?\n\n---)'
content = re.sub(pattern_09, r'\1' + new_ie_09_04, content, flags=re.DOTALL)

# Encontrar onde inserir IE-11.03 (procurar por OE.11 ou IE-11.02, ou antes de OE.12)
# Vou inserir antes do próximo OE após o Tema 4
pattern_11 = r'(### \*\*4\.5 Tema 5:)'
content = re.sub(pattern_11, new_ie_11_03 + r'\n\1', content, flags=re.DOTALL)

# Salvar
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ IE-09.04 e IE-11.03 adicionados com sucesso!")
