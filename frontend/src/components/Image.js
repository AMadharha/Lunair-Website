import React from 'react'
import './assets/css/global.css'
import styles from './assets/css/image.module.css'
import logo from './assets/images/temp-display.png'


const Image = () => {
    return (    
        <div className={styles.container}>
            <img src={logo} alt="Display" className={styles.display} />
        </div>
    )
}

export default Image