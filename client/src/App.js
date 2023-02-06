import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Home from './pages/Home';
import Admin from './pages/Admin';
import ProductDetails from './pages/ProductDetails';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position='top-center'/>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>

          <Route path = "/admin" element = {<Admin/>}/>
          <Route path = "/admin/products" element = {<ProductDetails/>}/>
          <Route path = "/admin/products/addProduct" element = {<AddProduct/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
