import React from 'react'

class Menu extends React.Component {
    constructor (props) {
        super(props);
        this.root = props.root;
    }

    async componentDidMount () {
        const tab = this.root.state.tab;
        const sessions = Array.from(document.querySelectorAll(`.menu p`));
        const active = sessions.filter(item => item.textContent === tab)[0];
        this.setTabActive(active);
    }

    async setTabActive (active) {
        const tabActive = document.querySelector('.menu p.active');
        if(tabActive)
            tabActive.classList.remove("active");
        
        active.classList.add("active");
    }

    async changeTab (self) {
        this.root.setState({ tab: self.textContent });
        this.setTabActive(self);
    }

    render() {
        return (
            <div className="menu">
                <p onClick={ e => this.changeTab(e.target) }>Sugestão do Vendedor</p>
                <p onClick={ e => this.changeTab(e.target) }>Brinquedos</p>
                <p onClick={ e => this.changeTab(e.target) }>Camas e Casinhas</p>
                <p onClick={ e => this.changeTab(e.target) }>Coleiras</p>
                <p onClick={ e => this.changeTab(e.target) }>Ossos e Petiscos</p>
            </div>
        )
    }
}

export default Menu