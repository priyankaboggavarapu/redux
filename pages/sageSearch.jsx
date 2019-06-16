import React from 'react';
import { Header } from '../components/header';
import { SageSearch } from '../components/sage/search';

export const SageSearchComponent = () => {
  return (
    <div>
      <div className="container-fluid">
        <Header />
      </div>
      <div className="container-fluid">
        <SageSearch />
      </div>
    </div>
  );
};
