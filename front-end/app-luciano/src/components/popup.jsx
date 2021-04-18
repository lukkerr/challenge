import Card from './card'
import Try from './try'
import { erasePopUp } from '../functions'
import React from 'react'

class PopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 }
    }
    render () {
        return (
            <Try if={ Object.keys(this.props.root.state.data).length }>
                <div className="popup-box" onClick={ e => erasePopUp(e, this.props.root) }>
                    <div className="popup">
                        <Card data={this.props.root.state.data} />
                        <div className="count-product-box">
                            <span>-</span>
                            <input type='number' min={1} className="count-product" defaultValue={this.state.count}/>
                            <span >+</span>
                        </div>
                    </div>
                </div>
            </Try>
        )
    }
}
   

export default PopUp