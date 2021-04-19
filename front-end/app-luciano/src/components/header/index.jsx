import React from 'react'
import { getCompany, getProfile, getProducts, calcPromotion, formatUrl } from '../../functions'
class Header extends React.Component {

    constructor () {
        super()
        this.state = {
            company: {},
            profile: {},
            products: {},
            car_items: [],
            car_counts: []
        }
    }

    async componentDidMount () {
        const company = await getCompany();
        const products = await getProducts();
        let profile = await getProfile();
        
        this.setState({ company });
        this.setState({ products });
        this.setState({ profile });

        this.setState({ car_items: profile.car_items });
        this.setState({ car_counts: profile.car_counts });

        setInterval(async () => {

            profile = await getProfile();
        
            this.setState({ profile });
            this.setState({ car_items: profile.car_items });
            this.setState({ car_counts: profile.car_counts });
        
        }, 1500);
    }

    getPrice = array => {
        if(array.length === 0)
            return "0.00"
        else
            return array.map((id,i) => {
                const item = this.state.products.filter(product => product.id === id)[0];
                return calcPromotion(item) * this.state.car_counts[i];
            })
            .reduce((a,b) => a + b).toFixed(2);
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
                    <p className="carrinho-valor">R$ {this.getPrice(this.state.car_items)}</p>
                </div>
            </header>
        )
    }
}

export default Header;