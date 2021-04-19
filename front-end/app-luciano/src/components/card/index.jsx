import React from 'react'
import Try from '../try/'
import { formatUrl, calcPromotion } from '../../functions'

// props.root.root = App Component

class Card extends React.Component {

    setData = async () => {

        const profile = this.props.root.state.profile;
        const data =  JSON.parse( JSON.stringify(this.props.data) );
        const index = profile.car_items.indexOf(data.id);

        // Adicionando atributos que seram usados em popUp
        if( index !== -1 ) {
            data.count = profile.car_counts[index];
            data.priceDefault = data.price;
            data.price = data.price * data.count;
        }

        // Setando atributos em data de App, automaticamente abrindo popUp
        this.props.root.root.setState({ data })
    }

    render () {
        return (
            <div onClick={() => this.setData()} className="card relative">
                <Try if={this.props.data.promotion > 0}>
                    <p className="product-promotion">{this.props.data.promotion}% OFF</p>
                </Try>

                <img src={ formatUrl(this.props.data.image) } alt="" />
                <p className="product-name">{this.props.data.name}</p>

                <p className="relative">
                    <Try if={this.props.data.promotion > 0}>
                        <span>R$ {calcPromotion(this.props.data)}</span>
                    </Try>
                    <span>R$ {this.props.data.price.toFixed(2)}</span>
                </p>
            </div>
        )
    }
}   

export default Card