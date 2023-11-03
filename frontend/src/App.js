import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;