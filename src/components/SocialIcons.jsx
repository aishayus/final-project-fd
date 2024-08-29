import React from 'react'
import { Link } from 'react-router-dom'
import { RiYoutubeFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";

const SocialIcons = () => {
    return (
        <div className='flex gap-6 pr-4'>
            <Link to={''} className='text-[#08d9d6] text-2xl hover:translate-y-1 transition-all duration-500'><RiYoutubeFill /></Link>
            <Link to={''} className='text-[#f08a5d] text-2xl hover:translate-y-1 transition-all duration-500'><RiInstagramFill /></Link>
            <Link to={''} className='text-[#ff2e63] text-2xl hover:translate-y-1 transition-all duration-500'><RiWhatsappFill /></Link>
        </div>
    )
}

export default SocialIcons
