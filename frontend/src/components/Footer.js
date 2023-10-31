import React from 'react'
import './assets/css/global.css'
import styles from './assets/css/Footer.module.css'
import instagram from './assets/images/instagram.png'
import tiktok from './assets/images/tiktok.png'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerContent}>
                <div className={styles.quickLinks}>
                    <h1 className={styles.header}>Quick Links</h1>
                    <a className={styles.link}>Back to Top</a>
                    <a className={styles.link}>Shop</a>
                    <a className={styles.link}>Contact Us</a>
                </div>
                <div className={styles.socialMedia}>
                    <img src={instagram} alt="Instagram Logo" className={styles.socialIcon} />
                    <img src={tiktok} alt="tikTok Logo" className={styles.socialIcon} />
                </div>
            </div>
        </div>
    )
}

export default Footer