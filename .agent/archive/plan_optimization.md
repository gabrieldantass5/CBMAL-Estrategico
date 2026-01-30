# 📋 Plano: Otimização de Token Efficiency (Skills CBMAL)

## 🏗️ Arquitetura

Este projeto atua transversalmente sobre a pasta `.agent/skills/`. As modificações serão feitas diretamente nos arquivos `SKILL.md` de cada subdiretório.

## 🗓️ Passo a Passo Pormenorizado

### Fase 1: Auditoria

- [ ] Listar todas as skills em `.agent/skills/`.
- [ ] Ler o YAML frontmatter de todas as skills.
- [ ] Mapear o "Gap de Informação" (onde a descrição atual falha em ser um gatilho claro).

### Fase 2: Redação e Proposta

- [ ] Criar uma tabela de "Antes vs Depois" para as 13 skills.
- [ ] Aplicar os critérios de 2026 (O quê, Quando, Capacidades, Restrições).
- [ ] **Validação STOP & THINK**: Apresentar a tabela para aprovação do Comandante.

### Fase 3: Implementação

- [ ] Atualizar os arquivos `SKILL.md` individualmente.
- [ ] Verificar se os nomes internos (`name`) também precisam de padronização (kebab-case).

### Fase 4: Encerramento

- [ ] Atualizar `ASSIMILATION_LOG.md` (via skill-creator-cbmal).
- [ ] Atualizar o `optimization_context.md`.

## ⚠️ Pontos de Risco

- **Regressão de Gatilho**: Se a nova descrição for muito restritiva, eu posso parar de carregar a skill quando ela for necessária.
- **Concorrência**: Mudar o nome (`name`) pode quebrar referências internas em Workflows se não houver cuidado.

---
**Comandante, o plano de arquitetura está aprovado? Posso iniciar a Auditoria?**
