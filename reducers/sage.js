import {
  SEARCH_SAGE_CATEGORY_SUCCESS,
  SEARCH_SAGE_THEME_SUCCESS,
  SEARCH_SAGE_SORTBY_SUCCESS,
  SEARCH_SAGE_PRODUCTS_SUCCESS,
  SELECT_PRODUCT_BY_ID,
  SEARCH_PRODUCTS_INHOUSE
} from '../actions/sage.action.type';

const intialState = {
  CategoryList: [],
  ThemeList : [],
  SortByList : [],
  ProductsByCategory: {
    TotalFound: 0,
    Items: [],
    ItemsFiltered:[]
  },
  // ProductsByTheme: {
  //   ThemeTotalFound: 0,
  //   ThemeItems: [],
  //   ThemeItemsFiltered:[]
  // },
  // SortBy: {
  //   SortByTotalFound: 0,
  //   SortByItems: [],
  //   SortByItemsFiltered:[]
  // },
  SelectedProductId:''
};

export const SageSearch = (state = intialState, action) => {
  switch (action.type) {
    case  SELECT_PRODUCT_BY_ID :
      return {...state,SelectedProductId:action.payload }
    case SEARCH_SAGE_CATEGORY_SUCCESS:
      return { ...state, CategoryList: action.payload };
      case SEARCH_SAGE_THEME_SUCCESS:
      return { ...state, ThemeList: action.payload };
      case SEARCH_SAGE_SORTBY_SUCCESS:
      return { ...state, SortByList: action.payload };
    case SEARCH_SAGE_PRODUCTS_SUCCESS:
      let ProductsByCategory = {
        Items: action.payload.Items[0].Item,
        ItemsFiltered: action.payload.Items[0].Item,
        TotalFound: action.payload.TotalFound[0],
      };
    
      return { ...state, ProductsByCategory};

      
    case SEARCH_PRODUCTS_INHOUSE :
        state.ProductsByCategory.ItemsFiltered = state.ProductsByCategory.Items.filter(x=>{
         return x.PrName[0].includes(action.payload) ||x.ProductID[0].includes(action.payload);
       });
      //  state.ProductsByTheme.ItemsFiltered = state.ProductsByTheme.Items.filter(x=>{
      //   return x[0].includes(action.payload) ||x[0].includes(action.payload);
      // });
      // state.SortBy.ItemsFiltered = state.SortBy.Items.filter(x=>{
      //   return x[0].includes(action.payload) ||x[0].includes(action.payload);
      // });
       return {...state}
    default:
      return state;
  }
};
