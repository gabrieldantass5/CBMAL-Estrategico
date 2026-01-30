---
name: pptx-generator-cbmal
description: Gerador Automático de Slides CBMAL. Use para transformar roteiros Markdown em apresentações PPTX profissionais com Brand System (Exo 2, Fênix). Aplica regra 6x6 e hierarquia visual militar.
---

# 📽️ Gerador de PowerPoint Estratégico (CBMAL)

Esta skill permite ao Agente transformar pensamentos e rascunhos em apresentações profissionais prontas para o Comando-Geral, utilizando o motor de design institucional.

---

# 🛠️ Modo de Execução

### 1. Preparação do Roteiro (Markdown)

O documento de origem deve seguir esta estrutura para melhor aproveitamento:

- **H1 (`#`)**: Título da Apresentação (Gera o slide de capa).
- **H2 (`##`)**: Título do Slide (Inicia um novo slide).
- **Bullets (`-`)**: Pontos de conteúdo (Gera os tópicos do slide).

### 2. Comando de Geração

Sempre utilize o script especializado para garantir a aplicação da marca:

```bash
python scripts/ppt_generator.py <caminho_do_arquivo.md>
```

---

# 🎨 Regras de Design (Automáticas)

- **Cores**:
  - Vermelho Assinatura (`#C10A0A`) para Destaques.
  - Azul CBMAL (`#4A94FF`) para Títulos de Seção.
- **Tipografia**:
  - Destaques: `Exo 2 Black`.
  - Corpo: `Exo 2 Regular`.
- **Brasão**: O Brasão oficial (Fênix) deve estar presente no canto superior direito de todos os slides.
- **Layout**: Proporção 16:9 (Widescreen).

---

# 🛡️ Diretrizes de Qualidade (ISO/CBMAL)

1. **Regra de 6x6**: Evitar mais de 6 tópicos por slide ou 6 palavras por tópico para garantir legibilidade.
2. **Caixa Alta**: Títulos devem ser sempre em **CAIXA ALTA**.
3. **Contraste**: Garantir legibilidade máxima sobre fundo branco.
4. **Hierarquia**: Informação mais importante sempre no topo.

---

# 🚀 Fluxo Completo via /conductor

1. O usuário solicita uma apresentação.
2. O Agente cria o roteiro em `Inbox/projeto_slides.md`.
3. O Agente executa a skill `pptx-generator-cbmal`.
4. O Agente realiza a Auditoria de Qualidade (skill `inteligencia-benchmarking`).
5. O PowerPoint final (.pptx) é entregue ao Comandante.
