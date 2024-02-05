import { useState } from "react";
import './style.css'
const Form = (props) => {

    const [inputs, setInputs] = useState({
        image: '',
        value: '',
        suit: ''
    })

    //  Criasção inicial da função, lidando com apenas 1 input
    //  const handleInputChange = (event) => {
    //     setInputs({
    //         image: event.target.value
    //     })
    // }

    // Função lidando com varios inputs
    const handleInputChange = (event) => {
        // Neste ponto criando a desestruturação individucal pois caso você esteja tranlhando com checkbox o value 
        // traz dados diferentes
        const { target } = event
        const { name } = target
        const { value } = target
        setInputs({
            // concatenando com o spread
            ...inputs,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addCard(inputs)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="div-Card">
                    <label  htmlFor="image">Digite o url da carta: </label>
                    <input  type="text" 
                            id="image" 
                            name="image" 
                            
                            onChange={handleInputChange} 
                            value={inputs.image} />
                </div>
                <div className="div-Card">
                    <label  htmlFor="value">Digite o nome da carta: </label>
                    <input  type="text" 
                            id="value" 
                            name="value" 
                            onChange={handleInputChange} 
                            value={inputs.value} />
                </div>
                <div className="div-Card">
                    <label  htmlFor="suit">Digite o Nipe da carta: </label>
                    <input  type="text" 
                            id="suit" 
                            name="suit" 
                            onChange={handleInputChange} 
                            value={inputs.suit} />
                </div>
                <input type="submit" className="btn"/>
            </form>
        </>
    )
}

export default Form