import { useState, useEffect } from "react";
import './style.css'
import Form from '../../components/forms/form'

async function createDeck() {
    const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const deck = await response.json()
    return deck.deck_id
}
async function getCards(deckId) {
    const response = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    return await response.json()
}
const CardsList = (props) => {
    return (
        <ul className="card-container">
            {
                props.cards.map((card, index) => {
                    return (
                        <li key={index}>
                            <img src={card.image} alt={card.value} title={card.suit} />
                        </li>

                    )
                })
            }
        </ul>
    )
}
// // Utilizando Ciclo de vida na pratica
// class DeckOfCardsClass extends Component {
//     constructor() {
//         console.log("Inicialização constructor")
//         super()
//         this.state = {
//             cards: []
//         }
//     }

//     async componentDidMount() {
//         console.log("Alimentação do constructor atraves do componentDidMount")
//         const deckId = await createDeck()
//         const data = await getCards(deckId)
//         this.setState({
//             cards: data.cards
//         })
//     }

//     render() {
//         console.log("Rederização de elementos")
//         return (
//             <section>
//                 <ul className="card-container">
//                     {
//                         this.state.cards.map((card, index) => {
//                             return (
//                                 <li key={index}>
//                                     <img src={card.image} alt={card.value} title={card.suit} />
//                                 </li>

//                             )
//                         })
//                     }
//                 </ul>
//             </section>
//         )
//     }
// }
// Utilizando Hooks
const DeckOfCards = () => {

    const [deck, setDeck] = useState({
        cards: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const deckId = await createDeck()
            const data = await getCards(deckId)
            setDeck({
                cards: data.cards
            })
        }

        fetchData()
    }, [])

    const addCard = (newCard) => {
        console.log(newCard)
        setDeck({
            cards: [...deck.cards, newCard]
        })
    }    
    return (
        <section>
                <Form addCard={addCard} />
                {deck.cards.length > 0 ? <CardsList cards={deck.cards}/>: 'Procurando cartas...'}
        </section>
    )
}
export default DeckOfCards