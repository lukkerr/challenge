### Componente Try

​	Componente criado visando nas diferentes possibilidades de exibição de conteúdos, uma vez sendo que o conteúdo a ser exibido ira variar conforme o valor atribuido a componentes superiores.

#### Atributos a serem passados :

- **if** - atributo principal do componente como o mesmo recebe um valor boleano. 
  - se `props.if = true` então componente renderizará `props.children`
  - senão componente renderizará `<></>`

#### Onde *Try* é usado ?

- `src/components/card`
- `src/components/popup`
- `src/components/produtolist`