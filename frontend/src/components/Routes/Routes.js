import React from 'react';
import Products from '../Products/Products';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = ({ productItems }) => { 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products productItems={productItems} />} />
      </Routes>
    </div>
  )
}

export default AppRoutes;