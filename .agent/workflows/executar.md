---
description: Comando mestre de execução - produz documentos, monitora SEI e realiza pesquisas estratégicas.
---

// turbo-all

# 🛠️ COMANDO: /executar

Comando unificado para produção técnica e monitoramento externo.

## 🎯 Modos de Operação

### Modo 1: PAP (Procedimento Operacional Padrão)

Use: `/executar pap [Título]`

1. **Briefing Inicial**:
    * Coletar dados básicos (Título, Objetivo, Passos).

2. **Consulta de Templates**:
    * Verificar em `99_Base_de_Conhecimento` se existem templates de PAP.

3. **Redação Técnica (Estilo CBMAL)**:
    * Usar verbos no imperativo ("Faça", "Verifique").
    * Estrutura:
        1. Finalidade
        2. Referências
        3. Descrição do Procedimento (Mermaid para fluxogramas)
        4. Anexos/Formulários

4. **Conversão SEI**:
    * Executar `python scripts/convert_to_sei.py [Arquivo]` para HTML pronto para SEI.

### Modo 2: SEI (Monitoramento de Processos)

Use: `/executar sei`

1. **Verificação de Caixa de Entrada**:
    * Executar `python scripts/sei_monitor.py`.
    * Carregar sessão salva e navegar até caixa de entrada.
    * Capturar lista de processos e comparar com verificação anterior.

2. **Relatório**:
    * Listar processos NOVOS detectados.
    * Identificar processos críticos (DTI, COB, DAT).

**Comandos Disponíveis**:

* `python scripts/sei_monitor.py` - Verifica novos processos
* `python scripts/sei_monitor.py --login` - Faz login e salva sessão
* `python scripts/sei_monitor.py --screenshot` - Screenshot da caixa

### Modo 3: Pesquisa (Benchmarking Estratégico)

Use: `/executar pesquisa [Tema]`

1. **Definir Escopo**:
    * Tema central (ex: "Planejamento Estratégico em Bombeiros", "IA na Segurança Pública").
    * Fontes prioritárias (TCU, Legislação AL, CBMs de referência: CBMDF, CBMSC, CBMESP).

2. **Coleta de Dados**:
    * Usar `search_web` para buscar notícias e artigos recentes.
    * Usar `read_url_content` para ler editais ou documentos técnicos.

3. **Análise e Síntese**:
    * Identificar oportunidades para o CBMAL.
    * Mapear riscos ou mudanças regulatórias.
    * Comparar com Objetivos Estratégicos (OEs).

4. **Gerar Relatório**:
    * **Diretório**: `99_Base_de_Conhecimento/07_Pesquisas_e_Benchmarking`
    * **Nome**: `Relatorio_Pesquisa_{{date}}_{{tema}}.md`
    * **Estrutura**: Contexto, Principais Achados, Impacto no CBMAL, Recomendações.

### Modo 4: Web (Automação de Navegador)

Use: `/executar web [Tarefa]`

1. **Definir Objetivo**:
    * URL a navegar
    * Ação (preencher formulário, coletar dados, screenshot)
    * Necessita autenticação?

2. **Navegação Inicial**:

    ```bash
    agent-browser open <url>
    agent-browser snapshot -i
    ```

3. **Interação**:
    * **Preencher campos**: `agent-browser fill @eX "valor"`
    * **Clicar botões**: `agent-browser click @eX`
    * **Aguardar**: `agent-browser wait --load networkidle`

4. **Coleta de Dados**:

    ```bash
    agent-browser get text @eX        # Extrair texto
    agent-browser screenshot out.png  # Capturar tela
    agent-browser pdf out.pdf         # Exportar PDF
    ```

5. **Encerramento**:

    ```bash
    agent-browser close
    ```

**Casos de Uso Comuns**:

* **Screenshot**: `agent-browser open URL && agent-browser screenshot --full pagina.png`
* **Formulário**: Identificar refs com `snapshot -i`, preencher com `fill`, enviar com `click`
* **Extração**: `agent-browser get text ".classe" > dados.txt`

### Modo 5: DOCX (Conversão Oficial)

Use: `/executar docx` para o arquivo atual ou `/executar docx [caminho]`

1. **Identificar Alvo**:
    * Se nenhum arquivo for especificado, usar o documento ativo em que o usuário está trabalhando.
    * Verificar a existência do arquivo `.md`.

2. **Conversão Inteligente**:
    * Executar `python scripts/doc_converter.py docx "[caminho_do_arquivo.md]"`.
    * O script aplicará automaticamente o **Brasão CBMAL**, margens normatizadas (Portaria 18/2024), fonte Arial 12 e numeração de páginas.

3. **Entrega**:
    * Confirmar o local do arquivo `.docx` gerado.
    * Lembrar o usuário que este arquivo está pronto para despacho via Google Docs ou SEI com preservação total de formatação.

## 🏁 Resultado Final

* Minuta de documento pronta para SEI.
* Relatório de monitoramento ou pesquisa consolidado.
* Arquivo `.docx` formatado no padrão oficial CBMAL.
* Dados estruturados ou screenshots coletados via web.
