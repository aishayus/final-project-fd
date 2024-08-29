import React, { useState } from 'react'
import { MdHomeFilled } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdContact } from "react-icons/io"

const Navbar = ({containerStyles}) => {

    const [isActive, setIsActive] = useState('home')

    return (
        <nav className={`${containerStyles}`}>
            <a href={'#home'} onClick={() => setIsActive('home')} className={isActive === 'home'? 'active-link' : ''}><div className='flexCenter gap-x-1'><MdHomeFilled /> Home</div></a>
            <a href={'#shop'} onClick={() => setIsActive('shop')} className={isActive === 'shop'? 'active-link' : ''}><div className='flexCenter gap-x-1'><FaShoppingBag /> Shop</div></a>
            <a href={'#contact'} onClick={() => setIsActive('contact')} className={isActive === 'contact'? 'active-link' : ''}><div className='flexCenter gap-x-1'><IoMdContact /> Contact</div></a>
        </nav>
    )
}

export default Navbar
