import React from 'react'

import './Card.css'

const Card = props => {
    return (
        <div className="cardContent" onClick={props.click}>
            <img src={`${props.img}`} alt={props.name}/>
            <div className="specsProd">
                <p><strong>{props.name}</strong> - </p>
                <p className="price">${props.price}</p>
            </div>
        </div>
        
    )
}

export default Card