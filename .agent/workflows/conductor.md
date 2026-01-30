---
description: Ativa o workflow Conductor para planejamento de alta precisão (Measure twice, implement once).
---

// turbo-all

# 🚂 COMANDO: /conductor (Refined v2.0)

Este workflow implementa a filosofia **"Plan First, Execute Later"**, inspirada no estado da arte de Coding AI 2026. O objetivo é eliminar "alucinações" e retrabalho através de um planejamento arquitetural rigoroso.

## 🎯 Filosofia de Comando

1. **Measure Twice, Cut Once**: Nenhum código ou texto final é gerado sem um plano aprovado.
2. **Context is King**: Todo projeto deve ter uma "Memória de Contexto" (`context.md`) atualizada.
3. **No One-Shot**: Construímos passo a passo, nunca tudo de uma vez.

## 🛠️ Passos da Execução

### 1. 🧠 Carregamento de Contexto (Context First)

Antes de qualquer plano, o agente deve:

- Verificar se existe um arquivo de contexto na pasta do projeto (ex: `context_feature.md` ou `DNA_PROJETO.md`).
- Se não existir, **CRIAR** um arquivo de contexto inicial resumindo o objetivo.
- Ler este arquivo para entender o "Estado da Arte" do projeto.

### 2. 📝 Blueprint Arquitetural (`plan.md`)

O agente cria ou atualiza o `plan.md` com 3 seções obrigatórias:

- **Arquitetura/Estrutura**: Como os arquivos/documentos se conectarão.
- **Passo a Passo Pormenorizado**: Ações atômicas (ex: "Criar arquivo X", "Escrever seção Y").
- **Pontos de Risco**: Onde algo pode dar errado (jurídico, técnico, conformidade).

> *Dica: Use a skill `kimi-reasoning` se o planejamento exigir lógica complexa.*

### 3. 🛑 Protocolo "STOP & THINK" (Validação Obrigatória)

- O agente apresenta o plano ao usuário.
- **Pergunta Clara**: "Comandante, o plano de arquitetura está aprovado? Posso iniciar a execução passo a passo?"
- **AGUARDAR** a resposta do usuário. Se houver ajustes, reescrever o plano.

### 4. 🏗️ Execução Sequencial

- Executar os passos do `plan.md` um por um.
- Se for código, usar TDD (Test Driven Development) onde possível.
- Se for documento, gerar rascunhos (`draft`) antes da versão final.

### 5. 🔄 Memory Update (O Pulo do Gato)

Ao finalizar a tarefa, o agente deve:

- **ATUALIZAR** o arquivo de contexto (`context_feature.md`) com as novas decisões, arquivos criados e estrutura atual.
- Isso garante que na próxima sessão, a IA saiba exatamente onde parou (sem gastar tokens lendo tudo do zero).

### 6. 🛡️ Auditoria Final

- Verificar se todos os arquivos criados seguem o padrão (Visual Identity Pro / Redação Oficial).
- Rodar a skill `inteligencia-benchmarking` se aplicável.

---
*Atualizado com insights do "AI Coding Workflow 2026".*
