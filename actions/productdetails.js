import axios from 'axios';
import {
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_SUCCESS,
} from './action.type';
import { API_URL_PRODUCT_DETAILS, AUTH_HEADER } from '../utils/constants.js';

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
