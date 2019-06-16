import {
  SEARCH_BY_TEXT,
  SEARCH_SMART_LINK_SUCCESS,
  SEARCH_SMART_LINK_FAILURE,
  SELECTED_CRITERIA,
  DELETE_CRITERIA,
  SHOW_PRODUCT_DETAILS,
  SET_ADVANCED_SEARCH,
  SHOW_ADVANCED_SEARCH,
  CLEAR_PRODUCT_LIST
} from '../actions/action.type';

const intialState = {
  basicSearch: {
    queryText: '',
  },
  searchResults: {},
  selectedItems: [],
  advancedSearch:{
    criteriaAnd: "",
    criteriaOr: "",
    criteriaExact: "",
    category: "",
    shape: "",
    size: "",
    theme: "",
    supplier_country: "",
    typeOfBudget: { type: "price", from: "", to: "" },
    numberType: "supplier",
    asi: "",
    material: "",
    market: "",
    color: "",
    product_number: "",
    imprint_method: "",
    quantity: ""
  }
};
export const search = (state = intialState, action) => {
  switch (action.type) {
    case SEARCH_BY_TEXT:
      const { basicSearch } = state;
      basicSearch.queryText = action.payload;
      return {
        ...state,
        basicSearch,
      };
    case SEARCH_SMART_LINK_SUCCESS:
      const result = action.payload;
      return { ...state, result };

    case SELECTED_CRITERIA:
      const { selectedItems } = state;
      if (selectedItems.map(x => x.Name).indexOf(action.payload.Name) === -1) {
        selectedItems.push(action.payload);
      }
      return { ...state, selectedItems };

    case DELETE_CRITERIA:
      const itemsTobeRemoved = state.selectedItems;
      const index = itemsTobeRemoved
        .map(x => x.Name)
        .indexOf(action.payload.Name);
      itemsTobeRemoved.splice(index, 1);
      return { ...state, itemsTobeRemoved };
      case SET_ADVANCED_SEARCH:
      let {advancedSearch} = action.payload;
      return {
        ...state,
        advancedSearch
      };
      break;
    case SHOW_ADVANCED_SEARCH:
      return { ...state };
      break;

      case CLEAR_PRODUCT_LIST:
      const {searchResults} ={};
      return { ...state,searchResults };
      break;

    case SEARCH_SMART_LINK_FAILURE:
    default:
      return { ...state };
  }
};
