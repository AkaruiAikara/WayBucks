import './App.css';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import ListProducts from './components/ListProducts';
import Modal from './components/Modal';

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="container mx-auto my-6">
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
      <Jumbotron />
      <ListProducts isLogin={isLogin} setIsLogin={setIsLogin}/>
      <Modal isLogin={isLogin} setIsLogin={setIsLogin}/>
    </div>
  )
}
