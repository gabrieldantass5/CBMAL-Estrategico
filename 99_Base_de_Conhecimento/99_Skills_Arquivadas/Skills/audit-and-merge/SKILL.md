# Skill: Audit and Merge (Consolidação)

Habilidade para limpar, auditar e consolidar componentes do sistema sem perda de informação.

## 1. Protocolo de Auditoria
- **Listagem Total**: Usar `list_dir` e `find_by_name` para mapear redundâncias.
- **Análise Cruzada**: Abrir arquivos com nomes similares para verificar diferenças de conteúdo.
- **Identificação de "Uniques"**: Isolar seções que existem em um arquivo e não no outro.

## 2. Protocolo de Fusão (Merge)
1. Escolher a versão com o nome mais correto (Padrão Kebab-Case).
2. Usar `replace_file_content` para inserir as seções únicas no arquivo mestre.
3. Verificar integridade antes de deletar o arquivo redundante.

## 3. Arquivamento
- Arquivos obsoletos não devem ser deletados imediatamente; mova para `99_Base_de_Conhecimento/99_Skills_Arquivadas`.
