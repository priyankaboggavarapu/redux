import { combineReducers } from 'redux';
import { search } from './search';
import { products } from './productDetails';
import { SageSearch } from './sage';
import {advancedSearch} from './advancedSearch'

export default combineReducers({
   search,
   products,
  SageSearch,
  //advancedSearch

});
