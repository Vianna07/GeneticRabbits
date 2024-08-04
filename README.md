# genetic-rabbits

![genetic-rabbits Logo](./public/logo.svg)

## Descrição

**genetic-rabbits** é um jogo educacional desenvolvido para ensinar conceitos básicos de genética de forma divertida e interativa. O jogo foca em conceitos como dominância e recessividade, dominância incompleta, codominância, alelos letais, segunda lei de Mendel, polialelia, epistasia e herança poligênica. Os jogadores aprendem sobre genética ao criar e manipular coelhos virtuais com diferentes características genéticas.

## Funcionalidades

- **Criação de Coelhos**: Os jogadores podem criar coelhos com diferentes combinações genéticas.
- **Experimentação Genética**: Experimente com cruzamentos para ver os diferentes resultados baseados em leis genéticas.
- **Interatividade**: Interface intuitiva e amigável para todas as idades.
- **Educação Divertida**: Conceitos complexos explicados de maneira simples e divertida.

## Conceitos de Genética Abordados

- **Dominância e Recessividade**
- **Dominância Incompleta**
- **Codominância**
- **Alelo Letal**
- **Segunda Lei de Mendel**
- **Polialelia**
- **Epistasia**
- **Herança Poligênica**

## Tecnologias Utilizadas

- **Controle de Versão**: Git
- **Frontend**: React
- **Linguagem**: TSX, TypeScript
- **CSS**: PostCSS, TailwindCSS
- **Build Tool**: Vite
- **Testes**: Vitest, Testing Library
- **Linting**: ESLint, Prettier
- **Outras Ferramentas**:
  - **@vitejs/plugin-react-swc**: Plugin Vite para suporte a React usando SWC.
  - **@typescript-eslint/eslint-plugin** e **@typescript-eslint/parser**: Ferramentas para linting e parsing de TypeScript.
  - **autoprefixer**: Prefixos automáticos para CSS.
  - **jsdom**: Simulação de um ambiente de navegador para testes.

## Estrutura de CSS

Estamos utilizando uma combinação de SMACSS, BEM e namespaces para organizar e manter nosso CSS de forma modular, escalável e fácil de entender. 

### SMACSS (Scalable and Modular Architecture for CSS)
Nosso CSS está organizado nas seguintes categorias:

- **Base**: Estilos globais e padrões básicos.
- **Layout**: Estilos que definem a estrutura e o layout de uma página.
- **Module**: Estilos para componentes específicos da interface.
- **State**: Estilos que representam diferentes estados de um módulo ou layout.
- **Theme**: Estilos que definem temas visuais.

### BEM (Block, Element, Modifier)
Utilizamos a convenção de nomenclatura BEM para melhorar a legibilidade e a manutenção do código CSS:

- **Block**: Unidade independente da interface, como um coelho, um painel de controle ou um gráfico de genética.
- **Element**: Parte de um bloco que tem uma função específica. Exemplos: `rabbit__ear`, `control-panel__button`.
- **Modifier**: Variação ou estado de um bloco ou elemento. Exemplos: `rabbit--dominant`, `control-panel__button--active`.

### Namespaces no CSS
Utilizamos namespaces como prefixos para indicar a categoria ou contexto de uso de um seletor:

- `c-` para componentes (`c-rabbit`, `c-control-panel`).
- `l-` para layouts (`l-header`, `l-footer`).
- `u-` para utilitários (`u-hidden`, `u-clearfix`).
- `js-` para classes usadas por scripts JavaScript (`js-toggle`, `js-modal`).

## Instalação e ambiente de desenvolvimento
genetic-rabbits requer [Node.js](https://nodejs.org/en) e [Pnpm](https://pnpm.io/).
Instale o [Node.js](https://nodejs.org/en) na versão 20, em seguida abra algum terminal e exeucte o comando `npm install -g pnpm@9` para instalar o  [Pnpm](https://pnpm.io/).

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1. Clone o repositório: `git clone https://github.com/Vianna07/genetic-rabbits.git`
2. Entre no repositório: ` cd genetic-rabbits`
3. Baixa as dependências: `pnpm install`
4. Inicie o ambiente de desenvolvimento: `pnpm dev`
