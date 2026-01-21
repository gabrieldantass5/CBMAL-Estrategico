# 🏷️ Convenções de Nomenclatura e Estrutura

Regras para manter a integridade visual e funcional do ecossistema CBMAL.

## 1. Nomes de Arquivos e Pastas
- **Padrão Kebab-Case**: Use sempre letras minúsculas separadas por hífen (ex: `redacao-oficial`, `processo-sei`).
- **Evite Underscores**: O uso de `_` deve ser restrito a arquivos de sistema ou pastas de "backup" (ex: `_arquivo`).
- **Sem Espaços**: Nunca use espaços em nomes de arquivos que serão lidos pelo agente.

## 2. Organização de Skills
- Cada skill deve ter seu próprio diretório em `.agent/skills/`.
- O arquivo principal deve sempre se chamar `SKILL.md`.

## 3. Organização de Workflows
- Salvar em `.agent/workflows/` com extensão `.md`.
- Incluir frontmatter `description` no topo.
