import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./Components/Itemdetail/Itemdetail";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import Orders from "./Components/Orders/Orders";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
   
      <BrowserRouter>
         <div className="App">
          <Navbar />
        
        <Routes>
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Card/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
