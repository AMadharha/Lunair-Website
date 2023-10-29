import React from 'react'
import styles from "./assets/css/Featured.module.css";
import arrowLeft from "./assets/images/arrow-left.png"
import arrowRight from "./assets/images/arrow-right.png"
import hoodie1 from "./assets/images/blue-hoodie-sample.png"

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>FEATURED</h1>
            <div className={styles.contentContainer}>
                <img src={arrowLeft} alt="Left Arrow" className={styles.arrow} />

                <img src={hoodie1} alt="Hoodie" className={styles.hoodie} />
                <div className={styles.details}>
                    <h2 className={styles.name}>HOODIE 1</h2>
                    <p className={styles.price}>$60.00 CAD</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere odio id sem consequat ultrices. Aenean in mattis leo. Vestibulum placerat fermentum nunc at scelerisque. Vivamus et feugiat dolor. Morbi sagittis metus felis, vitae varius felis gravida quis. Nulla rutrum tincidunt ullamcorper. Nam eget mi mattis, commodo justo eu, posuere.</p>
                </div>

                <img src={arrowRight} alt="Right Arrow" className={styles.arrow} />
            </div>
        </div>
    )
}

export default Featured