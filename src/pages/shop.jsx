import React, { useEffect, useState } from 'react'
import img1 from '../images/pexels-grailify-4495416.jpg'
import { fetch } from '../useFetch';
import alt from '../images/alt.jpeg'

const url = 'https://v1-sneakers.p.rapidapi.com/v1/sneakers'
const params = {
  limit: '60'
}

const Shop = () => {
    const [ data, setData ] = useState(null)
    useEffect(()=>{
      fetch(url, params).then((res) => {
          setData(res)
        //   console.log(data)
    })
    },[])
    return (
        <div className="h-full">
            <div className="header h-5/6 relative">
            <img className='h-full w-full object-cover' src={img1} alt="" />
            <p className="absolute text-white font-extrabold  top-1/2 left-1/2 -translate-x-1/2 z-50 text-4xl">SHOP</p>
            </div>
            <div className="grid grid-cols-3 w-11/12 mx-auto gap-y-10 gap-x-7 mt-10">
                {data?.data.results.slice(15,60).map(({id, retailPrice, media, brand, title }) => (
                    <div key={id} className="">
                        <div className="bg-white h-56 grid place-items-center">
                        <img className="w-5/6" src={media.imageUrl ? media.imageUrl : alt} alt="shoe" />
                        </div> 
                        <div className="mt-5">
                        <p className="text-xs text-left text-gray-500 mb-2">{brand}</p>
                        <p className="font-semibold text-left text-sm text-gray-600">{title}</p>
                        <p className="text-xs text-left text-gray-500 mt-2">${retailPrice}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
           
        </div>
    )
}

export default Shop
