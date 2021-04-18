import React from 'react'
import { getCompany, getProfile, formatUrl } from '../functions'
class Header extends React.Component {

    constructor () {
        super()
        this.state = { company: {}, profile: {}, car_items: [] }
    }

    async componentDidMount () {
        const company = await getCompany();
        const profile = await getProfile();
        
        this.setState({ company });
        this.setState({ profile });
        this.setState({ car_items: profile.car_items });
    }

    render() {
        return (
            <header>
                <div className="empresa-data-box">
                    <img className="logo" src={ formatUrl("/logo.svg") } alt='' />
                    <div className="empresa-data">
                        <div className="row relative empresa-header-row">
                            <p>{this.state.company.name}</p>

                            <div className="row status-box">
                                <img src={ formatUrl("/icons/alert-status.svg") } alt="Status" />
                                <p>{this.state.company.status} AGORA</p>
                            </div>
                        </div>

                        <div className="row">
                            <p className="empresa-endereco">{this.state.company.address}</p>
                        </div>
                        
                        <div className="row empresa-delivery">
                            
                            <section className="row">
                                <img src={ formatUrl("/icons/motorcycle.svg") } alt="Motocicleta" />
                                <p>
                                    <span>Delivery: </span>
                                    {this.state.company.delivery_min} - {this.state.company.delivery_max}
                                </p>
                            </section>

                            <p>
                                <span>Entrega:</span> À partir de R$ {this.state.company.price_delivery}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="carrinho">
                    <div className="row relative">
                        <img src={ formatUrl("/icons/car.svg") } alt="Carrinho de compras"/>
                        <p className="carrinho-quantidade">
                            <span>{this.state.car_items.length}</span>
                            <span> Produtos no Carrinho</span>
                        </p>
                    </div>
                    <p className="carrinho-valor">R$ {this.state.profile.car_price}</p>
                </div>
            </header>
        )
    }
}

export default Header;