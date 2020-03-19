import React from 'react'

import './ContentMenu.css'

import { IoMdArrowDropdown } from 'react-icons/io'

const ContentMenuAll = () => {
    return(
        <div className="menu">
            <ul className="leftMenu">
                <li><a href='/#'>Potions <IoMdArrowDropdown/></a></li>
                <li><a href='/#'>Ingredients <IoMdArrowDropdown/></a></li>
                <li><a href='/#'>Books <IoMdArrowDropdown/></a></li>
                <li><a href='/#'>Suplies <IoMdArrowDropdown/></a></li>
                <li><a href='/#'>Charms <IoMdArrowDropdown/></a></li>
                <li><a href='/#'>Clearence!</a></li>
            </ul>
            <div className="userAction">
                <a href='/#'>Sign In</a>
                <span>or</span>
                <a href='/#'>Sing Up</a>
            </div>
        </div>
    )
}

export default ContentMenuAll