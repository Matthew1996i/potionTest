import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import axios from 'axios'

import Card from '../Card'
import LightBox from '../Lightbox'
import './Main.css'


const Main = () => {
    
    const [ dataCard, setCard ] = useState({
        itens: {}
    })

    const dispatch = useDispatch()

    const data = async () => {

        const url = 'https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json'

        await axios.get(url)
            .then(resp => {
                setCard({
                    ...dataCard,
                    itens: resp.data.potions
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        data()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const addCart = () => {
        dispatch({
            type: 'ADD_CART_VALUE'
        })

        const modal = document.getElementById('lightBoxContent')
        modal.style.display = "none"
    }

    const openModal = info => {
        const modal = document.getElementById('lightBoxContent')
        modal.style.display = "flex"

        dispatch({
            type: 'READ_ITEM',
            item: {...info}
        })
    }

    const closeModal = () => {
        const modal = document.getElementById('lightBoxContent')
        modal.style.display = "none"
    }

    const { itens } = dataCard
    return(
        <div className="prodPage">
            <LightBox close={closeModal} add={addCart}/>
            <h2>Potions</h2>
            <ul className="dashboard">
                {
                    Object.keys(itens).map(item => {

                        return <Card
                                    key={itens[item].id} 
                                    name={itens[item].name} 
                                    price={itens[item].price }
                                    img={process.env.PUBLIC_URL + `/images/products/${itens[item].image}`}
                                    click={() => openModal(itens[item])}
                                />
                        
                    })
                }
            </ul>
        </div>
    )
}

export default Main