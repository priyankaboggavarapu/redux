import React from 'react';
import { Header } from '../components/header';
import ProductDetail from '../components/ProductDetails/ProductDetails';
export const ProductDetailsPage= () => (
  <div>
    <div className="container-fluid">
      <Header />
    </div>
    <div className='container-fluid'>
      <ProductDetail/>
    </div>
   
  </div>
);
