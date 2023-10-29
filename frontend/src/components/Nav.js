import React from "react";
import styles from './assets/css/nav.module.css';
import logo from "./assets/images/lunair-logo.svg"; 
import userIcon from "./assets/images/user.png";
import cartIcon from "./assets/images/shopping-cart.png";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="Lunair Logo" className={styles.logo} />
        <div className={styles.links}>
          <a>Shop</a>
          <a>Contact Us</a>
        </div>
        <div className={styles.icons}>
          <img src={userIcon} alt="User Icon" className={styles.userIcon} />
          <img src={cartIcon} alt="Shopping Cart Icon" className={styles.cartIcon} />
        </div>
      </nav>
    </header>
  );
};

export default Header;