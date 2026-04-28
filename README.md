# ShelfWise

ShelfWise é uma tela de catálogo de produtos desenvolvida com Next.js, TypeScript e Tailwind CSS. O projeto consome uma API pública real, exibe uma listagem responsiva de produtos e implementa paginação por query params.

## Visão geral

O objetivo do projeto é apresentar uma interface simples, funcional e bem acabada para um desafio técnico front-end.

A aplicação permite visualizar produtos com informações essenciais como imagem, nome, categoria, preço, avaliação, desconto e disponibilidade em estoque.

## Funcionalidades

- Listagem de produtos consumidos de uma API real
- Paginação funcional usando query params
- Cards responsivos de produtos
- Estado de carregamento
- Tratamento de erro
- Empty state
- Layout responsivo para mobile, tablet e desktop
- Interface criada com foco em clareza, hierarquia visual e boa experiência de uso

## Tecnologias utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint
- App Router
- Next Image
- Next Font

## API utilizada

Este projeto utiliza a API pública DummyJSON Products.

Endpoint principal:

```txt
https://dummyjson.com/products
```

A paginação é feita usando os parâmetros:

```txt
limit
skip
```

Exemplo:

```txt
https://dummyjson.com/products?limit=12&skip=12
```

## Como rodar o projeto localmente

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd challenge-next-nyxtu
```

Instale as dependências:

```bash
npm install
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador:

```txt
http://localhost:3000
```

## Scripts disponíveis

Rodar o projeto em modo desenvolvimento:

```bash
npm run dev
```

Rodar o lint:

```bash
npm run lint
```

Gerar build de produção:

```bash
npm run build
```

Rodar o projeto em modo produção após o build:

```bash
npm run start
```

## Estrutura de pastas

```txt
src/
  app/
    globals.css
    layout.tsx
    loading.tsx
    page.tsx
  components/
    pagination.tsx
    product-card.tsx
    product-grid.tsx
    products-header.tsx
    state-message.tsx
  lib/
    constants.ts
    formatters.ts
    pagination.ts
    products.ts
  types/
    product.ts
```

## Decisões técnicas

### Next.js com App Router

O projeto usa App Router por ser a abordagem moderna do Next.js para criação de rotas, páginas e layouts.

### TypeScript

TypeScript foi usado para tipar os dados vindos da API, principalmente os produtos e a resposta paginada. Isso deixa o código mais previsível e reduz erros durante o desenvolvimento.

### Tailwind CSS

Tailwind CSS foi escolhido para acelerar a criação da interface, mantendo consistência visual e responsividade diretamente nos componentes.

### Paginação por query params

A página atual é controlada pela URL, por exemplo:

```txt
/?page=2
```

Essa escolha permite compartilhar links, recarregar a página sem perder o estado e navegar usando o histórico do navegador.

### Separação de responsabilidades

A lógica de busca de dados, paginação, formatação e componentes visuais foi separada em arquivos próprios para manter o código mais organizado e fácil de manter.

## Experiência de usuário

A interface foi pensada para ser simples, clara e responsiva. Os cards priorizam informações úteis para leitura rápida:

- imagem do produto
- categoria
- nome
- descrição curta
- preço
- avaliação
- estoque
- desconto

Também foram adicionados estados de loading, erro e lista vazia para melhorar a experiência em diferentes cenários.

## Qualidade

Antes da entrega, foram utilizados os comandos:

```bash
npm run lint
npm run build
```

Esses comandos ajudam a validar padrões de código e garantir que a aplicação consegue gerar uma versão de produção.

## Referências oficiais

- Next.js Documentation
- React Documentation
- TypeScript Documentation
- Tailwind CSS Documentation
- DummyJSON Documentation

## Autor

Desenvolvido por Daniel Canaud.