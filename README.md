
# concrete-challenge

Desafio realizado pela Concrete Solutions para concorrer a vaga de Frontend.

| Endpoint | Objetivo |
| ------ | ------ |
| http://concrete-challenge.netlify.com/ | Permitir a pesquisa de usuário do git. |
| http://concrete-challenge.netlify.com/result | Listar repositórios do usuário encontrado. Caso não encontrado, apresenta mensagem de erro. |

### Tecnologias utilizadas

O projeto foi produzido em react, utilizando o [create react app](https://github.com/facebook/create-react-app), boilerplate que possui dependências básicas já configuradas para permitir o desenvolvimento. Além disso, foram utilizadas

* React
    * react-router-dom, para permitir o uso de rotas
    * axios, para chamadas HTTP
    * enzyme, para testes dos componentes
* Hospedagem
    * Netlify - Plano free para hospedagem de SPA



### Instalação

Para rodar o projeto, é necessário ter o Node instalado, para poder executar o CLI. Para baixar o projeto, é necessário baixar o projeto e instalar suas dependências.
**Para executar o projeto, é necessário possuir as variáveis de ambiente utilizadas, que é o endpoint da API utilizada, além da chave da API. São enviadas por email.**

```sh
$ git clone https://github.com/isabelandss/concrete-challenge
$ cd concrete-challenge
$ npm install
$ npm run start
```

### Desenvolvimento
Foi gerado utilizando a arquitetura de Pages, como containeres de componentes menores, buscando maior reusabilidade [possível](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

Sua organização foi usando o Git Flow para gerar as branchs conforme features foram geradas. Para os componentes, foram gerados alguns casos de teste usando o enzyme.
