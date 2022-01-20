
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Shop from './pages/shop';

function App() {
 
  return (
    <Router>
          <div className="App">
          <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={ <Shop />} />
      
     
            </Routes>
       
    </div>
    </Router>

  );
}

export default App;
