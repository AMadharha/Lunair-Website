import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/global.css'
import styles from '../assets/css/Footer.module.css'
import instagram from '../assets/images/instagram.png'
import tiktok from '../assets/images/tiktok.png'
import instagramHover from '../assets/images/instagram-hover.png'
import tiktokHover from '../assets/images/tiktok-hover.png'

const Footer = () => {
    const [isInstagramHovered, setInstagramHovered] = useState(false);
    const [isTikTokHovered, setTikTokHovered] = useState(false);

    const scrollToTop = () => {
        const scrollDuration = 500; // Adjust the duration as needed
        const startTime = performance.now();
        const startY = window.scrollY;
        const distance = -startY;
        
        function animateScroll(currentTime) {
            const elapsed = currentTime - startTime;
            const scrollProgress = Math.min(elapsed / scrollDuration, 1);
            window.scrollTo(0, startY + distance * easeOutCubic(scrollProgress));

            if (scrollProgress < 1) {
                window.requestAnimationFrame(animateScroll);
            }
        }

        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }

        window.requestAnimationFrame(animateScroll);
    };

    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.quickLinks}>
                        <h1 className={styles.header}>Quick Links</h1>
                        <button className={styles.linkButton} onClick={scrollToTop}>Back to Top</button>
                        <Link to="/shop" className={styles.link}>Shop</Link>
                        <Link to="/contact" className={styles.link}>Contact Us</Link>
                    </div>
                    <div className={styles.socialMedia}>
                        <a href="https://www.instagram.com/lunair.co/" target="_blank" rel="noreferrer">
                            <img
                                src={isInstagramHovered ? instagramHover : instagram}
                                alt="Instagram Logo"
                                className={styles.socialIcon}
                                onMouseEnter={() => setInstagramHovered(true)}
                                onMouseLeave={() => setInstagramHovered(false)}
                            />
                        </a>
                        <a href="https://www.tiktok.com/@lunairco/" target="_blank" rel="noreferrer">
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
        </div>
    )
}

export default Footer