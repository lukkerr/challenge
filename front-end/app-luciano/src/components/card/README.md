### Componente Card

​	Componente criado visando com foco na exibição do produto em si, exibindo seu nome, foto, percentual de promoção de estiver e preço.

#### Atributos a serem passados :

- **root** - Atribute que referência o componente anterior para utilização dos dados existentes no mesmo.
- **data** - Json que contém informações a serem utilizadas para sua exibição

#### Onde *Card* é usado ?

- `src/components/popup`
- `src/components/produtolist`

#### Imports:

- `../try/`
- `../../functions`
  - *formatUrl*: função usada para formatar URL, de arquivo passado pelo JSON-Server.
  - *calcPromotion*: função usada para calcular valor de produto considerando sua promoção, caso tenha.