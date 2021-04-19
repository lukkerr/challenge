import Card from '../card'
import Try from '../try/'
import { erasePopUp, setProfileAdd, setProfileChange } from '../../functions'
import React from 'react'

class PopUp extends React.Component {

    constructor (props) {
        super(props);
        this.state = { defaultValue: [ null, null ] }
        // [0] = valor do produto com promoção
        // [1] = valor real o produto
    }

    changeValue = async self => {

        // prices = preços de card, valor com e sem promoção
        const prices = document.querySelectorAll(".popup .card p:last-child span");
        const data = this.props.root.state.data;
        
        prices.forEach((price, index) => {
            const priceValue = parseFloat( price.textContent.replace("R$","").trim() );
            let newValue;
            
            if( !this.state.defaultValue[index] ) {
                if(data.priceDefault) {
                    const priceDefault = data.priceDefault;
                    const value = priceDefault - ( (priceDefault/100) * data.promotion );
                    this.state.defaultValue[index] = value;
                } else
                    this.state.defaultValue[index] = priceValue;
            }
            
            newValue = this.state.defaultValue[index] * self.value;

            price.textContent = `R$ ${(newValue).toFixed(2)}`;    
        });

        const addButton = document.querySelector(".car-button");
        
        if(self.value === "0")
            addButton.classList.add("click-disable");
        
        else if(addButton.classList.contains("click-disable"))
            addButton.classList.remove("click-disable");
    }
    
    changeValueButton = async self => {
        const input = document.querySelector(".count-product");

        if(self.textContent === "+")
            input.value++;
        else if(input.value > 0)
            input.value--;

        this.changeValue(input);
    }

    prepareProfile = async self => {
        const popUpBox = document.querySelector(".popup-box");
        const count = document.querySelector(".count-product").value;
        const id = this.props.root.state.data.id;

        if(this.props.root.state.data.count !== count)
            if( self.classList.contains("add-car") )
                await setProfileAdd(id, count);
            else
                await setProfileChange(id, count);

        erasePopUp(popUpBox, this);
    }
    
    render () {
        return (
            // Só sera exibido caso App.state.data !== {}
            <Try if={ Object.keys(this.props.root.state.data).length }>
                <div className="popup-box" onClick={ e => erasePopUp(e.target, this) }>
                    <div className="popup">
                        <Card data={this.props.root.state.data} />
                        <div className="count-product-box">
                            <span onClick={e => this.changeValueButton(e.target)}>-</span>

                            <input type='number' onChange={e => this.changeValue(e.target)} 
                                className="count-product" defaultValue={
                                    this.props.root.state.data.count ?
                                    this.props.root.state.data.count : 1
                                }/>
                            
                            <span onClick={e => this.changeValueButton(e.target)}>+</span>
                        </div>

                        <Try if={!this.props.root.state.data.count}>
                            <p onClick={(e) => this.prepareProfile(e.target)} className="car-button add-car">
                                Adicionar ao Carrinho
                            </p>
                        </Try>

                        <Try if={this.props.root.state.data.count}>
                            <p onClick={(e) => this.prepareProfile(e.target)} className="car-button remove-car">
                                Alterar Produto
                            </p>
                        </Try>
                    </div>
                </div>
            </Try>
        )
    }
}
   

export default PopUp