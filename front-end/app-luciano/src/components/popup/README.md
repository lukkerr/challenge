### Componente PopUp

​	Componente criado visando a alteração da quantidades de produtos presente, .

#### Atributos a serem passados :

- **root** - Atribute que referência o componente anterior para utilização dos dados existentes no mesmo.
- **defaultValue** - Array que contém em sua [0] o valor do produto exibido atualmente no popup considerando sua promoção caso tenha, [1] valor do produto desconciderando sua promoção. 

#### Onde *PopUp* é usado ?

- `src/App

#### Imports:

- `../card/`
- `../try/`
- `../../functions`
  - *erasePopUp*: função responsável por ocultar popup, em evento posterior ao termino de sua animação.
  - *setProfileAdd*: função responsável por adicionar um novo produto com a quantidade e id informados.
  - *setProfileChange*: função responsável por alterar a quantidade (*count*) de determinado produto com id informado. 