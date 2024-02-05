// Componente de Classe
import { Component } from "react";
import './panel.css'


class Panel extends Component{

    constructor(){
        super()
        this.state = {
            title: 'Fundação'
        }
    }

    render(){
        return(
            <section className="panel" onClick={() => this.setState({title: 'Temporada 2'})}>
                <h2><a href='https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3' target="_blank">{this.state.title}</a></h2>
            </section>
        )
    }
}

export default Panel