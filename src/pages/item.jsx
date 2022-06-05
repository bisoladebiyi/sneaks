import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetch } from "../useFetch";
import MenuItem from "@mui/material/MenuItem";
import {  FavoriteBorderRounded } from '@mui/icons-material'
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/feature/cart/cartSlice";
import alt from '../images/alt.jpeg'
import { TailSpin } from "react-loader-spinner";

const Item = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [size, setSize] = useState(38)
  const [qty, setQty] = useState(1)
  const [btnText, setBtnText] = useState("add to cart")
  const { cart } = useSelector((store) => store.cart)
  const navigate = useNavigate()
  
  useEffect(() => {
    fetch(`https://v1-sneakers.p.rapidapi.com/v1/sneakers/${id}`).then((res) =>
      setProduct(res.data.results[0])
    )
    // console.log(product)
  }, [id]);
  useEffect(()=> {
    if(cart.some(({payload}) => payload.id === id)){
        setBtnText("added to cart")
    }
  },[cart])
  const dispatch = useDispatch()
  const addItemToCart = () => {
      if(btnText === "add to cart"){
        dispatch(addToCart({...product, qty, size}))
      }else{
          navigate('/cart')
      }
      
  }
  return (
    <div className="grid place-items-center h-full px-10 pt-28 lg:pt-0 lg:px-0">
        {product ? <div className="lg:flex">
     
      <div className="lg:w-1/2 mb-6 lg:mb-0">
 
      <div className="w-full relative">
      <button className="absolute left-0 bottom-0 p-1 sm:p-2 bg-amber-500"><FavoriteBorderRounded className="text-red-800 scale-75 sm:scale-100" /></button>
      <img className="w-full" src={product?.media.imageUrl ? product?.media.imageUrl : alt} alt="" />
      </div>
      
      </div>
       
        <div className="lg:ml-10 lg:pr-28 lg:w-1/2 pb-10 lg:pb-0 ">
          <div className="border-b border-gray-200 pb-4">
            <p className="uppercase font-medium text-lg sm:text-2xl mb-2">
              {product?.title}
            </p>
            <div className="flex justify-between w-5/6 mb-3">
              <p className="text-green-700 uppercase text-sm sm:text-base">{product?.brand}</p>
              <p className="text-xs sm:text-sm text-gray-500">( for {product?.gender} )</p>
            </div>
            <p className="font-semibold text-xl">$ {product?.retailPrice}.00</p>
            <p className="text-gray-600 text-sm mt-4 leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus provident sequi saepe. Commodi sapiente laudantium
              molestiae harum animi, voluptatum dolore nostrum, id nobis qui,
              illo voluptates perspiciatis corrupti quasi itaque quidem.
            </p>
          </div>
          <div className="flex items-center border-b border-gray-200 py-4">
            <div className="flex items-center">
                <label htmlFor="" className="font-semibold">Size:</label>
              <FormControl sx={{ m: 1, minWidth: 80 }} className="ml-2 sm:ml-4 sm:scale-100 scale-75"  size="small">
                <Select
                  id="demo-simple-select-autowidth"
                    value={size}
                    onChange={(e)=> setSize(e.target.value)}
                  autoWidth
                >
                    {[38, 39, 40, 41, 42, 43, 44, 45, 46].map((siz) => <MenuItem value={siz}>{siz}</MenuItem> )}
                </Select>
              </FormControl>
            </div>
            <div className="flex items-center ml-3 sm:ml-5">
                <label htmlFor="" className="font-semibold">Qty:</label>
              <FormControl sx={{ m: 1, minWidth: 80 }} className="ml-2 sm:ml-4 sm:scale-100 scale-75"  size="small">
                <Select
                  id="demo-simple-select-autowidth"
                    value={qty}
                    onChange={(e)=> setQty(e.target.value)}
                  autoWidth
                >
                    {Array.from({length: 10}, (_, i) => i + 1).map((siz) => <MenuItem value={siz}>{siz}</MenuItem> )}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="flex justify-between items-center pt-4">
          <p className="font-semibold text-xl">₦ {product?.retailPrice * qty}.00</p>
          <button className={`${btnText === 'add to cart' ? 'bg-green-600' : 'bg-green-700'} text-white px-10 py-2 text-sm sm:text-base sm:py-3 uppercase`} onClick={addItemToCart}>
              {btnText}
          </button>
          </div>
        </div>
      </div> : <TailSpin color="rgb(21 128 61)" height={80} width={80} />}
      
    </div>
  );
};

export default Item;
