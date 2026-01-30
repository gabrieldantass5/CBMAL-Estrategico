import re

# Caminho do arquivo
file_path = r'c:\Users\D_A_N\OneDrive\Desktop\Planejamento Estratégico - CBMAL\01_Gestao_Estrategica\03_Monitoramento_e_Indicadores\01_Instrumentos_Oficiais\CADERNO_DE_INDICADORES_ESTRATEGICOS_v2.0.md'

# Ler o conteúdo
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Nova ficha técnica do IE-01.04
new_ie_01_04 = """### **FICHA TÉCNICA \\- IE-01.04: TAXA DE COBERTURA DE PERÍCIAS OBRIGATÓRIAS**

| Campo | Descrição |
| :---: | :---: |
| **Código** | IE-01.04 |
| **Nível** | **Estratégico** |
| **Nome** | Taxa de Cobertura de Perícias Obrigatórias |
| **Sigla** | TCPO |
| **Objetivo Estratégico Vinculado** | OE.01 \\- Fortalecer as ações preventivas |
| **Tema Estratégico** | Tema 1 \\- Operacional |
| **Definição** | Percentual de incêndios com perícia realizada em relação ao total de incêndios que, segundo critérios normativos, exigem investigação pericial obrigatória. |
| **Justificativa** | A investigação pericial é obrigatória em casos de: (i) incêndios estruturais com vítimas, (ii) incêndios de origem suspeita, e (iii) incêndios em edificações públicas ou de grande porte. Medir a cobertura dessas ocorrências permite avaliar a **capacidade efetiva** de cumprir o dever legal e retroalimentar políticas preventivas. |
| **Fórmula de Cálculo** | `TCPO = (Perícias Realizadas em Ocorrências Obrigatórias / Total de Ocorrências Obrigatórias) × 100` |
| **Unidade de Medida** | Percentual (%) |
| **Frequência de Medição** | Semestral |
| **Fonte de Dados** | DAT / SGO (Fênix) + Registro de Perícias |
| **Responsável pela Aferição** | DAT \\- Seção de Perícias |
| **Linha de Base (2024)** | A levantar (necessário cruzamento: ocorrências x critérios de obrigatoriedade) |
| **Meta** | ≥ 70% |
| **Polaridade** | Quanto Maior, Melhor |
| **Faixas de Farol** | 🟢 ≥ 70% 🟡 50% a 69% 🔴 < 50% |
| **Viabilidade** | **Média** - Requer cruzamento de dados entre SGO e critérios normativos (a serem definidos em IT específica). |
| **Origem** | Sugestão técnica do Maj Macedo (Jan/2026) - Refinamento do IE-01.04 original. |
| **Observações** | **SUBSTITUI o IE-01.04 da v2.0.** A DAT deverá definir, via IT, os critérios de "perícia obrigatória". Benchmark CBMDF: 40% de cobertura geral (não segmentada por obrigatoriedade). |

---"""

# Padrão para encontrar a seção antiga do IE-01.04
pattern = r'### \*\*FICHA TÉCNICA \\- IE-01\.04:.*?\n\n---'

# Substituir
new_content = re.sub(pattern, new_ie_01_04, content, flags=re.DOTALL)

# Salvar
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ IE-01.04 substituído com sucesso!")
