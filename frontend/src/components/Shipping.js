import React from 'react'
import styles from './assets/css/Shipping.module.css'
import map from './assets/images/canada-map.png'
import delivery from './assets/images/delivery.png'

const Shipping = () => {
    return (
        <div className={styles.container}>
            <div className={styles.shippingContainer}>
                <img src={map} alt="Canada Map" className={styles.map} />

                <div className={styles.details}>
                    <div className={styles.header}>
                        <img src={delivery} alt="Delivery Icon" className={styles.delivery} />
                        <h1>SHIPPING</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere odio id sem consequat ultrices. Aenean in mattis leo. Vestibulum placerat fermentum nunc at scelerisque. Vivamus et feugiat dolor. Morbi sagittis metus felis, vitae varius felis gravida quis. Nulla rutrum tincidunt ullamcorper. Nam eget mi mattis, commodo justo eu, posuere.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Shipping
