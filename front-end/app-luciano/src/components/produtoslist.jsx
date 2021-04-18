import React from 'react'
import Card from './card'
import Try from './try'
import { getProducts, formatBackGround } from '../functions'

class ProdutosList extends React.Component {
    constructor (props) {
        super(props)
        this.root = props.root;
        this.state = { data: [], filter: "" };
    }
    
    async componentDidMount () {
        const data = await getProducts();
        this.setState({ data });
    }

    filterCard = async e => this.setState({ filter: e.target.value.toLowerCase() });

    render () {
        const data = this.state.data.filter(item => {
            const filterText = item.name.toLowerCase().includes(this.state.filter);
            const filterCateg = item.categories.includes(this.root.state.tab);
            let promotionItem = false;

            if(this.root.state.tab === 'Sugestão do Vendedor')
                promotionItem = item.promotion > 0;

            return ( filterText && filterCateg ) || promotionItem;
        });

        return (
            <>
                <input onChange={(e) => this.filterCard(e)} placeholder="O que você procura?"
                    className="search"  style={{ backgroundImage: formatBackGround("/icons/search.svg") }} />
                <h3 className="tab-tittle">{this.root.state.tab}</h3>
                <div className="produtos-list">
                    { data.map((item,i) => <Card root={this} key={i} data={item}/>) }
                </div>
                <Try if={data.length === 0}>
                    <p className="empty-list">Sentimos muito, mas nenhum produto foi encontrado.</p>
                </Try>
            </>
        )
    }
}

export default ProdutosList