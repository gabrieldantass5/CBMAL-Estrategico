module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/dashboard-cbmal/data/indicadores.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"codigo\":\"IE-11.03\",\"nome\":\"TEMPO MÉDIO DE RESPOSTA DA OUVIDORIA\",\"sigla\":\"TMRO\",\"objetivo\":\"OE.11 - Reestruturar correição e ouvidoria\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Tempo médio (em dias corridos) entre o recebimento de uma demanda na Ouvidoria e a emissão da primeira resposta ao demandante.\",\"formula\":\"TMRO = Σ(Data Resposta - Data Recebimento) / Total de Demandas Respondidas\",\"unidade\":\"Dias corridos\",\"frequencia\":\"Trimestral\",\"fonte\":\"Sistema de Ouvidoria / Registros Manuais (SEI)\",\"responsavel\":\"Ouvidoria do CBMAL\",\"meta\":\"≤ 15 dias (prazo legal: 30 dias conforme Lei de Acesso à Informação)\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≤ 15 dias 🟡 16 a 30 dias 🔴 > 30 dias\"},{\"codigo\":\"IE-01.01\",\"nome\":\"TAXA DE ATUALIZAÇÃO DE INSTRUÇÕES TÉCNICAS\",\"sigla\":\"TAIT\",\"objetivo\":\"OE.01 - Fortalecer as ações preventivas\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Percentual de Instruções Técnicas (ITs) atualizadas em relação ao total de ITs vigentes.\",\"formula\":\"TAIT = (ITs Atualizadas no Período / Total de ITs Vigentes) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"DAT / Registro de ITs\",\"responsavel\":\"DAT - Diretoria de Atividades Técnicas\",\"meta\":\"**≥ 20% do total atualizado**\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 20% 🟡 10% a 19% 🔴 \\\\< 10%\"},{\"codigo\":\"IE-01.02\",\"nome\":\"DEMANDA REPRIMIDA EM VISTORIAS TÉCNICAS\",\"sigla\":\"DRVT\",\"objetivo\":\"OE.01 - Fortalecer as ações preventivas\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Percentual de vistorias técnicas pendentes em relação ao total de pedidos recebidos no período.\",\"formula\":\"DRVT = (Vistorias Pendentes / Pedidos Recebidos) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"SAPS\",\"responsavel\":\"DAT - Diretoria de Atividades Técnicas\",\"meta\":\"\\\\< 15%\",\"linha_base\":\"0,27% (36 pendentes / 13.017 pedidos)\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 \\\\< 15% 🟡 15% a 30% 🔴 \\\\> 30%\"},{\"codigo\":\"IE-01.03\",\"nome\":\"DEMANDA REPRIMIDA EM ANÁLISES TÉCNICAS\",\"sigla\":\"DRAT\",\"objetivo\":\"OE.01 - Fortalecer as ações preventivas\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Percentual de análises de projetos técnicos pendentes em relação ao total de pedidos recebidos.\",\"formula\":\"DRAT = (Análises Pendentes / Pedidos Recebidos) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"SAPS\",\"responsavel\":\"DAT - Diretoria de Atividades Técnicas\",\"meta\":\"\\\\< 15%\",\"linha_base\":\"3,87% (20 pendentes / 516 pedidos)\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 \\\\< 15% 🟡 15% a 30% 🔴 \\\\> 30%\"},{\"codigo\":\"IE-01.04\",\"nome\":\"TAXA DE COBERTURA DE PERÍCIAS OBRIGATÓRIAS\",\"sigla\":\"TCPO\",\"objetivo\":\"OE.01 - Fortalecer as ações preventivas\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Percentual de incêndios com perícia realizada em relação ao total de incêndios que, segundo critérios normativos, exigem investigação pericial obrigatória.\",\"formula\":\"TCPO = (Perícias Realizadas em Ocorrências Obrigatórias / Total de Ocorrências Obrigatórias) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"DAT / SGO (Fênix) + Registro de Perícias\",\"responsavel\":\"DAT - Seção de Perícias\",\"meta\":\"≥ 70%\",\"linha_base\":\"A levantar (necessário cruzamento: ocorrências x critérios de obrigatoriedade)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 70% 🟡 50% a 69% 🔴 < 50%\"},{\"codigo\":\"IT-01.05\",\"nome\":\"ÍNDICE DE ENTREGA DA DOUTRINA DE PERÍCIA\",\"sigla\":\"\",\"objetivo\":\"OE.01 - Fortalecer as ações preventivas\",\"tema\":\"\",\"definicao\":\"Mede o progresso físico das etapas de elaboração e publicação do Manual de Perícia e revisão do COSCIE.\",\"formula\":\"% de conclusão das etapas previstas no cronograma do projeto.\",\"unidade\":\"\",\"frequencia\":\"\",\"fonte\":\"\",\"responsavel\":\"DAT\",\"meta\":\"100% de conclusão até DEZ/2026\",\"linha_base\":\"\",\"polaridade\":\"\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\"},{\"codigo\":\"IE-02.01\",\"nome\":\"TEMPO RESPOSTA OPERACIONAL\",\"sigla\":\"TRO\",\"objetivo\":\"OE.02 - Aperfeiçoar a Gestão Operacional\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Tempo médio decorrido entre o acionamento via 193 (horário de despacho) e a chegada da primeira viatura ao local da ocorrência.\",\"formula\":\"TRO = Σ(Hora Chegada - Hora Despacho) / Total de Ocorrências\",\"unidade\":\"Minutos\",\"frequencia\":\"Mensal\",\"fonte\":\"Sistema BM / SGO (Fênix)\",\"responsavel\":\"Diretoria Operacional (DOP) / Seção de Estatística\",\"meta\":\"≤ 12 min\",\"linha_base\":\"15 min e 24 seg (Média 2024\\\\)\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≤ 10 min 🟡 10,1 a 12 min 🔴 \\\\> 12 min\"},{\"codigo\":\"IE-02.02\",\"nome\":\"EMERGÊNCIAS NÃO ATENDIDAS\",\"sigla\":\"TENA\",\"objetivo\":\"OE.02 - Aperfeiçoar a Gestão Operacional\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Percentual de chamadas de emergência recebidas via 193 que não foram atendidas por falta de recursos operacionais.\",\"formula\":\"TENA = (Emergências Não Atendidas / Total de Emergências Recebidas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Mensal\",\"fonte\":\"Sistema BM / SGO (Fênix)\",\"responsavel\":\"Comando Operacional\",\"meta\":\"\\\\< 2%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 \\\\< 2% 🟡 2% a 5% 🔴 \\\\> 5%\"},{\"codigo\":\"IE-02.03\",\"nome\":\"COBERTURA DE GEORREFERENCIAMENTO\",\"sigla\":\"TCGEO\",\"objetivo\":\"OE.02 - Aperfeiçoar a Gestão Operacional\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Percentual de viaturas operacionais equipadas com sistema de georreferenciamento ativo.\",\"formula\":\"TCGEO = (Viaturas com GPS Ativo / Total de Viaturas Operacionais) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"Diretoria de Apoio Logístico\",\"responsavel\":\"DAL / Seção de Viaturas\",\"meta\":\"≥ 80%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 80% 🟡 50% a 79% 🔴 \\\\< 50%\"},{\"codigo\":\"IT-02.04\",\"nome\":\"IMPLEMENTAÇÃO DO PROJETO DRONES\",\"sigla\":\"\",\"objetivo\":\"OE.02 - Aperfeiçoar a gestão operacional\",\"tema\":\"\",\"definicao\":\"Percentual de conclusão dos marcos: aquisição, capacitação de pilotos e ativação do serviço.\",\"formula\":\"(Marcos Realizados / Marcos Totais) \\\\* 100\",\"unidade\":\"\",\"frequencia\":\"\",\"fonte\":\"\",\"responsavel\":\"COB\",\"meta\":\"100% implantado até DEZ/2025\",\"linha_base\":\"\",\"polaridade\":\"\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\"},{\"codigo\":\"IE-03.01\",\"nome\":\"EXECUÇÃO DO PLANO DE EXPANSÃO\",\"sigla\":\"TEPE\",\"objetivo\":\"OE.03 - Ampliar a cobertura operacional\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Percentual de municípios com unidades operacionais implantadas em relação ao previsto no Plano de Expansão do CBMAL.\",\"formula\":\"TEPE = (Municípios Atendidos / Municípios Previstos) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"Comando Operacional\",\"responsavel\":\"Comando Operacional\",\"meta\":\"\\\\+2 novos municípios\",\"linha_base\":\"18 municípios (atual)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 Meta atingida 🟡 1 novo município 🔴 Nenhum novo\"},{\"codigo\":\"IE-03.02\",\"nome\":\"NOVOS POSTOS DE GUARDA-VIDAS\",\"sigla\":\"NPGV\",\"objetivo\":\"OE.03 - Ampliar a cobertura operacional\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Quantidade de novos postos de guarda-vidas implantados em áreas estratégicas de Alagoas no período.\",\"formula\":\"NPGV = Nº de Postos Implantados no Período\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"Comando Operacional / BSA\",\"responsavel\":\"BSA - Batalhão de Salvamento Aquático\",\"meta\":\"≥ 2 novos postos\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 2 🟡 1 🔴 Nenhum\"},{\"codigo\":\"IE-03.03\",\"nome\":\"CONVÊNIOS COM MUNICÍPIOS\",\"sigla\":\"NCAM\",\"objetivo\":\"OE.03 - Ampliar a cobertura operacional\",\"tema\":\"Tema 1 - Operacional\",\"definicao\":\"Quantidade de convênios ou parcerias formalizados com prefeituras para prestação de serviços de bombeiro militar.\",\"formula\":\"NCAM = Nº de Convênios Ativos\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Semestral\",\"fonte\":\"APO / Seção de Convênios\",\"responsavel\":\"APO\",\"meta\":\"≥ 5 novos convênios\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 5 🟡 3 a 4 🔴 \\\\< 3\"},{\"codigo\":\"IE-04.01\",\"nome\":\"TAXA DE EXECUÇÃO DO PLANO DE GESTÃO\",\"sigla\":\"TEPG\",\"objetivo\":\"OE.04 - Aperfeiçoar a gestão estratégica\",\"tema\":\"Tema 2 - Governança e Gestão\",\"definicao\":\"Percentual de iniciativas do Plano de Gestão anual efetivamente concluídas dentro do prazo estipulado.\",\"formula\":\"TEPG = (Iniciativas Concluídas / Iniciativas Planejadas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Trimestral\",\"fonte\":\"APO / SGE\",\"responsavel\":\"APO\",\"meta\":\"≥ 80%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 80% 🟡 60% a 79% 🔴 \\\\< 60%\"},{\"codigo\":\"IE-04.02\",\"nome\":\"PLANOS SETORIAIS ENTREGUES\",\"sigla\":\"TPSE\",\"objetivo\":\"OE.04 - Aperfeiçoar a gestão estratégica\",\"tema\":\"Tema 2 - Governança e Gestão\",\"definicao\":\"Percentual de Órgãos de Direção Setorial (ODS) que entregaram seus Planos Setoriais completos.\",\"formula\":\"TPSE = (ODS com Plano Entregue / Total de ODS) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual (início do ciclo)\",\"fonte\":\"APO / SEI\",\"responsavel\":\"APO\",\"meta\":\"100%\",\"linha_base\":\"Não havia obrigatoriedade\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 100% 🟡 80% a 99% 🔴 \\\\< 80%\"},{\"codigo\":\"IE-04.03\",\"nome\":\"MATURIDADE EM GESTÃO ESTRATÉGICA\",\"sigla\":\"IMGE\",\"objetivo\":\"OE.04 - Aperfeiçoar a gestão estratégica\",\"tema\":\"Tema 2 - Governança e Gestão\",\"definicao\":\"Avaliação qualitativa do nível de maturidade da gestão estratégica do CBMAL, considerando processos, ferramentas e cultura.\",\"formula\":\"Avaliação baseada em questionário estruturado (escala 1-5)\",\"unidade\":\"Pontuação (1 a 5\\\\)\",\"frequencia\":\"Anual\",\"fonte\":\"APO / Autoavaliação\",\"responsavel\":\"APO\",\"meta\":\"Nível 3 (consolidado)\",\"linha_base\":\"Nível 2 (em desenvolvimento)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 3 🟡 2,5 a 2,9 🔴 \\\\< 2,5\"},{\"codigo\":\"IE-05.01\",\"nome\":\"ÍNDICE IMGG\",\"sigla\":\"IMGG\",\"objetivo\":\"OE.05 - Aprimorar governança corporativa\",\"tema\":\"Tema 2 - Governança e Gestão\",\"definicao\":\"Pontuação obtida pelo CBMAL no levantamento de governança do TCU/Governo Estadual.\",\"formula\":\"Pontuação conforme metodologia IMGG estadual\",\"unidade\":\"Pontos (0-100)\",\"frequencia\":\"Anual\",\"fonte\":\"SEPLAG / APO\",\"responsavel\":\"APO\",\"meta\":\"≥ 70 pontos\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 70 🟡 50 a 69 🔴 \\\\< 50\"},{\"codigo\":\"IE-05.02\",\"nome\":\"REUNIÕES DE MONITORAMENTO ESTRATÉGICO\",\"sigla\":\"TRME\",\"objetivo\":\"OE.05 - Aprimorar governança corporativa\",\"tema\":\"Tema 2 - Governança e Gestão\",\"definicao\":\"Percentual de Reuniões de Monitoramento Estratégico realizadas em relação ao planejado no calendário anual.\",\"formula\":\"TRME = (RMEs Realizadas / RMEs Planejadas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"APO / Atas de RME\",\"responsavel\":\"APO\",\"meta\":\"100% (4 RMEs)\",\"linha_base\":\"4 reuniões/ano\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 100% 🟡 75% (3 RMEs) 🔴 \\\\< 75%\"},{\"codigo\":\"IE-05.03\",\"nome\":\"INDICADORES COM FAROL VERDE\",\"sigla\":\"TIVD\",\"objetivo\":\"OE.05 - Aprimorar governança corporativa\",\"tema\":\"Tema 2 - Governança e Gestão\",\"definicao\":\"Percentual de indicadores estratégicos classificados como \\\"Verde\\\" (meta atingida) em relação ao total de indicadores monitorados.\",\"formula\":\"TIVD = (Indicadores Verdes / Total de Indicadores) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Trimestral\",\"fonte\":\"APO / Painel de Farol\",\"responsavel\":\"APO\",\"meta\":\"≥ 70%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 70% 🟡 50% a 69% 🔴 \\\\< 50%\"},{\"codigo\":\"IT-05.04\",\"nome\":\"GRAU DE IMPLANTAÇÃO DA GESTÃO DE RISCOS\",\"sigla\":\"\",\"objetivo\":\"OE.05 - Aprimorar a governança corporativa\",\"tema\":\"\",\"definicao\":\"Verificação de conformidade da entrega da Política de GR e das Matrizes de Risco Setoriais.\",\"formula\":\"Checklist de entregas (Política \\\\+ Matrizes ODS).\",\"unidade\":\"\",\"frequencia\":\"\",\"fonte\":\"\",\"responsavel\":\"APO\",\"meta\":\"Política e 100% das matrizes setoriais concluídas até DEZ/2026\",\"linha_base\":\"\",\"polaridade\":\"\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\"},{\"codigo\":\"IE-06.01\",\"nome\":\"ENGAJAMENTO EM REDES SOCIAIS\",\"sigla\":\"TERS\",\"objetivo\":\"OE.06 - Fortalecer comunicação institucional\",\"tema\":\"Tema 3 - Comunicação\",\"definicao\":\"Média de interações (curtidas, comentários, compartilhamentos) por publicação nas redes sociais oficiais do CBMAL.\",\"formula\":\"TERS = Σ Interações / Nº de Publicações\",\"unidade\":\"Número médio\",\"frequencia\":\"Mensal\",\"fonte\":\"Redes Sociais da ASCOM / EMG\",\"responsavel\":\"ASCOM / EMG\",\"meta\":\"Crescimento de 20% sobre linha de base\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ \\\\+20% 🟡 \\\\+10% a \\\\+19% 🔴 \\\\< \\\\+10%\"},{\"codigo\":\"IE-06.02\",\"nome\":\"SEGUIDORES DO CBMAL\",\"sigla\":\"TSRS\",\"objetivo\":\"OE.06 - Fortalecer comunicação institucional\",\"tema\":\"Tema 3 - Comunicação\",\"definicao\":\"Soma total de seguidores/assinantes nas redes sociais oficiais do CBMAL (Instagram, YouTube, etc.).\",\"formula\":\"TSRS = Σ Seguidores em todas as redes\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Trimestral\",\"fonte\":\"ASCOM / EMG\",\"responsavel\":\"ASCOM / EMG\",\"meta\":\"Crescimento de 15%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ \\\\+15% 🟡 \\\\+5% a \\\\+14% 🔴 \\\\< \\\\+5%\"},{\"codigo\":\"IE-06.03\",\"nome\":\"APRESENTAÇÕES DA BANDA DE MÚSICA\",\"sigla\":\"TEAB\",\"objetivo\":\"OE.06 - Fortalecer comunicação institucional\",\"tema\":\"Tema 3 - Comunicação\",\"definicao\":\"Percentual de apresentações realizadas em relação às demandas recebidas/planejadas.\",\"formula\":\"TEAB = (Apresentações Realizadas / Demandas Recebidas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"Banda de Música / Secretaria-Geral\",\"responsavel\":\"Banda de Música\",\"meta\":\"≥ 80%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 80% 🟡 60% a 79% 🔴 \\\\< 60%\"},{\"codigo\":\"IE-07.01\",\"nome\":\"ALCANCE DE CAMPANHAS PREVENTIVAS\",\"sigla\":\"ACP\",\"objetivo\":\"OE.07 - Aprimorar educação pública para prevenção\",\"tema\":\"Tema 3 - Comunicação\",\"definicao\":\"Número estimado de pessoas impactadas pelas campanhas educativas preventivas (presenciais \\\\+ digitais).\",\"formula\":\"ACP = Participantes Presenciais + Alcance Digital\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Semestral\",\"fonte\":\"ASCOM / Relatórios de Campanhas\",\"responsavel\":\"ASCOM\",\"meta\":\"≥ 50.000 pessoas/ano\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 50.000 🟡 30.000 a 49.999 🔴 \\\\< 30.000\"},{\"codigo\":\"IE-07.02\",\"nome\":\"PROJETOS SOCIAIS REALIZADOS\",\"sigla\":\"NTPS\",\"objetivo\":\"OE.07 - Aprimorar educação pública para prevenção\",\"tema\":\"Tema 3 - Comunicação\",\"definicao\":\"Quantidade de turmas concluídas dos projetos sociais do CBMAL (Bombeiro Mirim, Golfinho, Surf-Salva).\",\"formula\":\"NTPS = Nº de Turmas Concluídas\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"COB / OBMs / ASCOM\",\"responsavel\":\"EMG\",\"meta\":\"≥ 4 turmas\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 4 🟡 1 a 3 🔴 \\\\< 1\"},{\"codigo\":\"IE-07.03\",\"nome\":\"ESCOLAS ATENDIDAS\",\"sigla\":\"NEAP\",\"objetivo\":\"OE.07 - Aprimorar educação pública para prevenção\",\"tema\":\"Tema 3 - Comunicação\",\"definicao\":\"Quantidade de escolas (públicas e privadas) que receberam ações educativas do CBMAL no período.\",\"formula\":\"NEAP = Nº de Escolas Atendidas\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"OBMs / Relatórios de Palestras\",\"responsavel\":\"ASCOM / EMG\",\"meta\":\"≥ 50 escolas\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 50 🟡 25 a 49 🔴 \\\\< 25\"},{\"codigo\":\"IE-08.01\",\"nome\":\"IMPLANTAÇÃO DA GESTÃO POR COMPETÊNCIAS\",\"sigla\":\"TIGC\",\"objetivo\":\"OE.08 - Otimizar a gestão de pessoas\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Percentual de etapas da Política de Gestão por Competências efetivamente implementadas.\",\"formula\":\"TIGC = (Etapas Implementadas / Total de Etapas Previstas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"Diretoria de Pessoal\",\"responsavel\":\"Diretoria de Pessoal\",\"meta\":\"≥ 50%\",\"linha_base\":\"20% (fase inicial)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 50% 🟡 30% a 49% 🔴 \\\\< 30%\"},{\"codigo\":\"IE-08.02\",\"nome\":\"BANCO DE TALENTOS ATIVO\",\"sigla\":\"TMBT\",\"objetivo\":\"OE.08 - Otimizar a gestão de pessoas\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Percentual de militares com perfil de competências cadastrado no Banco de Talentos.\",\"formula\":\"TMBT = (Militares Cadastrados / Efetivo Ativo) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"Sistema BMRH / Diretoria de Pessoal\",\"responsavel\":\"Diretoria de Pessoal\",\"meta\":\"≥ 30%\",\"linha_base\":\"0% (não implantado)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 30% 🟡 15% a 29% 🔴 \\\\< 15%\"},{\"codigo\":\"IE-09.01\",\"nome\":\"ÍNDICE DE CLIMA ORGANIZACIONAL\",\"sigla\":\"ISCO\",\"objetivo\":\"OE.09 - Valorizar o profissional bombeiro militar\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Pontuação média obtida em pesquisa de clima organizacional aplicada ao efetivo.\",\"formula\":\"Média das respostas em escala de 1 a 5\",\"unidade\":\"Pontuação (1 a 5\\\\)\",\"frequencia\":\"Anual\",\"fonte\":\"Pesquisa de Clima / Diretoria de Pessoal\",\"responsavel\":\"Diretoria de Pessoal\",\"meta\":\"≥ 4,0\",\"linha_base\":\"3,86 (Relatório 2024\\\\)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 4,0 🟡 3,5 a 3,9 🔴 \\\\< 3,5\"},{\"codigo\":\"IE-09.02\",\"nome\":\"RECONHECIMENTOS POR MÉRITO\",\"sigla\":\"NRFM\",\"objetivo\":\"OE.09 - Valorizar o profissional bombeiro militar\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Quantidade de medalhas, elogios e prêmios concedidos por desempenho destacado no período.\",\"formula\":\"NRFM = Nº de Reconhecimentos Publicados em BGO\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"Secretaria Geral / BGO\",\"responsavel\":\"Secretaria Geral / EMG\",\"meta\":\"≥ 50 reconhecimentos\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 50 🟡 25 a 49 🔴 \\\\< 25\"},{\"codigo\":\"IT-09.03\",\"nome\":\"TAXA DE COBERTURA DE SUPORTE EMOCIONAL\",\"sigla\":\"\",\"objetivo\":\"OE.09 - Valorizar o profissional bombeiro militar\",\"tema\":\"\",\"definicao\":\"Percentual de unidades (OBMs) que receberam a visita técnica ou capacitação do programa de suporte mental.\",\"formula\":\"(OBMs Atendidas / Total de OBMs) \\\\* 100\",\"unidade\":\"\",\"frequencia\":\"\",\"fonte\":\"\",\"responsavel\":\"NSQVT\",\"meta\":\"100% das OBMs atendidas até DEZ/2026\",\"linha_base\":\"\",\"polaridade\":\"\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\"},{\"codigo\":\"IE-09.04\",\"nome\":\"TEMPO MÉDIO DE ATENDIMENTO DA ASSISTÊNCIA SOCIAL\",\"sigla\":\"TMAS\",\"objetivo\":\"OE.09 - Valorizar o profissional bombeiro militar\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Tempo médio (em dias corridos) entre a solicitação de um atendimento de assistência social (DS) e a realização do primeiro atendimento ao militar ou familiar.\",\"formula\":\"TMAS = Σ(Data Primeiro Atendimento - Data Solicitação) / Total de Solicitações Atendidas\",\"unidade\":\"Dias corridos\",\"frequencia\":\"Trimestral\",\"fonte\":\"DS - Registros de Atendimento (planilha/sistema)\",\"responsavel\":\"Diretoria de Saúde (DS)\",\"meta\":\"≤ 7 dias\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≤ 7 dias 🟡 8 a 15 dias 🔴 > 15 dias\"},{\"codigo\":\"IE-10.01\",\"nome\":\"TAXA DE APTIDÃO FÍSICA (TAF)\",\"sigla\":\"TTAF\",\"objetivo\":\"OE.10 - Promover a saúde e aptidão física\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Percentual de militares considerados aptos no Teste de Aptidão Física (TAF) periódico.\",\"formula\":\"TTAF = (Militares Aptos / Militares Avaliados) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"CTFID\",\"responsavel\":\"CTFID\",\"meta\":\"≥ 85%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 85% 🟡 70% a 84% 🔴 \\\\< 70%\"},{\"codigo\":\"IE-10.02\",\"nome\":\"MILITARES EM INSPEÇÃO DE SAÚDE\",\"sigla\":\"TSIS\",\"objetivo\":\"OE.10 - Promover a saúde e aptidão física\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Percentual de militares que realizaram inspeção de saúde periódica obrigatória.\",\"formula\":\"TSIS = (Militares Inspecionados / Efetivo Ativo) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"Diretoria de Saúde\",\"responsavel\":\"Diretoria de Saúde\",\"meta\":\"≥ 90%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 90% 🟡 75% a 89% 🔴 \\\\<75%\"},{\"codigo\":\"IE-10.03\",\"nome\":\"AFASTAMENTOS POR MOTIVO DE SAÚDE\",\"sigla\":\"TAMS\",\"objetivo\":\"OE.10 - Promover a saúde e aptidão física\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Percentual do efetivo afastado do serviço por licença médica no período.\",\"formula\":\"TAMS = (Militares Afastados / Efetivo Ativo) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Mensal\",\"fonte\":\"Diretoria de Saúde / BMRH\",\"responsavel\":\"Diretoria de Saúde\",\"meta\":\"\\\\< 10%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 \\\\< 10% 🟡 10% a 15% 🔴 \\\\> 15%\"},{\"codigo\":\"IE-11.01\",\"nome\":\"PRAZO MÉDIO DE PROCESSOS DISCIPLINARES\",\"sigla\":\"PMPD\",\"objetivo\":\"OE.11 - Reestruturar correição e ouvidoria\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Tempo médio decorrido entre a instauração e a conclusão de processos administrativos disciplinares.\",\"formula\":\"PMPD = Σ(Data Conclusão - Data Instauração) / Nº de Processos\",\"unidade\":\"Dias\",\"frequencia\":\"Semestral\",\"fonte\":\"Corregedoria Geral\",\"responsavel\":\"Corregedoria Geral\",\"meta\":\"≤ 90 dias\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Menor, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≤ 90 dias 🟡 91 a 120 dias 🔴 \\\\> 120 dias\"},{\"codigo\":\"IE-11.02\",\"nome\":\"DEMANDAS DE OUVIDORIA ATENDIDAS\",\"sigla\":\"TADO\",\"objetivo\":\"OE.11 - Reestruturar correição e ouvidoria\",\"tema\":\"Tema 4 - Pessoas\",\"definicao\":\"Percentual de demandas de ouvidoria respondidas dentro do prazo legal.\",\"formula\":\"TADO = (Demandas Respondidas no Prazo / Total de Demandas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Mensal\",\"fonte\":\"Ouvidoria / Sistema de Ouvidoria\",\"responsavel\":\"Ouvidoria\",\"meta\":\"≥ 95%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 95% 🟡 85% a 94% 🔴 \\\\< 85%\"},{\"codigo\":\"IE-12.01\",\"nome\":\"EXECUÇÃO DO PACC\",\"sigla\":\"TEPACC\",\"objetivo\":\"OE.12 - Desenvolver a Educação Corporativa\",\"tema\":\"Tema 5 - Conhecimento\",\"definicao\":\"Percentual de cursos realizados em relação ao previsto no PACC do exercício.\",\"formula\":\"TEPACC = (Cursos Realizados / Cursos Planejados) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"Diretoria de Ensino\",\"responsavel\":\"Diretoria de Ensino\",\"meta\":\"≥ 80%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 80% 🟡 60% a 79% 🔴 \\\\< 60%\"},{\"codigo\":\"IE-12.02\",\"nome\":\"TAXA DE CAPACITAÇÃO CONTINUADA\",\"sigla\":\"TCCE\",\"objetivo\":\"OE.12 - Desenvolver a Educação Corporativa\",\"tema\":\"Tema 5 - Conhecimento\",\"definicao\":\"Percentual de militares que participaram de pelo menos uma ação de capacitação no período.\",\"formula\":\"TCCE = (Militares Capacitados / Efetivo Ativo) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"Diretoria de Ensino\",\"responsavel\":\"Diretoria de Ensino\",\"meta\":\"≥ 80%\",\"linha_base\":\"76,81% (S1 2024\\\\)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 60% 🟡 40% a 59% 🔴 \\\\< 40%\"},{\"codigo\":\"IE-12.03\",\"nome\":\"ADESÃO A CURSOS\",\"sigla\":\"TAOC\",\"objetivo\":\"OE.12 - Desenvolver a Educação Corporativa\",\"tema\":\"Tema 5 - Conhecimento\",\"definicao\":\"Percentual de vagas preenchidas em relação às vagas ofertadas nos cursos do CBMAL.\",\"formula\":\"TAOC = (Vagas Preenchidas / Vagas Ofertadas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Semestral\",\"fonte\":\"Diretoria de Ensino\",\"responsavel\":\"Diretoria de Ensino\",\"meta\":\"≥ 90%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 90% 🟡 70% a 89% 🔴 \\\\< 70%\"},{\"codigo\":\"IE-13.01\",\"nome\":\"PRODUÇÃO TÉCNICO-CIENTÍFICA\",\"sigla\":\"NPTC\",\"objetivo\":\"OE.13 - Fortalecer Gestão do Conhecimento\",\"tema\":\"Tema 5 - Conhecimento\",\"definicao\":\"Quantidade de artigos, manuais, POPs e trabalhos acadêmicos produzidos por militares do CBMAL.\",\"formula\":\"NPTC = Nº de Produções Publicadas/Registradas\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"Diretoria de Ensino / CTEPs\",\"responsavel\":\"Diretoria de Ensino\",\"meta\":\"≥ 15 produções\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 15 🟡 8 a 14 🔴 \\\\< 8\"},{\"codigo\":\"IE-13.02\",\"nome\":\"CONVÊNIOS ACADÊMICOS\",\"sigla\":\"NCAA\",\"objetivo\":\"OE.13 - Fortalecer Gestão do Conhecimento\",\"tema\":\"Tema 5 - Conhecimento\",\"definicao\":\"Quantidade de convênios ou parcerias formalizados com instituições de ensino superior e pesquisa.\",\"formula\":\"NCAA = Nº de Convênios Ativos\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"Diretoria de Ensino / APO\",\"responsavel\":\"Diretoria de Ensino\",\"meta\":\"≥ 2 convênios\",\"linha_base\":\"2 (UFAL, UNEAL)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 2 🟡 1 🔴 \\\\< 0\"},{\"codigo\":\"IE-13.03\",\"nome\":\"LIÇÕES APRENDIDAS REGISTRADAS\",\"sigla\":\"NLAR\",\"objetivo\":\"OE.13 - Fortalecer Gestão do Conhecimento\",\"tema\":\"Tema 5 - Conhecimento\",\"definicao\":\"Quantidade de registros formais de lições aprendidas em operações ou projetos.\",\"formula\":\"NLAR = Nº de Registros no Período\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Semestral\",\"fonte\":\"APO / Escritório de Projetos\",\"responsavel\":\"APO\",\"meta\":\"≥ 10 registros\",\"linha_base\":\"0 (não havia sistemática)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 10 🟡 5 a 9 🔴 \\\\< 5\"},{\"codigo\":\"IE-14.01\",\"nome\":\"SISTEMAS DESENVOLVIDOS/INTEGRADOS\",\"sigla\":\"NSDI\",\"objetivo\":\"OE.14 - Elevar a maturidade digital\",\"tema\":\"Tema 6 - Transformação Digital\",\"definicao\":\"Quantidade de novos sistemas implementados ou integrações entre sistemas existentes realizadas no período.\",\"formula\":\"NSDI = Nº de Sistemas/Integrações Entregues\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"DTI\",\"responsavel\":\"DTI\",\"meta\":\"≥ 2 entregas\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 2 🟡 \\\\= 1 🔴\\\\= 0\"},{\"codigo\":\"IE-14.02\",\"nome\":\"DISPONIBILIDADE DE PORTAIS\",\"sigla\":\"TDPW\",\"objetivo\":\"OE.14 - Elevar a maturidade digital\",\"tema\":\"Tema 6 - Transformação Digital\",\"definicao\":\"Percentual de tempo em que os portais institucionais (Site, Intranet, SAPS) estiveram disponíveis sem interrupção.\",\"formula\":\"TDPW = (Tempo Disponível / Tempo Total) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Mensal\",\"fonte\":\"DTI\",\"responsavel\":\"DTI\",\"meta\":\"≥ 95%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 95% 🟡 90% a 94.9% 🔴 < 90%\"},{\"codigo\":\"IE-14.03\",\"nome\":\"SOLUÇÕES DE BI IMPLEMENTADAS\",\"sigla\":\"NSBI\",\"objetivo\":\"OE.14 - Elevar a maturidade digital\",\"tema\":\"Tema 6 - Transformação Digital\",\"definicao\":\"Quantidade de dashboards ou painéis de BI disponibilizados para apoio à decisão.\",\"formula\":\"NSBI = Nº de Dashboards/Painéis Entregues\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"Seção de TIC / APO\",\"responsavel\":\"APO\",\"meta\":\"≥ 3 painéis\",\"linha_base\":\"1 (Painel de Monitoramento)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 3 🟡 2 🔴 \\\\< 2\"},{\"codigo\":\"IE-15.01\",\"nome\":\"DISPONIBILIDADE DA FROTA OPERACIONAL\",\"sigla\":\"TDFO\",\"objetivo\":\"OE.15 - Garantir infraestrutura adequada\",\"tema\":\"Tema 7 - Infraestrutura\",\"definicao\":\"Percentual de viaturas operacionais em condições de uso (excluídas as em manutenção preventiva/corretiva).\",\"formula\":\"TDFO = (Viaturas Disponíveis / Total de Viaturas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Mensal\",\"fonte\":\"Diretoria de Apoio Logístico\",\"responsavel\":\"DAL\",\"meta\":\"≥ 85%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 85% 🟡 70% a 84%🔴 \\\\< 70%\"},{\"codigo\":\"IE-15.02\",\"nome\":\"EXECUÇÃO DO PLANO DE OBRAS\",\"sigla\":\"TEPO\",\"objetivo\":\"OE.15 - Garantir infraestrutura adequada\",\"tema\":\"Tema 7 - Infraestrutura\",\"definicao\":\"Percentual de obras de construção/reforma concluídas em relação ao planejado.\",\"formula\":\"TEPO = (Obras Concluídas / Obras Planejadas) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"DAL / COMP\",\"responsavel\":\"DAL\",\"meta\":\"≥ 70%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 70% 🟡 50% a 69% 🔴 \\\\< 50%\"},{\"codigo\":\"IE-15.03\",\"nome\":\"APARELHAMENTO FINALÍSTICO\",\"sigla\":\"TAAF\",\"objetivo\":\"OE.15 - Garantir infraestrutura adequada\",\"tema\":\"Tema 7 - Infraestrutura\",\"definicao\":\"Percentual de equipamentos operacionais críticos (EPIs, equipamentos de resgate, combate a incêndio) em conformidade com padrões mínimos.\",\"formula\":\"TAAF = (Equipamentos Conformes / Total de Equipamentos) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"DAL / Almoxarifado Central e OBMs\",\"responsavel\":\"DAL\",\"meta\":\"≥ 80%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 80% 🟡 60% a 79%🔴 \\\\< 60%\"},{\"codigo\":\"IT-15.04\",\"nome\":\"PROGRESSO DO PLANO DIRETOR DE LOGÍSTICA\",\"sigla\":\"\",\"objetivo\":\"OE.15 - Garantir infraestrutura adequada\",\"tema\":\"\",\"definicao\":\"Monitoramento das fases de diagnóstico, redação e aprovação do Plano Diretor de Logística.\",\"formula\":\"% de avanço do cronograma do projeto.\",\"unidade\":\"\",\"frequencia\":\"\",\"fonte\":\"\",\"responsavel\":\"DAL\",\"meta\":\"Publicação do PDLP até DEZ/2026\",\"linha_base\":\"\",\"polaridade\":\"\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\"},{\"codigo\":\"IE-16.01\",\"nome\":\"ADIMPLÊNCIA DA TAXA DE BOMBEIROS\",\"sigla\":\"TATB\",\"objetivo\":\"OE.16 - Aumentar arrecadação\",\"tema\":\"Tema 8 - Arrecadação, Orçamento e Finanças\",\"definicao\":\"Percentual de contribuintes da Taxa de Bombeiros que efetuaram pagamento dentro do prazo.\",\"formula\":\"TATB = (Pagamentos Recebidos / Lançamentos Emitidos) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Anual\",\"fonte\":\"Seção de Arrecadação\",\"responsavel\":\"Seção de Arrecadação\",\"meta\":\"≥ 75%\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 75% 🟡 60% a 74% 🔴 \\\\< 60%\"},{\"codigo\":\"IE-16.02\",\"nome\":\"RECURSOS DE EMENDAS CAPTADOS\",\"sigla\":\"VREP\",\"objetivo\":\"OE.16 - Aumentar arrecadação\",\"tema\":\"Tema 8 - Arrecadação, Orçamento e Finanças\",\"definicao\":\"Valor total de recursos captados por meio de emendas parlamentares no exercício.\",\"formula\":\"VREP = Σ Valores de Emendas Recebidas\",\"unidade\":\"Reais (R$)\",\"frequencia\":\"Anual\",\"fonte\":\"APO / Assessoria Parlamentar\",\"responsavel\":\"APO\",\"meta\":\"≥ R$ 5.000.000,00\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ R$ 5 mi 🟡 R$ 2 a 5 mi 🔴 \\\\< R$ 2 mi\"},{\"codigo\":\"IE-16.03\",\"nome\":\"NOVOS MUNICÍPIOS TRIBUTADOS\",\"sigla\":\"NMCT\",\"objetivo\":\"OE.16 - Aumentar arrecadação\",\"tema\":\"Tema 8 - Arrecadação, Orçamento e Finanças\",\"definicao\":\"Quantidade de municípios alagoanos incluídos na base de cobrança da Taxa de Bombeiros no período.\",\"formula\":\"NMCT = Nº de Novos Municípios Incluídos\",\"unidade\":\"Número absoluto\",\"frequencia\":\"Anual\",\"fonte\":\"Seção de Arrecadação\",\"responsavel\":\"Seção de Arrecadação\",\"meta\":\"≥ 2 novos municípios\",\"linha_base\":\"A levantar\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 2 🟡 \\\\= 1 🔴 \\\\= 0\"},{\"codigo\":\"IE-17.01\",\"nome\":\"EXECUÇÃO FINANCEIRA-ORÇAMENTÁRIA\",\"sigla\":\"TEFO\",\"objetivo\":\"OE.17 - Aprimorar execução orçamentária\",\"tema\":\"Tema 8 - Arrecadação, Orçamento e Finanças\",\"definicao\":\"Percentual do orçamento aprovado efetivamente executado (empenhado e liquidado) no exercício.\",\"formula\":\"TEFO = (Despesas Executadas / Orçamento Aprovado) × 100\",\"unidade\":\"Percentual (%)\",\"frequencia\":\"Trimestral\",\"fonte\":\"SEFAZ / Sistema Orçamentário\",\"responsavel\":\"Seção de Orçamento e Finanças\",\"meta\":\"≥ 90%\",\"linha_base\":\"86,35% (SIAFE 2024\\\\)\",\"polaridade\":\"Quanto Maior, Melhor\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 ≥ 90% 🟡 80% a 89% 🔴 \\\\< 80%\"},{\"codigo\":\"IE-17.02\",\"nome\":\"INSCRIÇÃO EM RESTOS A PAGAR\",\"sigla\":\"\\\\[Sigla do indicador\\\\]\",\"objetivo\":\"\\\\[Vincular a um dos 17 Objetivos Estratégicos\\\\]\",\"tema\":\"\\\\[Vincular a um dos 8 Temas Estratégicos\\\\]\",\"definicao\":\"\\\\[Explicação detalhada sobre o que o indicador mede\\\\]\",\"formula\":\"\\\\[Expressão matemática para obtenção do resultado\\\\]\",\"unidade\":\"\\\\[Percentual (%), Número absoluto, Reais (R$), Dias, etc.\\\\]\",\"frequencia\":\"\\\\[Mensal, Trimestral, Semestral ou Anual\\\\]\",\"fonte\":\"\\\\[Sistema, planilha ou documento de onde o dado será extraído\\\\]\",\"responsavel\":\"\\\\[Setor ou Seção responsável por coletar e reportar o dado\\\\]\",\"meta\":\"\\\\[Valor numérico ou percentual definido como objetivo para 2025\\\\]\",\"linha_base\":\"\\\\[Valor registrado no ano de 2024 ou \\\"A levantar\\\"\\\\]\",\"polaridade\":\"\\\\[Quanto Maior Melhor / Quanto Menor Melhor\\\\]\",\"farol_verde\":\"\",\"farol_amarelo\":\"\",\"farol_vermelho\":\"\",\"farol_completo\":\"🟢 \\\\[Critério Verde\\\\] 🟡 \\\\[Critério Amarelo\\\\] 🔴 \\\\[Critério Vermelho\\\\]\"}]"));}),
"[project]/dashboard-cbmal/src/lib/indicators-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDashboardData",
    ()=>getDashboardData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$data$2f$indicadores$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/data/indicadores.json (json)");
;
// Helper to extract sector acronym from 'responsavel'
function getSectorFromResponsavel(responsavel) {
    if (!responsavel) return 'CBMAL';
    // Common acronyms mapping
    const map = {
        'Diretoria de Atividades Técnicas': 'DAT',
        'Comando Operacional': 'COB',
        'Diretoria de Apoio Logístico': 'DAL',
        'Diretoria de Pessoal': 'DP',
        'Diretoria de Saúde': 'DS',
        'Diretoria de Ensino': 'DE',
        'Assessoria de Planejamento': 'APO',
        'Secretaria Geral': 'SG',
        'Corregedoria': 'CORREG',
        'Ouvidoria': 'OUV',
        'Banda de Música': 'BM',
        'ASCOM': 'ASCOM',
        'CTFID': 'CTFID',
        'DTI': 'DTI',
        'BSA': 'BSA'
    };
    // Try to find exact match or substring
    for (const [key, val] of Object.entries(map)){
        if (responsavel.includes(key) || responsavel.includes(val)) return val;
    }
    // Fallback: take the first word if it looks like an acronym (uppercase), or just the first part
    const firstWord = responsavel.split(' ')[0].replace(/[^a-zA-Z]/g, '');
    return firstWord.length <= 6 ? firstWord.toUpperCase() : 'OUTROS';
}
function evaluateRule(value, rule) {
    const cleanRule = rule.trim().toLowerCase();
    // 1. Caso de faixa: "10 a 20" ou "10% a 20%"
    if (cleanRule.includes(' a ')) {
        const numbers = cleanRule.match(/(\d+(?:[.,]\d+)?)/g);
        if (numbers && numbers.length >= 2) {
            const min = parseFloat(numbers[0].replace(',', '.'));
            const max = parseFloat(numbers[1].replace(',', '.'));
            return value >= min && value <= max;
        }
    }
    // 2. Extrair o número alvo da regra
    const numMatch = cleanRule.match(/(\d+(?:[.,]\d+)?)/);
    if (!numMatch) return false;
    const target = parseFloat(numMatch[0].replace(',', '.'));
    // 3. Avaliar baseados nos operadores comuns do catálogo
    if (cleanRule.includes('≤') || cleanRule.includes('<=') || cleanRule.includes('até')) {
        return value <= target;
    }
    if (cleanRule.includes('≥') || cleanRule.includes('>=') || cleanRule.includes('mínimo')) {
        return value >= target;
    }
    if (cleanRule.includes('<') || cleanRule.includes('menor')) {
        return value < target;
    }
    if (cleanRule.includes('>') || cleanRule.includes('maior')) {
        return value > target;
    }
    // Fallback para igualdade simples
    return value === target;
}
function calculateStatus(value, farolString) {
    if (value === "---" || value === "" || value === undefined) return "neutro";
    let numValue;
    if (typeof value === 'string') {
        // Limpar strings como "15 min" ou "80%"
        const cleaned = value.replace(/[^\d,.-]/g, '').replace(',', '.');
        numValue = parseFloat(cleaned);
    } else {
        numValue = value;
    }
    if (isNaN(numValue)) return "neutro";
    if (!farolString) return "neutro";
    // Divide a string do farol pelos emojis 🟢 🟡 🔴
    const parts = farolString.split(/(🟢|🟡|🔴)/).filter((p)=>p.trim().length > 0);
    let lastEmoji = "";
    for (const part of parts){
        if ([
            '🟢',
            '🟡',
            '🔴'
        ].includes(part)) {
            lastEmoji = part;
            continue;
        }
        if (lastEmoji && evaluateRule(numValue, part)) {
            if (lastEmoji === '🟢') return 'verde';
            if (lastEmoji === '🟡') return 'amarelo';
            if (lastEmoji === '🔴') return 'vermelho';
        }
    }
    return "neutro";
}
async function getDashboardData() {
    const rawData = __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$data$2f$indicadores$2e$json__$28$json$29$__["default"];
    // 1. Carregar dados básicos do JSON
    const indicators = rawData.map((item)=>{
        const status = 'neutro'; // Padrão antes de cruzar com dados reais
        const oeMatch = item.objetivo.match(/(OE\.\d+)/);
        const oeCode = oeMatch ? oeMatch[1] : item.objetivo;
        return {
            ...item,
            id: item.codigo,
            currentValue: "---",
            status: status,
            trend: [
                50,
                50,
                50
            ],
            trendDirection: 'neutral',
            sector: getSectorFromResponsavel(item.responsavel),
            objetivo: oeCode
        };
    });
    // 2. Tentar buscar dados reais da API (opcional)
    try {
        const response = await fetch('/api/indicators/data');
        if (response.ok) {
            const realData = await response.json();
            // Cruzar dados
            return indicators.map((ind)=>{
                // Encontrar o lançamento mais recente para este código que tenha valor
                const entries = realData.filter((r)=>r['CÓDIGO'] === ind.codigo);
                if (entries.length > 0) {
                    // Ordenar por período descendente (mais recente primeiro)
                    const latestEntry = entries.sort((a, b)=>(b['PERÍODO (YYYY-MM)'] || '').localeCompare(a['PERÍODO (YYYY-MM)'] || ''))[0];
                    const valueRaw = latestEntry['VALOR_REALIZADO'];
                    const hasValue = valueRaw !== undefined && valueRaw !== null && valueRaw !== '';
                    // Lógica de status automática baseada no catálogo
                    const status = calculateStatus(valueRaw, ind.farol_completo || '');
                    return {
                        ...ind,
                        currentValue: hasValue ? valueRaw : "---",
                        status: status,
                        trendDirection: status === 'verde' ? 'up' : status === 'vermelho' ? 'down' : 'neutral'
                    };
                }
                return ind;
            });
        }
    } catch (e) {
        console.warn("API de dados não disponível, usando apenas metadados.");
    }
    return indicators;
}
}),
"[project]/dashboard-cbmal/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/dashboard-cbmal/src/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/dashboard-cbmal/src/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
            ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
            link: "text-primary underline-offset-4 [a&]:hover:underline"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/components/ui/badge.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IndicatorDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$indicators$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/lib/indicators-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/recharts/es6/chart/AreaChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dashboard-cbmal/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function IndicatorDetailPage() {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [indicator, setIndicator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [allData, setAllData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadData() {
            setLoading(true);
            const indicators = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$lib$2f$indicators$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDashboardData"])();
            const found = indicators.find((ind)=>ind.id === id);
            if (found) {
                setIndicator(found);
                // Simular dados históricos se não houver muitos no Sheets ainda
                // Para uma visualização rica imediata
                const mockHistory = [
                    {
                        month: "Jan",
                        value: parseFloat(found.currentValue) || 45
                    },
                    {
                        month: "Fev",
                        value: 52
                    },
                    {
                        month: "Mar",
                        value: 48
                    },
                    {
                        month: "Abr",
                        value: 61
                    },
                    {
                        month: "Mai",
                        value: found.currentValue
                    }
                ];
                setAllData(mockHistory);
            }
            setLoading(false);
        }
        loadData();
    }, [
        id
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen items-center justify-center",
        children: "Carregando detalhes..."
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
        lineNumber: 63,
        columnNumber: 25
    }, this);
    if (!indicator) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen items-center justify-center text-red-500",
        children: "Indicador não encontrado."
    }, void 0, false, {
        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
        lineNumber: 64,
        columnNumber: 28
    }, this);
    const statusColors = {
        verde: "bg-emerald-500",
        amarelo: "bg-amber-500",
        vermelho: "bg-rose-500",
        neutro: "bg-slate-400"
    };
    const statusLabels = {
        verde: "Conforme",
        amarelo: "Atenção",
        vermelho: "Crítico",
        neutro: "Sem Dados"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 dark:bg-zinc-950 p-4 md:p-8 font-['Exo_2',sans-serif]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.back(),
                        className: "flex items-center text-slate-500 hover:text-red-600 transition-colors mb-4 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, this),
                            "Voltar para o Dashboard"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-end justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "outline",
                                                className: "text-xs uppercase tracking-wider font-bold border-red-200 text-red-700 bg-red-50",
                                                children: indicator.id
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `h-2.5 w-2.5 rounded-full ${statusColors[indicator.status]}`
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-slate-500",
                                                children: statusLabels[indicator.status]
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-extrabold text-slate-900 dark:text-white leading-tight",
                                        children: indicator.nome
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-zinc-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 uppercase font-bold tracking-widest",
                                                children: "Valor Atual"
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-black text-red-600",
                                                children: indicator.currentValue
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 w-px bg-slate-200"
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 uppercase font-bold tracking-widest",
                                                children: "Meta"
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-bold text-slate-700 dark:text-slate-300",
                                                children: indicator.meta
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "shadow-xl border-none overflow-hidden bg-white dark:bg-zinc-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "border-b border-slate-100 dark:border-zinc-800 pb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-lg flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                            className: "w-5 h-5 text-red-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 37
                                                        }, this),
                                                        "Evolução do Desempenho"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "secondary",
                                                            children: "Mensal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            children: "2025"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "pt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-[400px] w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: "100%",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                                                    data: allData,
                                                    margin: {
                                                        top: 10,
                                                        right: 10,
                                                        left: 0,
                                                        bottom: 0
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                id: "colorValue",
                                                                x1: "0",
                                                                y1: "0",
                                                                x2: "0",
                                                                y2: "1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "5%",
                                                                        stopColor: "#ef4444",
                                                                        stopOpacity: 0.1
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "95%",
                                                                        stopColor: "#ef4444",
                                                                        stopOpacity: 0
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                            strokeDasharray: "3 3",
                                                            vertical: false,
                                                            stroke: "#E2E8F0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                                            dataKey: "month",
                                                            axisLine: false,
                                                            tickLine: false,
                                                            tick: {
                                                                fill: '#64748B',
                                                                fontSize: 12
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                                            axisLine: false,
                                                            tickLine: false,
                                                            tick: {
                                                                fill: '#64748B',
                                                                fontSize: 12
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                            contentStyle: {
                                                                borderRadius: '12px',
                                                                border: 'none',
                                                                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                                                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                                                backdropFilter: 'blur(8px)'
                                                            },
                                                            animationDuration: 200,
                                                            animationEasing: "ease-out"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
                                                            type: "monotone",
                                                            dataKey: "value",
                                                            stroke: "#ef4444",
                                                            strokeWidth: 3,
                                                            fillOpacity: 1,
                                                            fill: "url(#colorValue)",
                                                            animationDuration: 1200,
                                                            animationEasing: "ease-in-out",
                                                            isAnimationActive: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-none shadow-md bg-white dark:bg-zinc-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                className: "pb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-bold uppercase text-slate-500 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 37
                                                        }, this),
                                                        "Definição e Cálculo"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold text-red-600 uppercase mb-1",
                                                                children: "Definição"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-slate-700 dark:text-slate-300 leading-relaxed",
                                                                children: indicator.definicao
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold text-red-600 uppercase mb-1",
                                                                children: "Fórmula"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "text-xs bg-slate-100 dark:bg-zinc-800 p-2 rounded block text-slate-900 dark:text-slate-100 font-mono",
                                                                children: indicator.formula
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 202,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-none shadow-md bg-white dark:bg-zinc-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                className: "pb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-bold uppercase text-slate-500 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 37
                                                        }, this),
                                                        "Metadados e Governança"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center py-2 border-b border-slate-100 dark:border-zinc-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold text-slate-500 uppercase",
                                                                children: "Responsável"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-slate-800 dark:text-slate-200",
                                                                children: indicator.responsavel
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center py-2 border-b border-slate-100 dark:border-zinc-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold text-slate-500 uppercase",
                                                                children: "Periodicidade"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-slate-800 dark:text-slate-200",
                                                                children: indicator.frequencia
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center py-2 border-b border-slate-100 dark:border-zinc-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold text-slate-500 uppercase",
                                                                children: "Fonte"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-slate-800 dark:text-slate-200",
                                                                children: indicator.fonte
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center py-2 border-b border-slate-100 dark:border-zinc-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold text-slate-500 uppercase",
                                                                children: "Linha de Base"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-slate-800 dark:text-slate-200",
                                                                children: indicator.linha_base
                                                            }, void 0, false, {
                                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                lineNumber: 194,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-none shadow-xl bg-gradient-to-br from-red-600 to-red-800 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-lg flex items-center gap-2 text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 33
                                                }, this),
                                                "Alinhamento Estratégico"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-bold text-red-200 uppercase mb-2",
                                                        children: "Objetivo Estratégico"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-white text-lg",
                                                        children: indicator.objetivo
                                                    }, void 0, false, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-bold text-red-200 uppercase mb-2",
                                                        children: "Farol (Metas de Faixa)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white/10 rounded-xl p-4 border border-white/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm leading-relaxed whitespace-pre-line leading-7",
                                                            children: indicator.farol_completo
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/mapa-estrategico",
                                                    className: "flex items-center justify-between w-full bg-white text-red-700 p-3 rounded-lg font-bold text-sm hover:bg-red-50 transition-colors",
                                                    children: [
                                                        "Ver Mapa Estratégico",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                                lineNumber: 267,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                lineNumber: 247,
                                columnNumber: 21
                            }, this),
                            indicator.status === 'neutro' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-2 border-dashed border-slate-300 dark:border-zinc-700 bg-transparent",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-100 dark:bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-500 italic font-serif",
                                            children: "?"
                                        }, void 0, false, {
                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                            lineNumber: 283,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-slate-700 dark:text-slate-300 mb-2",
                                            children: "Aguardando Lançamento"
                                        }, void 0, false, {
                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 mb-4",
                                            children: "Este indicador ainda não recebeu dados reais para o período de 2025-01 na planilha."
                                        }, void 0, false, {
                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dashboard$2d$cbmal$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://docs.google.com/spreadsheets/d/108kfbiwwdpeV2rlZ2UqvP33F-GwGAiBkQV-hyxGBlh0/edit",
                                            target: "_blank",
                                            className: "text-xs font-bold text-red-600 hover:underline",
                                            children: "Abrir Planilha de Oficiais"
                                        }, void 0, false, {
                                            fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                            lineNumber: 286,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                    lineNumber: 282,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                                lineNumber: 281,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                        lineNumber: 246,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
                lineNumber: 120,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dashboard-cbmal/src/app/indicador/[id]/page.tsx",
        lineNumber: 81,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e2c1ae56._.js.map