import {useState} from 'react';
import ProductList from './client/components/ProductList';
import Navbar from './client/components/NavBar';
import { Carousel } from './client/components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Navbar
        cartCount={cartCount}
       />
      <Carousel />
      <ProductList
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
    </div>
  );
};

export default App;