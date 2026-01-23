# 📦 Protocolo de Versionamento GitHub

Regras para sincronização do repositório remoto.

## 1. Cadência de Commits (Push)
- **Frequência**: Apenas 2x por semana.
- **Dias Úteis**: 
  - **Quartas-feiras**: Sincronização de meio de semana.
  - **Domingos**: Sincronização de fechamento de ciclo.
- **Exceção**: Apenas em caso de erro crítico no sistema que impeça a operação do agente, após autorização explícita do usuário.

## 2. Mensagens de Commit
- Seguir o padrão de Mensagens Convencionais:
  - `feat:` para novas funcionalidades.
  - `fix:` para correções.
  - `docs:` para atualizações de documentação e handoffs.
  - `refactor:` para limpeza e otimização de código/arquivos.
  - `learning:` para novas skills aprendidas (/aprender).

## 3. Segurança e Performance
- Verifique sempre o `.gitignore` antes de commits em massa.
- Proibido subir arquivos binários > 100MB.
