import {
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILURE,
  CLEAR_PRODUCT_DETAILS,
  SELECTED_CRITERIA,
  SEARCH_SMART_LINK_SUCCESS,
  CLEAR_PRODUCT_LIST,
} from '../actions/action.type';
const initSate = [];
export const products = (state = initSate, action) => {
  switch (action.type) {
    case SELECTED_CRITERIA :
      return [];
    case SEARCH_SMART_LINK_SUCCESS:
       return [];
    case GET_PRODUCT_DETAILS_SUCCESS:
      console.log('Product Details', state);
      state.push(action.payload);
      return state;
    case CLEAR_PRODUCT_LIST:
    return []

    case GET_PRODUCT_DETAILS_FAILURE:
    default:
      return state;
  }
};
