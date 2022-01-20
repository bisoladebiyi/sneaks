import React, { useEffect, useRef, useState } from 'react'
import img1 from '../images/pexels-grailify-4495416.jpg'
import { fetch } from '../useFetch';
import alt from '../images/alt.jpeg'

const url = 'https://v1-sneakers.p.rapidapi.com/v1/sneakers'
const params = {
  limit: '70'
}

const Shop = () => {
    const [ data, setData ] = useState(null)
    const [ text, setText ] = useState("All")
    const shopRef = useRef(null)
    useEffect(()=>{
      fetch(url, params).then((res) => {
          setData(res)
        //   console.log(data)
    })
    },[])
    const filter = (e) => {
        e.preventDefault()
        setText(e.target.innerText)
        shopRef.current.scrollIntoView({
            behavior: "smooth",
        })
    }
    return (
        <div className="h-full">
            <div className="header h-4/6 relative">
            <img className='h-full w-full object-cover' src={img1} alt="" />
            <p className="absolute text-white font-extrabold  top-1/2 left-1/2 -translate-x-1/2 z-50 text-4xl">SHOP</p>
            </div>
            <div className="flex px-52 mt-20 justify-between border-b border-gray-200 pb-10">
                <button onClick={filter} className="p-2 w-20 bg-green-200 text-gray-600 text-sm rounded">All</button>
                <button onClick={filter} className="p-2 w-20 bg-gray-200 text-gray-600 text-sm rounded">Puma</button>
                <button onClick={filter} className="p-2 w-20 bg-gray-200 text-gray-600 text-sm rounded">Nike</button>
                <button onClick={filter} className="p-2 w-20 bg-gray-200 text-gray-600 text-sm rounded">Jordan</button>
                <button onClick={filter} className="p-2 w-20 bg-gray-200 text-gray-600 text-sm rounded">Reebok</button>
                <button onClick={filter} className="p-2 w-20 bg-gray-200 text-gray-600 text-sm rounded">Adidas</button>
                <button onClick={filter} className="p-2 w-20 bg-gray-200 text-gray-600 text-sm rounded">Diadora</button>
                <button onClick={filter} className="p-2 w-20 bg-gray-200 text-gray-600 text-sm rounded">Converse</button>
                <button onClick={filter} className="p-2 w-20 bg-gray-200 text-gray-600 text-sm rounded">New Balance</button>
            </div>
            <div className="overflow-scroll h-4/6">
            <div className="grid grid-cols-3 w-11/12 mx-auto gap-y-10 gap-x-7 mt-10 pb-20 " ref={shopRef}>
                {data?.data.results.filter((result)=> {
                    const { brand } = result
                    if(text==="All"){
                        return result
                    }else if(brand.toLowerCase() === text.toLowerCase()){
                        return result
                    }
                }).map(({id, retailPrice, media, brand, title }) => (
                    <div key={id} className="">
                        <div className="bg-white h-56 grid place-items-center">
                        <img className="w-5/6" src={media ? media.imageUrl : alt} alt="shoe" />
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
            
           
        </div>
    )
}

export default Shop
