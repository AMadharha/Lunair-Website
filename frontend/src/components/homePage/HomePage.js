import React from 'react';
import Nav from '../common/Nav';
import Image from './Image';
import Discover from './Discover';
import Featured from './Featured';
import AboutUs from './AboutUs';
import Shipping from './Shipping';
import Footer from '../common/Footer';

function HomePage() {
    return (
        <div>
            <Image />
            <Discover />
            <Featured />
            <AboutUs />
            <Shipping />
        </div>
    );
}

export default HomePage;