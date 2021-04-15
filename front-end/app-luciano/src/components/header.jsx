import React from 'react'

class Header extends React.Component {
    componentDidMount () {

    }
    render() {
        return (
            <header>
                <div className="empresa-data-box">

                    <div className="logo" />
                    <div className="empresa-data">
                        
                        <div className="row relative empresa-header-row">
                            {/* <h3 className="empresa-nome" /> */}
                            <p>Pet Friends Acessories</p>
                            {/* <p className="empresa-status" /> */}
                            <p>ABERTO AGORA</p>
                        </div>

                        <div className="row">
                            {/* <p className="empresa-endereco" /> */}
                            <p className="empresa-endereco">Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa - PB</p>
                        </div>
                        
                        <div className="row empresa-delivery">
                            {/* <p className="empresa-delivery" /> */}
                            <p>
                                <span>Delivery:</span> 35m - 1h:40m
                            </p>
                            {/* <p className="empresa-entrega" /> */}
                            <p className="empresa-entrega">
                                <span>Entrega:</span> À partir de R$ 3,00
                            </p>
                        </div>

                    </div>
                
                </div>
                <div className="carrinho">
                    <div className="row">
                        {/* <img src="car-icon"/> */}
                        {/* <p className="carrinho-quantidade" /> */}
                        <p className="carrinho-quantidade">5 Produtos no Carrinho</p>
                    </div>
                    {/* <p className="carrinho-valor" /> */}
                    <p className="carrinho-valor">R$ 349,80</p>
                </div>
            </header>
        )
    }
}

export default Header;