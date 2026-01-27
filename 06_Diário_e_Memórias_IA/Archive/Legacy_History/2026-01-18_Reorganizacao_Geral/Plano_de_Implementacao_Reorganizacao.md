# Plano de Implementação: Organização de Pastas de Configuração

---

## Diagnóstico

Foram analisadas 4 pastas ocultas:

| Pasta | Conteúdo | Status Atual |
|:---|:---|:---|
| **`.agent`** | `OBSIDIAN_RULES.md` + `workflows/missao-estrategica.md` | 🟡 Ativo mas mal localizado |
| **`.claude`** | `agents/planejamento-estrategico-cbmal.md` | 🔴 **DUPLICATA** (já unificado em `.gemini`) |
| **`.gemini`** | `GEMINI_CONDUCTOR_CBMAL.md` + `legacy/` | 🟢 **ATIVO E CORRETO** |
| **`.obsidian`** | Arquivos nativos de configuração do app | 🟢 **ESSENCIAL** (não tocar) |

---

## Recomendações

### ✅ Manter Como Está
**`.obsidian`**: Configuração nativa do Obsidian (plugins, workspace, temas). **Nunca arquivar ou mover.**

**`.gemini`**: Contém o prompt unificado ativo (`GEMINI_CONDUCTOR_CBMAL.md`) e a pasta `legacy/` com os arquivos antigos. **Estrutura perfeita.**

### 🗂️ Consolidar
**`.agent` → `.gemini`**:
*   **Mover** `OBSIDIAN_RULES.md` para `.gemini/` (regras de formatação são relevantes para o Gemini).
*   **Mover** `workflows/missao-estrategica.md` para `.gemini/workflows/` (criar subpasta).
*   **Arquivar** a pasta `.agent` vazia após a migração.

**Motivo:** Concentrar toda a configuração de IA em um único lugar (`.gemini`).

### 🗄️ Arquivar
**`.claude`**:
*   O arquivo `agents/planejamento-estrategico-cbmal.md` **já foi unificado** no novo `GEMINI_CONDUCTOR_CBMAL.md`.
*   **Ação:** Mover toda a pasta `.claude` para `99_Base_de_Conhecimento/08_Referencias_Arquivadas/AI_Legacy/`.

---

## Nova Estrutura Proposta

```
📂 .gemini/ (Configuração Ativa de IA)
├── GEMINI_CONDUCTOR_CBMAL.md (Prompt Unificado)
├── OBSIDIAN_RULES.md (Migrado de .agent)
├── workflows/
│   └── missao-estrategica.md (Migrado de .agent)
└── legacy/ (Arquivos antigos)

📂 .obsidian/ (Não mexer - Config nativa)

📂 99_Base_de_Conhecimento/08_Referencias_Arquivadas/AI_Legacy/
└── .claude/ (Arquivado)
```

---

## User Review Required
> [!IMPORTANT]
> Esta reorganização vai **simplificar drasticamente** a estrutura, reduzindo de 4 pastas para apenas 2 pastas ativas (`.gemini` e `.obsidian`).
>
> **Você autoriza a consolidação e arquivamento conforme proposto?**
