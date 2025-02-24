import { useContext, useState } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from './client/components/ProductList';
import Navbar from './client/components/NavBar';
import Cart from "./client/components/Cart";
import { Carousel } from './client/components/Carousel';
import { Filters } from './client/components/Filters';
import { FiltersContext } from './client/context/filters';
import { CartProvider } from './client/context/cart';
import { SkincarePage } from './client/pages/SkincarePage';
import { DecorationPage } from './client/pages/DecorationPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NotFound } from './client/components/NotFound';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setFilters } = useContext(FiltersContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <Router >
        <Navbar setSearchTerm={setSearchTerm} setShowCart={setShowCart} showCart={showCart} />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <Filters setFilters={setFilters} />
              <ProductList searchTerm={searchTerm} />
            </>
          } />
          <Route path='/shop' element={
            <>
              <Filters />
              <ProductList searchTerm={searchTerm} />
            </>
          } />
          <Route path='/skincare' element={<SkincarePage />} />
          <Route path='/decoration' element={<DecorationPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
