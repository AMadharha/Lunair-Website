import React, { useState } from "react";
import "./Products.css";

const Products = ({ productItems }) => {
  const [selectedColors, setSelectedColors] = useState({});

  const availableColors = ['blue', 'red', 'purple'];

  const handleColorSelect = (productId, color) => {
    setSelectedColors({ ...selectedColors, [productId]: color });
  };

  return (
    <div className="container">
       
    <div className="filter">
      
    </div>

    <div className="products">
      {productItems.map((productItem, index) => (
        <div className="card" key={productItem.id || index}>
          <div>
            <img
              className="product-image"
              src={productItem.image}
              alt={productItem.name}
            />
          </div>

          <div className="info">
            <div className="product-name">
              <h3>{productItem.name}</h3>
            </div>
            <div className="product-price">
              <h3>${productItem.price}</h3>
            </div>
          </div>

          <div className="color-selector">
            {availableColors.map((color) => (
              <span
                key={color}
                className="color-circle"
                style={{
                  backgroundColor: color,
                  border: selectedColors[productItem.id] === color ? '2px solid black' : '1px solid grey'
                }}
                onClick={() => handleColorSelect(productItem.id, color)}
              />
            ))}
          </div>

          <div>
            <button className="cartBtn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Products;