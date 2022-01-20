import {  FavoriteBorderRounded, ShoppingBagOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="fixed top-0 z-50 flex justify-between w-full items-center px-28 pt-10">
            <Link to="/"><p className="font-extrabold text-green-700 text-xl">SNEAKS</p></Link>
            {/* <input placeholder="Search" className="rounded px-4 w-5/12 py-1.5 text-xs outline-none search" /> */}
            <div className="flex items-center">
                <button><FavoriteBorderRounded className="scale-90 text-red-800" /></button>
            <button><ShoppingBagOutlined className="ml-6 scale-90 text-gray-600" /></button>
            
            <Avatar className="scale-90 ml-6" />
            </div>
        </div>
    )
}

export default Navbar
