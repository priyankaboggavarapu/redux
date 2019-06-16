import axios from 'axios';
import xml2js from 'xml2js';
import { API_SAGE } from '../utils/constants.js';
import {
  SEARCH_SAGE_CATEGORY,
  SEARCH_SAGE_CATEGORY_SUCCESS,
  SEARCH_SAGE_CATEGORY_FAILURE,
  SEARCH_SAGE_PRODUCTS,
  SEARCH_SAGE_PRODUCTS_SUCCESS,
  SEARCH_SAGE_PRODUCTS_FAILURE,
  SELECT_PRODUCT_BY_ID,
  SEARCH_PRODUCTS_INHOUSE,
  SEARCH_SAGE_THEME,
  SEARCH_SAGE_THEME_SUCCESS,
  SEARCH_SAGE_THEME_FAILURE,
  SEARCH_SAGE_SORTBY,
  SEARCH_SAGE_SORTBY_SUCCESS,
  SEARCH_SAGE_SORTBY_FAILURE,
  
} from './sage.action.type';

export const searchProductsInHouse =data=>{
  return {
    type: SEARCH_PRODUCTS_INHOUSE,
    payload:data
  }
}
export const GetSageCateogryListSuccess = data => {
  return {
    type: SEARCH_SAGE_CATEGORY_SUCCESS,
    payload: data,
  };
};
export const SelectProduct = (productId)=>{
  return {
    type: SELECT_PRODUCT_BY_ID,
    payload:productId
  }
}
export const GetSageCateogryListFailure = error => {
  return {
    type: SEARCH_SAGE_CATEGORY_FAILURE,
    payload: error,
  };
};
export const GetSageCategoryList = () => {
  let requestBody = `<XMLDataStreamRequest>
    <Ver>3.1</Ver>
        <Auth>
            <AcctID>27907</AcctID>
            <LoginID>xetex27907</LoginID>
            <Password>ipu2017</Password>
        </Auth>
    <CategoryList>
        <GetList>1</GetList>
        <Sort>NAME</Sort>
    </CategoryList>
    </XMLDataStreamRequest>
    `;
  return dispatch => {
    axios
      .post(API_SAGE, requestBody, {
        headers: { 'Content-type': 'application/xml' },
      })
      .then(result => {
        xml2js.parseString(result.data, (err, resp) => {
          if (err) {
            dispatch(GetSageCateogryListFailure(err));
          } else {
            dispatch(
              GetSageCateogryListSuccess(
                resp.XMLDataStreamResponse.CategoryList[0].Category,
              ),
            );
          }
        });
      })
      .catch(err => {
        dispatch(GetSageCateogryListFailure(err));
      });
  };
};

export const GetProductsByCategorySuccess = data => {
  return {
    type: SEARCH_SAGE_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const GetProductsByCategoryFailure = err => {
  return {
    type: SEARCH_SAGE_PRODUCTS_SUCCESS,
    payload: err,
  };
};

export const GetProductsByCategory = (categoryId,theme) => {
  let query  = '';
  if (categoryId){
    query+=`<Category>${categoryId}</Category>`
  }
  if(theme){
    query+=`  <ThemeList>      <GetList>1</GetList>   </ThemeList>`
  }
  let requestBody = `<XMLDataStreamRequest>
	<Ver>3.1</Ver>
	<Auth>
		<AcctID>27907</AcctID>
		<LoginID>xetex27907</LoginID>
		<Password>ipu2017</Password>
	</Auth>
	<Search>
		<Category>${categoryId}</Category>
	</Search>
</XMLDataStreamRequest>`;

  return dispatch => {
    axios
      .post(API_SAGE, requestBody, {
        headers: { 'Content-type': 'application/xml' },
      })
      .then(result => {
        xml2js.parseString(result.data, (err, resp) => {
          if (err) {
            dispatch(GetProductsByCategoryFailure(err));
          } else {
            dispatch(
              GetProductsByCategorySuccess(
                resp.XMLDataStreamResponse.SearchResults[0],
              ),
            );
          }
        });
      })
      .catch(err => {
        dispatch(GetProductsByCategoryFailure(err));
      });
  };
};
export const GetProductsByTheme = () => {
  let requestBody = `<XMLDataStreamRequest>
	<Ver>3.1</Ver>
	<Auth>
		<AcctID>27907</AcctID>
		<LoginID>xetex27907</LoginID>
		<Password>ipu2017</Password>
	</Auth>
	<Search>
  <ThemeList>      <GetList>1</GetList>   </ThemeList>
	</Search>
</XMLDataStreamRequest>`;

  return dispatch => {
    axios
      .post(API_SAGE, requestBody, {
        headers: { 'Content-type': 'application/xml' },
      })
      .then(result => {
        xml2js.parseString(result.data, (err, resp) => {
          if (err) {
            dispatch(GetSageThemeListFailure(err));
          } else {
            dispatch(
              GetSageThemeListSuccess(
                resp.XMLDataStreamResponse.SearchResults[0],
              ),
            );
          }
        });
      })
      .catch(err => {
        dispatch(GetSageThemeListFailure(err));
      });
  };
};
export const GetSageThemeList = () => {
  let requestBody = `<XMLDataStreamRequest>
    <Ver>3.1</Ver>
        <Auth>
            <AcctID>27907</AcctID>
            <LoginID>xetex27907</LoginID>
            <Password>ipu2017</Password>
        </Auth>
        <ThemeList>      <GetList>1</GetList>   </ThemeList>
    </XMLDataStreamRequest>
    `;
  return dispatch => {
    axios
      .post(API_SAGE, requestBody, {
        headers: { 'Content-type': 'application/xml' },
      })
      .then(result => {
        xml2js.parseString(result.data, (err, resp) => {
          if (err) {
            dispatch(GetSageThemeListFailure(err));
          } else {
            dispatch(
              GetSageThemeListSuccess(
                resp.XMLDataStreamResponse.ThemeList[0].Theme,
              ),
            );
          }
        });
      })
      .catch(err => {
        dispatch(GetSageThemeListFailure(err));
      });
  };
};
export const GetSageThemeListSuccess = data => {
  return {
    type: SEARCH_SAGE_THEME_SUCCESS,
    payload: data,
  };
};
export const GetSageThemeListFailure = error => {
  return {
    type: SEARCH_SAGE_THEME_FAILURE,
    payload: error,
  };
};
// export const GetProductsByThemeSuccess = data => {
//   return {
//     type: SEARCH_SAGE_PRODUCTS_SUCCESS,
//     payload: data,
//   };
// };

// export const GetProductsByThemeFailure = err => {
//   return {
//     type: SEARCH_SAGE_PRODUCTS_SUCCESS,
//     payload: err,
//   };
// };

export const GetSageSortByList = () => {
  let requestBody = `<XMLDataStreamRequest>
    <Ver>3.1</Ver>
        <Auth>
            <AcctID>27907</AcctID>
            <LoginID>xetex27907</LoginID>
            <Password>ipu2017</Password>
        </Auth>
        <SortBy>      <GetList>1</GetList>   </SortBy>
    </XMLDataStreamRequest>
    `;
  return dispatch => {
    axios
      .post(API_SAGE, requestBody, {
        headers: { 'Content-type': 'application/xml' },
      })
      .then(result => {
        xml2js.parseString(result.data, (err, resp) => {
          if (err) {
            dispatch(GetSageSortByListFailure(err));
          } else {
            dispatch(
              GetSageSortByListSuccess(
                resp.XMLDataStreamResponse.SortByList[0].SortBy,
              ),
            );
          }
        });
      })
      .catch(err => {
        dispatch(GetSageSortByListFailure(err));
      });
  };
};
export const GetSageSortByListSuccess = data => {
  return {
    type: SEARCH_SAGE_SORTBY_SUCCESS,
    payload: data,
  };
};
export const GetSageSortByListFailure = error => {
  return {
    type: SEARCH_SAGE_SORTBY_FAILURE,
    payload: error,
  };
};
// export const GetSortBySuccess = data => {
//   return {
//     type: SEARCH_SAGE_PRODUCTS_SUCCESS,
//     payload: data,
//   };
// };
// export const GetSortByFailure = err => {
//   return {
//     type: SEARCH_SAGE_PRODUCTS_SUCCESS,
//     payload: err,
//   };
// };
export const GetSortBy = () => {
  let requestBody = `<XMLDataStreamRequest>
	<Ver>3.1</Ver>
	<Auth>
		<AcctID>27907</AcctID>
		<LoginID>xetex27907</LoginID>
		<Password>ipu2017</Password>
	</Auth>
	<Search>
  <SortByList>      <GetList>1</GetList>   </SortByList>
	</Search>
</XMLDataStreamRequest>`;

  return dispatch => {
    axios
      .post(API_SAGE, requestBody, {
        headers: { 'Content-type': 'application/xml' },
      })
      .then(result => {
        xml2js.parseString(result.data, (err, resp) => {
          if (err) {
            dispatch(GetSageSortByListFailure(err));
          } else {
            dispatch(
              GetSageSortByListSuccess (
                resp.XMLDataStreamResponse.SearchResults[0],
              ),
            );
          }
        });
      })
      .catch(err => {
        dispatch(GetSageSortByListFailure(err));
      });
  };
};