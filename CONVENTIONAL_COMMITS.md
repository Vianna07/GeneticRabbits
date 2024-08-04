# Convenção de Commits

Para manter a consistência no histórico de commits, siga estas diretrizes:

## Formato do Commit
O formato e os tipos do commit são com base na [convenção de commits](https://www.conventionalcommits.org/en/v1.0.0/).

### Tipos de Commit
- **feat**: Uma nova funcionalidade.
- **fix**: Uma correção de bug.
- **docs**: Alterações na documentação.
- **style**: Alterações que não afetam o significado do código (espaços em branco, formatação, etc.).
- **refactor**: Alteração de código que não corrige um bug nem adiciona uma funcionalidade.
- **test**: Adição ou correção de testes.
- **chore**: Atualizações de tarefas administrativas (build, dependências, etc.).

### Exemplos
- `feat: adiciona funcionalidade de login`
- `fix: corrige erro de validação no formulário`
- `docs: atualiza README com instruções de configuração`

### Detalhamento das Partes do Commit

 ```html
<header />
<LINHA_EM_BRANCO />
<body>
<LINHA_EM_BRANCO />
<footer />
```

1. **Header**: `<type>: <short summary>`
   - **type**: Define o tipo da mudança, como `feat`, `fix`, etc.
   - **short summary**: Um resumo curto da mudança em tempo presente. Não deve ser capitalizado e não deve terminar com um ponto.

2. **Body** (opcional):
   - Fornece uma descrição mais detalhada da mudança.
   - Explica o motivo da mudança e como ela foi implementada.
   - Deve ser escrito em parágrafos curtos e no tempo presente.

3. **Footer** (opcional):
   - Usado para notas adicionais, como informações sobre breaking changes e issues fechadas.
   - **BREAKING CHANGE**: Descrição de mudanças que quebram a compatibilidade.
   - **Closes**: Referências a issues que foram resolvidas pela mudança.

Seguir essas diretrizes ajudará a manter um histórico de commits claro e organizado, facilitando a manutenção e a colaboração no projeto.
