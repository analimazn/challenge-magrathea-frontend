## Front-end - Challenge Magrathea Labs
[https://challenge-magrathea-frontend.herokuapp.com/](https://challenge-magrathea-frontend.herokuapp.com/)

```
Versões

node: v12.18.1
npm: 6.14.5
yarn: 1.22.4
```

Site fictício para demonstrar Meetups localizados na região de Joinville.

1. [Instalação](#installation)
2. [Inicializando a aplicação](#run-app)
3. [Estrutura do Projeto](#concept-of-structure)
    1. [Sobre Public](#public-folder)
    2. [Sobre Routes](#routes-folder)
    3. [Sobre Services](#services-folder)
    4. [Sobre Containers](#containers-folder)
    5. [Sobre Components](#components-folder)
    6. [Sobre Styles](#styles-folder)
    7. [Sobre Utils](#utils-folder)
4. [Dependências do projeto](#dependencies)


## Instalação

Para instalar as dependências utilize as linhas de comando do [`yarn`](https://yarnpkg.com/en/).

```sh
yarn install
```

Crie o arquivo `.env` e preencha de acordo com o arquivo `.env.example`.

**É importante que a `URL` da `API` contenha a `/` ao final.**

**Ex:**

```
REACT_APP_API_URL=http://localhost:3000/
```


No arquivo `.env` é possível utilizar a API que está disponível no endereço [`https://challenge-magrathea-backend.herokuapp.com/`](https://challenge-magrathea-backend.herokuapp.com/) em um servidor no [Heroku](https://www.heroku.com), ou, se preferir, você pode baixar e configurar a API localmente através deste [repositório](https://github.com/analimazn/challenge-magrathea-backend).



### Inicializando a aplicação

Após instalar e preencher o arquivo `.env`, execute o comando abaixo para iniciar a aplicação localmente:

```sh
yarn start
```

ou

```sh
npm start
```

Por padrão o projeto irá inicializar no endereço [http://localhost:3000/](http://localhost:3000/).


## Estrutura do projeto

```
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
└── src
    ├── App.js
    ├── components
    │   ├── CardEvent
    │   │   ├── CardEvent.jsx
    │   │   ├── index.jsx
    │   │   └── styles.css
    │   ├── CardMeetup
    │   │   ├── CardMeetup.jsx
    │   │   ├── index.jsx
    │   │   └── styles.css
    │   └── Header
    │       ├── Header.jsx
    │       ├── index.jsx
    │       └── styles.css
    ├── containers
    │   ├── EventsList
    │   │   ├── EventsList.jsx
    │   │   ├── index.jsx
    │   │   └── styles.css
    │   └── MeetupsList
    │       ├── index.jsx
    │       ├── MeetupsList.jsx
    │       └── styles.css
    ├── index.js
    ├── routes
    │   ├── EventsRoute
    │   │   ├── EventsRoute.jsx
    │   │   └── index.jsx
    │   ├── index.jsx
    │   └── MeetupsRoute
    │       ├── index.jsx
    │       └── MeetupsRoute.jsx
    ├── services
    │   ├── Api.js
    │   ├── Events.js
    │   └── Meetups.js
    ├── styles
    │   └── global.css
    └── utils
        └── format.js

```


### Diretório **public**

O diretório `public` armazena o `index.html` utilizado no projeto.


### Diretório **src/routes**

O diretório de `routes` é responsável renderizar as páginas com as informações corretas obtidas pelos `services`.


### Diretório **src/services**

O diretório de `services` é responsável por realizar a conexão com a `API` e carregar os dados que serão utilizados na aplicação.


### Diretório **src/containers**

O diretório de `containers` é responsável por agrupar diferentes componentes que serão utilizados para compor a página.


### Diretório **src/components**

O diretório de `components` é responsável por armazenar componentes mais específicos e consistentes para que sejam reutilizados na aplicação em diferentes páginas.


### Diretório **src/styles**

O diretório de `styles` é responsável pelos arquivos globais de estilização, ou seja, que afetam a aplicação como um tudo.


### Diretório **src/utils**

O diretório de `utils` contém funções genéricas que podem auxiliar em pequenas formatações de dados na aplicação.


## Dependências

- [axios](https://ghub.io/axios): Biblioteca responsável por realizar requisições HTTP.
- [moment](https://momentjs.com/): Biblioteca responsável por validar e manipular datas.
- [react](https://reactjs.org/): Biblioteca Javascript para construir interfaces.
- [bootstrap](https://getbootstrap.com/): Framework CSS para criar componentes estilizados.
- [react-bootstrap](https://react-bootstrap.github.io/): Adaptação do Bootstrap para o React.
- [react-icons](https://react-icons.github.io/react-icons/): Biblioteca com uma coleção de famosos ícones componentizados para o React.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): Biblioteca que possibilita sincronização entre UI e URL.
