import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Cart from './pages/cart';
import Home from './pages/home';
import Item from './pages/item';
import Shop from './pages/shop';
import { cartTotal } from './redux/feature/cart/cartSlice';


function App() {
  const dispatch = useDispatch()
  const { cart } = useSelector((store) => store.cart)
  useEffect(()=> {
    dispatch(cartTotal())
  },[cart])
 
  return (
    <Router>
          <div className="App">
          <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={ <Shop />} />
            <Route path="/shop/item/:id" element={ <Item />} />
            <Route path="/cart" element={ <Cart />} />
            </Routes>
       
    </div>
    </Router>

  );
}

export default App;
