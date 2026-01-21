---
tipo: Fluxo de Trabalho
agente: Secretário APO
versao: 1
data: 16-01-26
---

# 🖋️ Fluxo de Trabalho: Agente Secretário (APO/CBMAL)

> [!INFO] **Objetivo**
> Padronizar a rotina diária de processamento de documentos e gestão do SEI para garantir celeridade nas respostas estratégicas.

---

## 🔄 Diagrama de Processo
```mermaid
graph TD
    A[🚀 Início do Expediente] --> B{Acesso ao SEI}
    B --> C[🔍 Verificar Caixa de Entrada]
    C --> D{🚨 Triagem de Urgência}
    
    D -- "Sim (Urgente)" --> E[📱 Notificar Chefia Imediata]
    E --> F[⚡ Priorizar Elaboração]
    
    D -- "Não (Rotina)" --> G[📋 Adicionar ao Kanban]
    G --> H[🕒 Seguir Ordem Cronológica]
    
    F --> I[📄 Aplicar Template CBMAL]
    H --> I
    
    I --> J[🖋️ Enviar para Assinatura]
    J --> K{✅ Assinado?}
    
    K -- "Sim" --> L[📧 Realizar Despacho]
    K -- "Não" --> M[🔧 Ajustar Minuta]
    M --> J
    
    L --> N[🧠 Registrar no Diário IA]
    N --> O[🏁 Fim do Turno]

    style A fill:#4a90e2,stroke:#fff,color:#fff
    style D fill:#f5a623,stroke:#fff,color:#fff
    style E fill:#d0021b,stroke:#fff,color:#fff
    style L fill:#7ed321,stroke:#fff,color:#fff
```

---

## 📝 Checklist de Qualidade (Pré-Assinatura)
- [ ] O número do processo SEI está correto?
- [ ] Foi utilizado o template oficial do APO?
- [ ] A redação segue o padrão oficial (Sem gírias, impessoal)?
- [ ] Os anexos citados estão realmente incluídos no processo?
- [ ] O destinatário está correto?

---
> [!TIP] **Dica para Excalidraw**
> Você pode copiar o código Mermaid acima e usar a função "Mermaid to Excalidraw" para transformar este fluxo em um desenho editável e personalizado para o mural da seção.

*(Gestão Estratégica Apoiada por Antigravity AI)*
