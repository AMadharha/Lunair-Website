import React from 'react';
import Image from './Image';
import Discover from './Discover';
import Featured from './Featured';
import AboutUs from './AboutUs';
import Shipping from './Shipping';

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