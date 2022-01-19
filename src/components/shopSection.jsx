import React, { useEffect, useState } from 'react'
import { fetch } from '../useFetch';

const url = 'https://v1-sneakers.p.rapidapi.com/v1/sneakers'
const params = {
  limit: '20'
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
        <div>
            <p className="text-center text-3xl font-bold">SHOP</p>
            <div className="grid grid-cols-4 w-5/6 mx-auto">
                {data?.data.results.map(({id, retailPrice, media, shoe, title }) => (
                    <div key={id} className="w-11/12 bg-gray-100 rounded shadow">
                        <img className="rounded" src={media.imageUrl} alt="" />
                        <div className="p-5">
                        <p>{shoe}</p>
                        <p>{title}</p>
                        <p>{retailPrice}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopSection
