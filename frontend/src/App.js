import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './components/shop/Shop'
import ContactUs from './components/contactUs/ContactUs'
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import HomePage from './components/homePage/HomePage';

function App() {
    return (
        <Router>
            <Nav />
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;