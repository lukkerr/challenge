# Desafio Softcom - Front-End

​	Projeto construído em React, como solicitado no desafio, não se viu necessário a utilização de frameworks CSS (Bootstrap, Bulma), foi-se então utilizado para o mesmo o CSS puro.

​	Foi utilizado para simulação de dados o JSON-Server, dependência recomendada no desafio, no que diz respeito a responsividade embora o desafio tenha proposto a interface desktop como centro, foi-se construído a interface do mesmo em mobile, mantendo sua conscistência em resoluções superiores a 210px.

​	O desafio foi desenvolvido primeiramente apartir da construção da tela proposta em sua resolução padrão passada ( width: 1480px ) para comprimento do desafio, posteriomente foi focado na implementação da dinâmica em seu contéudo utilizando JSON-Server para o mesmo, após a conclusão do mesmo, foi idealizado a responsividade da tela proposta visando na consistência da sua exibição em resoluções inferiores.

## Tecnologias Usadas:

- React
- CSS3
- JSON-Server

## Versões usadas:

- Node: 15.14.0
- NPM: 7.7.6
- JSON-Server: 0.16.3  | Instalação: `npm i json-server`

## Scripts a serem usados:

É desejável que você esteja no diretório `./front-end/app-luciano/`, posteriormente execute:

- `json-server --watch ./src/db.json --port 5000 `

Em outra instância do terminal execute:

- `npm start