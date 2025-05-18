SolviLabs - Sistema de Cadastro de Problemas Automotivos e Serviços de Assistência

-- Visão Geral:

Este projeto é um sistema web para cadastro de problemas automotivos e serviços de assistência. Permite que o usuário cadastre veículos, faça login, gerencie tarefas e acesse informações sobre nossos serviços.

-- Funcionalidades:

- Cadastro de Veículos: Permite cadastrar veículos com placa, modelo, marca, ano, quilometragem, diagnóstico, sintomas, tipo de problema e custo estimado;
- Tabela de Veículos: Permite visualizar, editar e remover veículos, além de conseguir pesquisar por placa;
- Login e Cadastro: Sistema de autenticação que permite aos usuários se registrarem e fazerem login para acessar funcionalidades restritas;
- Lista de Tarefas: Ferramenta para organizar e acompanhar tarefas diárias;
- Página Sobre Nós: Informações sobre a SolviLabs e nossos serviços.

-- Tecnologias Utilizadas:

- Frontend: React, Next.js, Tailwind CSS;
- Backend: API desenvolvida em Java;

-- Estrutura do Projeto:

/sprint4
|  /src 
|  |  └──/app 
|  |  |   └──/api 
|  |  |   |  └──/veiculos
|  |  |   |     └──/[placa]
|  |  |   |     |     └── route.ts
|  |  |   |     └── route.ts
|  |  |   └──/atualizar-veiculo
|  |  |   |  └── page.tsx
|  |  |   └──/cadastrar-veiculo 
|  |  |   |  └── page.tsx
|  |  |   └──/cadastro
|  |  |   |  └── page.tsx
|  |  |   └──/listar-veiculos
|  |  |   |  └── page.tsx
|  |  |   └──/login
|  |  |   |  └── page.tsx
|  |  |   └──/logout 
|  |  |   |  └── page.tsx
|  |  |   └──/participantes
|  |  |   |  └── page.tsx
|  |  |   └──/protected
|  |  |   |  └── page.tsx
|  |  |   └──/sobre-nos
|  |  |   |  └── page.tsx
|  |  |   └── favicon.ico
|  |  |   └── globals.css
|  |  |   └── layout.tsx
|  |  |   └── loading.tsx
|  |  |   └── not-found.tsx
|  |  |   └── page.tsx
|  |  └──/components 
|  |  |  └──/Cabecalho
|  |  |  |  └── Cabecalho.tsx
|  |  |  └──/Menu
|  |  |  |  └── Menu.tsx
|  |  |  └──/Rodape
|  |  |  |  └── Rodape.tsx
|  |  |  └──/Spinner
|  |  |     └── Spinner.tsx
|  |  └──/img
|  |  |  └──/background.jpg
|  |  |  └──/caio.jpg
|  |  |  └──/nicolas.jpg
|  |  |  └──/solvilabs-icon.png
|  |  └── setupProxy.js
|  └── global.d.ts
|  └── next-env.d.ts
|  └── package-lock.json
|  └── package.json
|  └── postcss.config.js
|  └── postcss.config.mjs
|  └── tailwind.config.js
|  └── tailwind.config.ts
|  └── tsconfig.json
|  └── vite.config.js
└── README.md

-- Como Executar o Projeto:

- Pré-requisitos:

- Node.js;
- npm.

- Passos:

1. Clone o Repositório:

    git clone https://github.com/CaiocrNyimi/FrontSolviLabs.git

2. Instale as Dependências:

    cd FrontSolviLabs
    npm i

3. Execute o Projeto:

    npm run dev

4. Acesse o Projeto:

Abra o navegador e acesse a url 'http://localhost:3000'

-- Configuração do Backend:

O backend é uma API desenvolvida em Java. Para utilizar, basta apenas baixar a aplicação Java, abrir e executar a classe 'Main', fazendo isso a API funcionará localmente.
