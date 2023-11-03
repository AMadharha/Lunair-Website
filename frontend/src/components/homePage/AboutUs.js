import React from 'react'
import '../assets/css/global.css'
import styles from '../assets/css/AboutUs.module.css'

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <h1>ABOUT US</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere odio id sem consequat ultrices. Aenean in mattis leo. Vestibulum placerat fermentum nunc at scelerisque. Vivamus et feugiat dolor. Morbi sagittis metus felis, vitae varius felis gravida quis. Nulla rutrum tincidunt ullamcorper. Nam eget mi mattis, commodo justo eu, posuere.
                </p>
            </div>
        </div>
    )
}

export default AboutUs