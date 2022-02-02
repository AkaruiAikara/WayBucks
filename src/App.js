import './App.css';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import ListProducts from './components/ListProducts';

export default function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <ListProducts />
    </div>
  )
}
