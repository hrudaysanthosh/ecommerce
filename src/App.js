import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Products from './views/Products';
import ProductDetails from './views/ProductDetails';
import Footer from './components/Footer';
import Cart from './views/Cart';
import Users from './views/Users';
import Register from './views/Register';
import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/users" element={<Users/>}/>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/product-details/:productName" element={<ProductDetails/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
