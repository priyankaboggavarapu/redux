import {
  SHOW_ADVANCED_SEARCH,
  SET_ADVANCED_SEARCH
} from "../actions/action.type";
let initState = {
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
};
export const advancedSearch = (state = initState, action) => {
  switch (action.type) {
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
    default:
      return { ...state };
      break;
  }
};
