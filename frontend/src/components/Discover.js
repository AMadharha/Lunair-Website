import React from 'react'
import './assets/css/global.css'
import styles from './assets/css/Discover.module.css'

const Discover = () => {
    return (
        <div className={styles.container}>
            <div className={styles.discoverContainer}>
                <h1>Discover The Collection</h1>
                <button className={styles.shopButton}>SHOP ALL HOODIES</button>
            </div>
        </div>
    )
}

export default Discover