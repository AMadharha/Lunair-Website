import React from "react";
import styles from './assets/css/nav.module.css';
// Assuming you have these images in your public or src folder
import logo from "./assets/images/lunair-logo.svg"; //
import userIcon from "./assets/images/user.png";
import cartIcon from "./assets/images/shopping-cart.png";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navigation}>
        <img src={logo} alt="Lunair Logo" className={styles.logo} />
        <a href="/shop">Shop</a>
        <a href="/contact-us">Contact Us</a>
      </nav>

      <div className={styles.icons}>
        <img src={userIcon} alt="User Icon" className={styles.userIcon} />
        <img src={cartIcon} alt="Cart Icon" className={styles.cartIcon} />
      </div>
    </header>
  );
};

export default Header;
