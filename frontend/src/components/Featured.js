import React, { useState } from 'react';
import './assets/css/global.css';
import styles from './assets/css/Featured.module.css';
import arrowLeft from './assets/images/arrow-left.png';
import arrowRight from './assets/images/arrow-right.png';
import hoodie1 from './assets/images/gojo-white.png';
import hoodie2 from './assets/images/levi-white.png';
import hoodie3 from './assets/images/sasuke-black.png';

const Featured = () => {
    const [transitioning, setTransitioning] = useState(false);
    const [direction, setDirection] = useState(null); 
    const [currentHoodie, setCurrentHoodie] = useState(0);

    const hoodies = [
        {
            image: hoodie1,
            name: "GOJO",
            price: "$60.00 CAD",
            description: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
            image: hoodie2,
            name: "LEVI",
            price: "$60.00 CAD",
            description: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
            image: hoodie3,
            name: "SASUKE",
            price: "$60.00 CAD",
            description: "Lorem ipsum dolor sit amet, consectetur"
        },
    ];

    const nextHoodie = () => {
        setDirection("right");
        setTransitioning(true);
        setTimeout(() => {
            setCurrentHoodie((prevHoodie) => (prevHoodie + 1) % hoodies.length);
            setTransitioning(false);
        }, 300);
    }
    
    const prevHoodie = () => {
        setDirection("left");
        setTransitioning(true);
        setTimeout(() => {
            setCurrentHoodie((prevHoodie) => (prevHoodie - 1 + hoodies.length) % hoodies.length);
            setTransitioning(false);
        }, 300);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>FEATURED</h1>
            <div className={styles.hoodieDisplay}>
                <img src={arrowLeft} alt="Left Arrow" className={styles.arrow} onClick={prevHoodie} />

                <div className={`${styles.contentContainer} ${transitioning ? (direction === "left" ? styles.leaving : styles.entering) : ''}`}>
                    <img src={hoodies[currentHoodie].image} alt="Hoodie" className={styles.hoodie} />
                    <div className={styles.details}>
                        <h2>{hoodies[currentHoodie].name}</h2>
                        <p>{hoodies[currentHoodie].price}</p>
                        <p>{hoodies[currentHoodie].description}</p>
                    </div>
                </div>

                <img src={arrowRight} alt="Right Arrow" className={styles.arrow} onClick={nextHoodie} />
            </div>
            
        </div>
    );
};

export default Featured;