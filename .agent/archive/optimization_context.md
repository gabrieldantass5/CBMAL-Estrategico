# 🧠 Contexto: Otimização de Metadados de Skills (Ecodestema CBMAL)

## 🎯 Objetivo

Aumentar a eficiência de tokens e a precisão do carregamento seletivo de skills, garantindo que as descrições no YAML frontmatter sejam ultraestruturadas e informativas.

## 📖 Estado Atual

- Possuímos 13+ skills no diretório `.agent/skills/`.
- Algumas descrições são curtas ou genéricas demais (ex: "Especialista em X").
- O agente (eu) decide carregar a skill baseado apenas nessa descrição. Descrições ruins levam a carregamentos errôneos ou omissões.

## 🛠️ Critérios de Otimização (Padrão 2026)

Uma descrição otimizada deve conter:

1. **O quê**: O domínio principal (ex: Dashboards Strategicos).
2. **Quando**: Gatilhos específicos de uso (ex: "Use quando precisar criar layouts para Command Center").
3. **Capacidades**: O que ela entrega (ex: "Gera HTML/CSS, sugere paletas institucionais").
4. **Restrições**: O que ela não faz ou onde se limita (ex: "Não faz análise estatística complexa").

---
**Última atualização**: 29/01/2026
