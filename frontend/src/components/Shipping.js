import React from "react";
import styles from "./assets/css/Shipping.module.css";
import map from "./assets/images/canada-map.png";
import delivery from "./assets/images/delivery.png";

const Shipping = () => {
  return (
    <div className={styles.container}>
      <img src={map} alt="map" className={styles.imgMap} />
      <div className={styles.container2}>
        <img src={delivery} alt="delivery" className={styles.imgDelivery} />
        <h1>Shipping</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere
          odio id sem consequat ultrices. Aenean in mattis leo. Vestibulum
          placerat fermentum nunc at scelerisque. Vivamus et feugiat dolor.
          Morbi sagittis metus felis, vitae varius felis gravida quis. Nulla
          rutrum tincidunt ullamcorper. Nam eget mi mattis, commodo justo eu,
          posuere.
        </p>
      </div>
    </div>
  );
};

export default Shipping;
