import React from 'react'

import { useSelector } from 'react-redux'

import './Lightbox.css'

const Lightbox = props => {

    const data = useSelector(state => state.item)

    return(
        <div id="lightBoxContent" className="lightBoxContent">
            <div className="infoContent">
                <img src={process.env.PUBLIC_URL + `/images/products/${data.image}`} alt={data.name}/>
                <div className="allInfo">
                    <h5 className="nameTitle"><strong>{data.name}</strong></h5>
                    <h5><strong>Use/Effect:</strong></h5>
                    <p>{data.effect}</p>
                    <h5><strong>Ingredients: </strong></h5>
                    <ul className="list-ingredients">
                        {(() => {
                            if(!data.ingredients){
                                return <li>Nenhum ingrediente</li>
                            }else{
                                return data['ingredients'].map(temp =>  <li key={temp}>{temp}</li> )
                            }
                        })()}
                    </ul>
                    <h5 ><strong>Price:</strong></h5>
                    <h5 style={{color: 'red'}}>{data.price}</h5>
                    <div className="buttonGroup">
                        <button onClick={props.add}> ADD TO CART</button>
                        <button className="btnCancelar" onClick={props.close}> CANCELAR</button>
                    </div>
                </div>
                <span onClick={props.close} className="close">&times;</span>
            </div>
        </div>
    )
}

export default Lightbox