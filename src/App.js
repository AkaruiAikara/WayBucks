import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="container mx-auto my-6">
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
