import React, { useState } from 'react'
import './assets/css/global.css'
import styles from './assets/css/Footer.module.css'
import instagram from './assets/images/instagram.png'
import tiktok from './assets/images/tiktok.png'
import instagramHover from './assets/images/instagram-hover.png'
import tiktokHover from './assets/images/tiktok-hover.png'

const Footer = () => {
    const [isInstagramHovered, setInstagramHovered] = useState(false);
    const [isTikTokHovered, setTikTokHovered] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.footerContent}>
                <div className={styles.quickLinks}>
                    <h1 className={styles.header}>Quick Links</h1>
                    <a className={styles.link} href="#">Back to Top</a>
                    <a className={styles.link}>Shop</a>
                    <a className={styles.link}>Contact Us</a>
                </div>
                <div className={styles.socialMedia}>
                    <a href="https://www.instagram.com/lunair.co/" target="_blank">
                        <img
                            src={isInstagramHovered ? instagramHover : instagram}
                            alt="Instagram Logo"
                            className={styles.socialIcon}
                            onMouseEnter={() => setInstagramHovered(true)}
                            onMouseLeave={() => setInstagramHovered(false)}
                        />
                    </a>
                    <a href="https://www.instagram.com/lunair.co/" target="_blank">
                        <img
                            src={isTikTokHovered ? tiktokHover : tiktok}
                            alt="TikTok Logo"
                            className={styles.socialIcon}
                            onMouseEnter={() => setTikTokHovered(true)}
                            onMouseLeave={() => setTikTokHovered(false)}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer