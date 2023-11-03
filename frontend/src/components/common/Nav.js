import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/global.css'
import styles from '../assets/css/Nav.module.css'
import logo from '../assets/images/lunair-logo.svg'
import userIcon from '../assets/images/user.png'
import cartIcon from '../assets/images/shopping-cart.png'

const Nav = () => {
    return (
        <header>
            <nav>
                <Link to="/" className={styles.logoContainer}>
                    <img src={logo} alt="Lunair Logo" className={styles.logo} />
                </Link>
                <div className={styles.links}>
                    <Link to="/shop" className={styles.page}>Shop</Link>
                    <Link to="/contact" className={styles.page}>Contact Us</Link>
                </div>
                <div className={styles.icons}>
                    <div className={styles.iconContainer}>
                        <img src={userIcon} alt="User Icon" className={styles.userIcon} />
                    </div>
                    <div className={styles.iconContainer}>
                        <img src={cartIcon} alt="Shopping Cart Icon" className={styles.cartIcon} />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav
