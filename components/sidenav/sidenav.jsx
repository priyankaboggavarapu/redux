import React from 'react';
import ResultCount from './resultcount';
import CriteriaSection from './filters';
import SelectedCriteriaDetails from './SelectedItem';

export const SideNav = () => (
  <div className="col-md-3 offset-md-1 mt-2">
    <div className="card">
      <ResultCount />
    </div>
    <SelectedCriteriaDetails />
    <CriteriaSection />
  </div>
);
