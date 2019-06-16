import axios from 'axios';
import {
  SEARCH_BY_TEXT,
  SEARCH_SMART_LINK_SUCCESS,
  SEARCH_SMART_LINK_FAILURE,
  SELECTED_CRITERIA,
  DELETE_CRITERIA,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_SUCCESS,
  CLEAR_PRODUCT_DETAILS,
  SHOW_ADVANCED_SEARCH,
  SET_ADVANCED_SEARCH,
  CLEAR_PRODUCT_LIST
} from './action.type';
import {
  API_URL_PRODUCTS,
  API_URL_PRODUCT_DETAILS,
  AUTH_HEADER,
} from '../utils/constants.js';
import { prepareUrl } from '../utils/buildQuery.js';

export const searchByText = data => {
  return {
    type: SEARCH_BY_TEXT,
    payload: data,
  };
};
export const searchProductSuccess = data => {
  return {
    type: SEARCH_SMART_LINK_SUCCESS,
    payload: data,
  };
};

export const searchProductFailure = data => {
  return {
    type: SEARCH_SMART_LINK_FAILURE,
    payload: data,
  };
};
export const setAdvancedCriteria =data=>{
  return {
    type: SET_ADVANCED_SEARCH,
    payload:data
  }
}
export const searchProduct = (appState, item, isInfiniteScroll, PageNumber) => {
  const query = prepareUrl(appState, item, isInfiniteScroll, PageNumber);
  const url = API_URL_PRODUCTS + '?' + query;

  return dispatch => {
    axios
      .get(url, {
        headers: {
          Authorization: AUTH_HEADER,
        },
      })
      .then(res => {
        dispatch(clearProductDetails(isInfiniteScroll));
        res.data.Results.forEach(element => {
          dispatch(getProductDetails(element.Id));
        });
        dispatch(searchProductSuccess(res.data));
      })
      .catch(err => {
        dispatch(searchProductFailure(err.message));
      });
  };
};

export const selectedCriteria = item => {
  return {
    type: SELECTED_CRITERIA,
    payload: item,
  };
};
export const removeSelectedCriteria = item => {
  return {
    type: DELETE_CRITERIA,
    payload: item,
  };
};
export const productDetailSuccess = details => {
  return {
    type: GET_PRODUCT_DETAILS_SUCCESS,
    payload: details,
  };
};

export const productDetailFailure = err => {
  return {
    type: GET_PRODUCT_DETAILS_FAILURE,
    payload: 'Error in fetching product details',
  };
};
export const getProductDetails = productId => {
  const url = `${API_URL_PRODUCT_DETAILS}${productId}.json`;
  console.log(url);
  return dispatch => {
    axios
      .get(url, {
        headers: {
          Authorization: AUTH_HEADER,
        },
      })
      .then(res => {
        dispatch(productDetailSuccess(res.data));
      })
      .catch(err => {
        dispatch(productDetailFailure(err.message));
      });
  };
};

export const clearProductDetails = isInfiniteScroll => {
  return {
    type: CLEAR_PRODUCT_DETAILS,
    isInfiniteScroll: isInfiniteScroll,
  };
};
export const ShowAdvancedSearch = ()=>{
  return {
    type:SHOW_ADVANCED_SEARCH
  }
}
export const clearProductList=()=>{
  return {
    type:CLEAR_PRODUCT_LIST,
    payload:[]
  }
}

export const paginateProducts = (page, hasMore) => {};
