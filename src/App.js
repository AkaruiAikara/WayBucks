import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

export default function App() {
  const [isLogin, setIsLogin] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? true : false;
  });
  return (
    <div className="container mx-auto my-6">
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} setIsLogin={setIsLogin}/>} />
        <Route path="detail" element={<Detail isLogin={isLogin} setIsLogin={setIsLogin}/>} />
        <Route path="cart" element={<Cart isLogin={isLogin} setIsLogin={setIsLogin}/>} />
      </Routes>
    </div>
  )
}
