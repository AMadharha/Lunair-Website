import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './components/shop/Shop'
import ContactUs from './components/contactUs/ContactUs'
import Account from './components/account/Account'
import Cart from './components/cart/Cart'
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import HomePage from './components/homePage/HomePage';

function App() {
    const { productItems } = data;

    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<Products productItems={productItems} />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/account" element={<Account />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;