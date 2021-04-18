import React from 'react';
import './style.css';
import './animation.css'
import Header from './components/header'
import Menu from './components/menu'
import ProdutosList from './components/produtoslist'
import PopUp from './components/popup'
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { tab: 'Sugestão do Vendedor', data: {} };
  }

  render() {
    return (
      <>
        <Header root={this} />
        <Menu root={this} />
        <ProdutosList root={this} tab={this.state.tab} />
        <PopUp root={this} />
      </>  
    )
  }

}

export default App;
