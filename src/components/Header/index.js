import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { TiThMenu } from 'react-icons/ti'
import { MdClose } from 'react-icons/md'

import './Header.css'

import Logo from '../Logo'
import Search from '../Search'
import Cart from '../Cart'
import ContentMenuAll from '../ContentMenuAll'


const Header = () => {
    const header = useSelector(state => state)

    const [ display, setDisplay ] = useState({
        stateDisplay: true,
    })

    const showMenu = () =>{
        const state = display.stateDisplay

        const withoutMenu = document.getElementById('withoutMenu')
        const menuMobileOpen = document.getElementById('menuMobileOpen')


        if(state){
            menuMobileOpen.style.display = 'flex'
            withoutMenu.style.display = 'none'
        }else{
            menuMobileOpen.style.display = 'none'
            withoutMenu.style.display = 'flex'
        }

        setDisplay({
            stateDisplay: !state
        })

        
    }
    

                
        
        return(
            <>
                <div id="withoutMenu" className="contentMenuMobile">
                    <div className="content-aside-menu">
                        <TiThMenu className="hamburgerMenu" onClick={showMenu}/>
                        <Logo />
                        <Cart count={header.count}/>
                    </div>
                    <h5>Free shipping on orders over $50</h5>
                </div>

                <div id="menuMobileOpen" className="contentMenuMobile">
                    <div className="content-aside-menu">
                        <MdClose className="closeMenu" onClick={showMenu}/>
                        <Search />
                    </div>
                    <ContentMenuAll/>
                </div>

                <div className="navNavigator">
                    <div className="content-aside-menu">
                        <Logo />
                        <Search />
                        <Cart count={header.count}/>
                    </div>
                    <ContentMenuAll />
                </div>
            </>
        )
    
}

export default Header