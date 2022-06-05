import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { FormControl, MenuItem, Select } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Link } from "react-router-dom";
import { changeQty, changeSize, clearCart, removeFromCart } from "../redux/feature/cart/cartSlice";
import PaystackPop from '@paystack/inline-js'
import alt from '../images/alt.jpeg'
const Cart = () => {
  const { cart, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch()
  const paystack = new PaystackPop()
//   useEffect(() => {

//   }, []);
    const removeItem = (id) => {
        dispatch(removeFromCart(id))
    }
    const checkOut = () => {
        paystack.newTransaction({
            key:'pk_test_350b9e63f19c99738ef08e2a2e61ffcafc5d5204',
            amount: total * 100,
            email: 'customer@mail.com',
            currency: 'NGN'
        })
    }
  return (
    <div className="pt-32 h-full xl:overflow-hidden">
      <div className="px-10 xl:px-28 xl:flex justify-between relative xl:h-full">
        <div className="overflow-auto xl:h-full cartProduct">
          {cart[0] ? cart?.map(({ payload }) => (
            <div
              key={payload.id}
              className="xl:flex justify-between items-center border-b border-gray-200 py-7 relative"
            >
              <div className="flex items-center productName">
                <img
                  src={payload.media.smallImageUrl ? payload.media.smallImageUrl : alt}
                  className="w-28 rounded"
                  alt=""
                />
                <div className="ml-5">
                  <p className="text-gray-400 text-xs uppercase">
                    {payload.brand}
                  </p>
                  <p className="uppercase font-medium text-sm">
                    {payload.title}
                  </p>
                </div>
              </div>
              <div
                className="sm:flex justify-between items-center xl:pr-7 mt-4 xl:mt-0 productInfo"
              >
                <div className="flex items-center">
                  <label htmlFor="" className="font-semibold text-xs">
                    Size:
                  </label>
                  <FormControl
                    sx={{ m: 1, minWidth: 80 }}
                    className="scale-75"
                    size="small"
                  >
                    <Select
                      id="demo-simple-select-autowidth"
                      value={payload.size}
                      onChange={(e)=>{ 
                        const data = {id:payload.id, newSize:e.target.value}
                        dispatch(changeSize(data))}
                  }
                      autoWidth
                    >
                      {[38, 39, 40, 41, 42, 43, 44, 45, 46].map((siz) => (
                        <MenuItem value={siz}>{siz}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <p className="font-medium text-sm">
                ₦ {payload.retailPrice * payload.qty}.00
                </p>
                <div className="flex items-center sm:ml-5">
                  <label htmlFor="" className="font-semibold text-xs">
                    Qty:
                  </label>
                  <FormControl
                    sx={{ m: 1, minWidth: 80 }}
                    className="scale-75"
                    size="small"
                  >
                    <Select
                      id="demo-simple-select-autowidth"
                      value={payload.qty}
                      onChange={(e)=>{ 
                          const data = {id:payload.id, newQty:e.target.value}
                          dispatch(changeQty(data))}
                    }
                      autoWidth
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (siz) => (
                          <MenuItem value={siz} key={siz}>{siz}</MenuItem>
                        )
                      )}
                    </Select>
                  </FormControl>
                </div>
                <button onClick={()=> removeItem(payload.id)} className="absolute right-0 top-1/2 -translate-y-1/2">
                  <CloseRoundedIcon />
                </button>
              </div>
            </div>
          )) : <div className="h-4/6 grid place-items-center">
              <p className="text-gray-500 text-sm">Your cart is empty, go shopping!</p>
              </div>}
          <div className="pt-5 flex justify-between items-center">
            <Link to="/shop">
              <p className="flex items-center text-sm text-gray-500 font-semibold hover:text-green-600 cursor-pointer">
                <ArrowBackRoundedIcon className="scale-90 mr-3" /> Continue
                Shopping
              </p>
            </Link>
           {cart[0] && <p className="text-red-500 text-sm font-semibold  cursor-pointer" onClick={()=> dispatch(clearCart())}>Clear items</p>}
          </div>
        </div>
        <div>
            
        </div>
        <div className="cartCheckout mt-14 xl:mt-0" style={{ height:'auto' }}>
            <div className="bg-white rounded p-3 w-full">
             <p className="uppercase pb-1.5 border-b border-gray-200">
            cart summary
          </p>
          
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm">Subtotal</p>
            <p className="text-lg">₦ {total}.00</p>
          </div>
          <button className="w-full py-2 text-sm bg-green-600 rounded text-white mt-4 uppercase" onClick={checkOut}>checkout (₦ {total}.00)</button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
