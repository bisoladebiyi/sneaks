import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { fetch } from '../useFetch';

const url = 'https://v1-sneakers.p.rapidapi.com/v1/sneakers'
const params = {
  limit: '24'
}



const ShopSection = () => {

    const [ data, setData ] = useState(null)
    useEffect(()=>{
      fetch(url, params).then((res) => {
          setData(res)
        //   console.log(data)
    })
    },[])
  
    return (
        <div className="text-center">
            <p className="text-center text-3xl font-bold">SHOP</p>
            <div className="grid grid-cols-3 w-11/12 mx-auto gap-y-10 gap-x-7 mt-10">
                {data?.data.results.slice(15,24).map(({id, retailPrice, media, brand, title }) => (
                    <div key={id} className="">
                        <div className="bg-white h-56 grid place-items-center">
                        <img className="w-5/6" src={media.imageUrl} alt="shoe" />
                        </div> 
                        <div className="mt-5">
                        <p className="text-xs text-left text-gray-500 mb-2">{brand}</p>
                        <p className="font-semibold text-left text-sm text-gray-600">{title}</p>
                        <p className="text-xs text-left text-gray-500 mt-2">${retailPrice}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
            <Link to="/shop"><button className=" p-3 bg-green-400 text-white w-32 m-20 rounded">Visit Shop</button></Link>
        </div>
    )
}

export default ShopSection
    