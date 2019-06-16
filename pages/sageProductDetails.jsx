import React from 'react';
import { Header } from '../components/header';
import  SageProductDetails  from '../components/sage/sage.product.details';

export const SageProductDetailPage = () => {
  return (
    <div>
      <div className="container-fluid">
        <Header />
      </div>
      <div className="container-fluid">
        <SageProductDetails />
      </div>
    </div>
  );
};
