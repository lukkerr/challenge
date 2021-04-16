import React from 'react';
import './style.css';
import Header from './components/header'
import Menu from './components/menu'
import ProdutosList from './components/produtoslist'
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { tab: 'Sugestão do Vendedor' };
  }

  render() {
    return (
      <>
        <Header root={this} />
        <Menu root={this} />
        <ProdutosList root={this} tab={this.state.tab} />
      </>  
    )
  }

}

export default App;
