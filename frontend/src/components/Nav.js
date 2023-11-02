import React from 'react'
import './assets/css/global.css'
import styles from './assets/css/Nav.module.css'
import logo from './assets/images/lunair-logo.svg'
import userIcon from './assets/images/user.png'
import cartIcon from './assets/images/shopping-cart.png'

const Nav = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="Lunair Logo" className={styles.logo} />
                <div className={styles.links}>
                    <a>Shop</a>
                    <a>Contact Us</a>
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
