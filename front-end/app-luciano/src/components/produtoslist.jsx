import React from 'react'
import Card from './card'

class ProdutosList extends React.Component {
    constructor (props) {
        super(props)
        this.root = props.root;
        this.state = { data: [] };
    }
    
    async componentDidMount () {
        const data = await this.getData();
        this.setState({ data });
    }

    async getData() {
        const res = await fetch(`http://${window.location.hostname}:5000/products`);
        const data = await res.json();
        return data
    }

    render () {
        const data = this.state.data.filter(item => {
            return item.categories.includes(this.root.state.tab)
        });

        return (
            <>
                <input className="search"  placeholder="O que você procura?" style={
                    {
                        backgroundImage: `url(${process.env.PUBLIC_URL}/icons/search.svg)`
                    }
                 } />
                <h3 className="tab-tittle">{this.root.state.tab}</h3>
                <div className="produtos-list">
                    { data.map((item,i) => <Card key={i} data={item}/>) }
                </div>
            </>    
        )
    }
}

export default ProdutosList