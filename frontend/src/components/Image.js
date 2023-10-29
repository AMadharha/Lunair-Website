import React from 'react'
import "./assets/css/image.module.css";
import logo from "./assets/images/temp-display.png";


const Image = () => {
  return (
    <div className='container'>
        <img src={logo} alt="Display image" className="display" />
    </div>
  )
}

export default Image
