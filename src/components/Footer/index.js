import React from 'react'

import { FaFacebook, FaGooglePlus } from 'react-icons/fa'
import { AiFillTwitterCircle, AiOutlineCopyright } from 'react-icons/ai'
import { IoLogoPinterest } from 'react-icons/io'
import { TiSocialTumblerCircular } from 'react-icons/ti'


import './Footer.css'

const Footer = () => {
    return(
        <div className="footerContent">
            <div className="left">
                <ul className="option">
                    <li><a href="#/">COMPANY</a></li>
                    <li><a href="#/">CONTACT US</a></li>
                    <li><a href="#/">SHIPPING</a></li>
                    <li><a href="#/">RETURNS</a></li>
                    <li><a href="#/">CAREERS</a></li>
                </ul>
                <ul className="socialMedia">
                    <li><a href="#/"><FaFacebook/></a></li>
                    <li><a href="#/"><AiFillTwitterCircle/></a></li>
                    <li><a href="#/"><IoLogoPinterest/></a></li>
                    <li><a href="#/"><TiSocialTumblerCircular/></a></li>
                    <li><a href="#/"><FaGooglePlus/></a></li>
                </ul>
                <span><AiOutlineCopyright/> 2015 Merlin's Potions. All Rights Reserved</span>
            </div>
            <div className="right">
                <form className="formEmail" >
                    <p>Sign up for our Newsletter</p>
                    <p>Sign up for our Newsletter & get exclusive discounts!</p>
                    <div className="formInputGroup">
                        <input type="email" placeholder="Enter your email"/>
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Footer