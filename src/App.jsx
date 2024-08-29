import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Order from './components/Order';
import { useState } from "react";
import LoginPopUp from './components/LoginPopUp';

export default function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : <></>}
      <Header setShowLogin={setShowLogin} /> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />}/>
        </Route>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/order" element={<Order />}/>
      </Routes>
    </>
  )
}