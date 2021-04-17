import React from 'react'
class Header extends React.Component {

    constructor () {
        super()
        this.state = { company: {}, profile: {}, car_items: [] }
    }

    async componentDidMount () {
        const company = await this.getCompany();
        const profile = await this.getProfile();
        
        this.setState({ company });
        this.setState({ profile });
        this.setState({ car_items: profile.car_items });
    }

    async getCompany () {
        const url = `http://${window.location.hostname}:5000/company`;
        const res = await fetch(url);
        const data = await res.json();
        return data
    }

    async getProfile () {
        const url = `http://${window.location.hostname}:5000/profile`;
        const res = await fetch(url);
        const data = await res.json();
        return data
    }

    render() {
        return (
            <header>
                <div className="empresa-data-box">
                    <img className="logo" src={`${process.env.PUBLIC_URL}/logo.svg`} alt='' />
                    <div className="empresa-data">
                        <div className="row relative empresa-header-row">
                            <p>{this.state.company.name}</p>

                            <div className="status-box">
                                <img src={`${process.env.PUBLIC_URL}/icons/alert-status.svg`} alt="Status" />
                                <p>{this.state.company.status} AGORA</p>
                            </div>
                        </div>

                        <div className="row">
                            <p className="empresa-endereco">{this.state.company.address}</p>
                        </div>
                        
                        <div className="row empresa-delivery">
                            
                            <section className="row">
                                <img src={`${process.env.PUBLIC_URL}/icons/motorcycle.svg`} alt="Motocicleta" />
                                <p>
                                    <span>Delivery: </span>
                                    {this.state.company.delivery_min} - {this.state.company.delivery_max}
                                </p>
                            </section>

                            <p className="empresa-entrega">
                                <span>Entrega:</span> À partir de R$ {this.state.company.price_delivery}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="carrinho">
                    <div className="row relative">
                        <img src={`${process.env.PUBLIC_URL}/icons/car.svg`} alt="Carrinho de compras"/>
                        <p className="carrinho-quantidade">
                            {this.state.car_items.length} Produtos no Carrinho
                        </p>
                    </div>
                    <p className="carrinho-valor">R$ {this.state.profile.car_price}</p>
                </div>
            </header>
        )
    }
}

export default Header;