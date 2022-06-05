import {  FavoriteBorderRounded, ShoppingBagOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { amountItems : amount } = useSelector((store) => store.cart)
    const navigate = useNavigate()
    return (
        <div className="fixed top-0 z-50 flex justify-between w-full items-center px-10 xl:px-28 pt-10">
            <Link to="/"><p className="font-extrabold text-green-700 text-xl">SNEAKS</p></Link>
            {/* <input placeholder="Search" className="rounded px-4 w-5/12 py-2 text-sm outline-none search" /> */}
            <div className="flex items-center">
                <button><FavoriteBorderRounded className="scale-90 text-red-800" /></button>
            <button className='relative' onClick={() => navigate('/cart')}><ShoppingBagOutlined className="ml-4 sm:ml-6 scale-90 text-gray-600" />
            <div className='w-5 h-5 bg-amber-400 rounded-full absolute -top-1.5 grid place-items-center text-sm -right-2'>{amount}</div>
            </button>
            
            <Avatar className="scale-90 ml-4 sm:ml-6" />
            </div>
        </div>
    )
}

export default Navbar
