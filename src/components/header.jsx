import React from 'react'
import { Link } from 'react-router-dom'

import img2 from '../images/pexels-madvortex-9214280.jpg'
import img3 from '../images/pexels-ray-piedra-1456706.jpg'



const Header = () => {
    return (
        <div className="w-full h-full relative">
            <div className="flex h-full header relative -ml-72">
                <img className="h-full"  src={img2} alt="" />
                <img className="h-full" src={img3} alt="" />
            </div>
            <div className="absolute top-1/3 h-3/6 left-32 shop w-4/12 p-8 bg-background header-text">
                <p className="text-2xl text-gray-700 uppercase font-bold leading-8 mt-3">High-Quality Sneakers Just For You</p>
                <p className="text-gray-500 mt-5 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque mollitia esse vero eaque modi sint assumenda ratione voluptate. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to="/shop"><button className="p-3 bg-green-400 text-white w-full mt-6 rounded">SHOP NOW</button></Link>

            </div>
        </div>
    )
}

export default Header
