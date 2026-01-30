# 📦 PRODUCT DEFINITION: Kit de Validação dos Indicadores 2026

## 1. Briefing 5W2H

* **O QUE (What):** Elaboração e despacho de 09 (nove) Ofícios de Pactuação customizados para cada Diretoria/Comando, contendo o pacote de indicadores estratégicos e táticos para o ciclo 2025-2029.
* **POR QUE (Why):** Garantir a ciência formal dos gestores sobre suas metas, cumprir o princípio da publicidade (Portaria 18/2024) e coletar feedback de viabilidade em 30 dias (democracia institucional).
* **QUEM (Who):** APO/SGE (Emissor) -> Diretores e Comandantes Setoriais (Receptores).
* **ONDE (Where):** Diretórios `04_Validacao_Setorial_2026` e tramitação via SEI.
* **QUANDO (When):** Criação imediata (Jan/2026); Retorno dos Diretores em D+30.
* **COMO (How):** Utilizando template mestre com injeção de dados específicos extraídos do `QUADRO_PACTUACAO_POR_DIRETORIA.md`.
* **QUANTO (How Much):** Custo zero financeiro; alto valor agregado de governança.

## 2. Escopo e Restrições

**✅ INCLUDED (Dentro do Escopo):**

* Criação de minuta padrão de Ofício.
* Personalização para: DAT, COB, DAL, DP, DS, DE, SG/ASCOM, APO, DTI/CORREG.
* Inclusão das metadados: Código, Nome, Frequência, Meta (se houver) e Link do Processo SEI.
* Texto explicativo sobre o novo Plano de Monitoramento e as mudanças v2.2.

**❌ EXCLUDED (Fora do Escopo):**

* Criação de novos indicadores (já encerrado na v2.2).
* Protocolo manual no SEI (o agente gera os arquivos, o humano protocola).

## 3. Análise de Risco

* **Risco 1 (Estratégico):** Diretores alegarem desconhecimento das métricas. -> *Mitigação:* Ofício detalhado com prazo de 30 dias para impugnação.
* **Risco 2 (Operacional):** Erro na cópia dos indicadores (ex: atribuir indicador da DAT para a DAL). -> *Mitigação:* Uso do `QUADRO_PACTUACAO` como fonte única de verdade e dupla checagem.
* **Risco 3 (Técnico):** Formatação Markdown quebrar ao passar para o Word/SEI. -> *Mitigação:* Uso da skill `redacao-oficial` para estrutura limpa.
