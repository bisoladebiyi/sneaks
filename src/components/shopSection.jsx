import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { fetch } from '../useFetch';
import ItemCard from './itemCard';

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
           {data ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-11/12 mx-auto gap-y-10 gap-x-7 mt-10">
                {data?.data.results.slice(15,24).map(({id, retailPrice, media, brand, title }) => (
                      <Link to={`/shop/item/${id}`} key={id}>
                      <ItemCard id={id} retailPrice={retailPrice} media={media} brand={brand} title={title} />
                  </Link>
                )) }
            </div> : <div className='grid place-items-center pt-5'> <TailSpin color="rgb(21 128 61)" height={80} width={80} /> </div> }
            <Link to="/shop"><button className=" p-3 bg-green-400 text-white w-32 m-20 rounded">Visit Shop</button></Link>
        </div>
    )
}

export default ShopSection
    