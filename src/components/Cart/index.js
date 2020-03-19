import React from 'react'

import './Cart.css'

import SubtitleCart from '../SubtitleCart'

import { GiShoulderBag } from 'react-icons/gi'

const Cart = props => {
    return(
        <div className="cartContent">
            <SubtitleCart className="subtitle"/>
            <div className="bagContent">
                <GiShoulderBag size="50" color="#523468"/>
                <div className="bag">
                    <h2 style={{margin: 5 + 'px'}}>BAG:</h2>
                    <h2 style={{color: '#d84026'}}>{props.count}</h2>
                </div>
            </div>
        </div>
    )

}

export default Cart