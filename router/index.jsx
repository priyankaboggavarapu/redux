import React from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
//import { Route, Switch as RouterSwitch } from 'react-router-dom';
 import { SearchPage } from '../pages/search';
import { AdvancedSearchPage } from '../pages/advanced.search';
import { ProductDetailsPage } from '../pages/product.details';
import { SageSearchComponent } from '../pages/sageSearch';
import {SageProductDetailPage} from '../pages/sageProductDetails'

export const RootConfig = () => (
  <Router>
  <div>
    <main>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/productdetails/:id" component={ProductDetailsPage} />
        <Route path="/sage" component={SageSearchComponent} />
        <Route path="/sageproductdetails/:id" component={SageProductDetailPage} />
      </Switch>
    </main>
  </div>
</Router>
);
