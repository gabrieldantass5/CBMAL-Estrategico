# Skill: GitHub Expert (CBMAL)

Habilidade para gerenciar o ciclo de vida do repositório institucional, garantindo integridade e estética premium.

## 1. Gestão de Arquivos e Deploy
- **Limite de Tamanho**: Nunca permitir o push de arquivos >100MB (ex: `.cdr`, `.psd`).
- **Git Hygiene**: Se um arquivo grande for bloqueado, usar `git rm --cached` e atualizar `.gitignore` antes de repetir o push.
- **Sincronização**: Padrão de commit `[tipo]: [descrição]` (ex: `feat:`, `fix:`, `docs:`).

## 2. Padrões Visuais (README)
- **Banners**: Priorizar proporção 728x90 (Leaderboard).
- **Alinhamento**: Sempre centralizar banners usando:
  ```html
  <p align="center"><img src="path" width="100%"></p>
  ```
- **Assets**: Guardar todas as imagens em `.agent/assets/images/`.

## 3. Comandos Úteis
- **Update Rápido**: `git add .`, `git commit -m "update"`, `git push origin main`.
- **Force Reset**: Use apenas em casos de reconstrução de histórico após remoção de arquivos binários pesados.
