/* eslint-disable array-callback-return */
import React, { useEffect, useRef, useState } from 'react'
import img1 from '../images/pexels-grailify-4495416.jpg'
import { fetch } from '../useFetch';

import { Link } from 'react-router-dom';
import ItemCard from '../components/itemCard';
import { TailSpin } from 'react-loader-spinner';


const url = 'https://v1-sneakers.p.rapidapi.com/v1/sneakers'
const params = {
  limit: '70'
}

const Shop = () => {
    const [ data, setData ] = useState()
    const [ text, setText ] = useState("All")
    const [ results, setResults ] = useState()
    const shopRef = useRef(null)
    useEffect(()=>{
      fetch(url, params).then((res) => {
          setData(res.data.results)
          setResults(res.data.results)
     })
    },[])
    const filter = (e) => {
        e.preventDefault()
        setText(e.target.innerText)
        shopRef.current.scrollIntoView({
            behavior: "smooth",
        })
        if(e.target.innerText !== 'All'){
            setData(results?.filter(({ brand }) => brand === e.target.innerText ))
        }else{
            setData(results)
        }
        
    }
    const tabs = [
       'All',
       'Puma',
       'Nike',
       'Jordan',
       'Reebok',
       'adidas',
       'Diadora',
       'Converse',
       'New Balance'
    ]
    return (
        <div className="h-full">
            <div className="header h-4/6 relative">
            <img className='h-full w-full object-cover' src={img1} alt="" />
            <p className="absolute text-white font-extrabold  top-1/2 left-1/2 -translate-x-1/2 z-50 text-4xl">SHOP</p>
            </div>
            <div className="flex pr-5 xl:px-52 mt-20 justify-between border-b border-gray-200 pb-10 overflow-x-scroll"> 
            {tabs.map((tab) => (
                <button onClick={(e) => filter(e)} className={`p-2 px-3 w-20 ${text === tab ? 'bg-green-200' : 'bg-gray-200'} text-gray-600 text-xs rounded ml-5`}>{tab}</button> 
            ))}
            </div>
            <div className="overflow-scroll h-5/6">
                {data ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-11/12 mx-auto gap-y-10 gap-x-7 mt-10 pb-20 " ref={shopRef}>
                {data[0] ? data?.map(({id, retailPrice, media, brand, title }) => (
                    <Link to={`/shop/item/${id}`} key={id}>
                        <ItemCard id={id} retailPrice={retailPrice} media={media} brand={brand} title={title} />
                    </Link>
                  
                )) : <p className='col-span-3 text-center'>Nothing to see here</p>}
            </div> : <div className='grid place-items-center pt-5'> <TailSpin color="rgb(21 128 61)" height={80} width={80} /> </div>  }
            
            </div>
            
           
        </div>
    )
}

export default Shop
