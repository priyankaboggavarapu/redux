import { QUERY_DIMENSION_LIST } from './constants';

export const prepareUrl = (appState, item,isInfinteScroll,PageNumber) => {
  let query = `q=${appState.basicSearch.queryText}`;
  // if (item) {
  //   query += `${item.dType}:${item.Name}`;
  // }
  query += buildSelectedQuery('category', appState);
  query += buildSelectedQuery('color', appState);
  query += buildSelectedQuery('material', appState);
  query += buildSelectedQuery('size', appState);
  query += buildSelectedQuery('shape', appState);
  query += buildSelectedQuery('asi', appState);
  query += buildSelectedQuery('imprint_method', appState);
  query += buildSelectedQuery('trade_name', appState);
  query += buildSelectedQuery('theme', appState);
  query += buildSelectedQuerySupplier('supplier', appState);
  query += buildSelectedQueryPrice('price', appState);

  query += `&${QUERY_DIMENSION_LIST}&page=0&rpp=10`;
  // appState.basicSearch.queryText +
  // buildSelectedQuery('category', appState) +
  // buildSelectedQuerySupplier('supplier', appState) +
  // buildSelectedQuery('color', appState) +
  // buildSelectedQuery('material', appState) +
  // buildSelectedQueryPrice('price', appState) +
  // buildSelectedQuery('size', appState) +
  // buildSelectedQuery('shape', appState) +
  // buildSelectedQuery('asi', appState) +
  // buildSelectedQuery('imprint_method', appState) +
  // buildSelectedQuery('trade_name', appState) +
  // '&' +
  // QUERY_DIMENSION_LIST;
   if(isInfinteScroll && PageNumber){
    return query+'&page='+PageNumber+'&rpp=10'
   }

  return query;
};

function buildSelectedQueryPrice(type, appState) {
  if (appState.selectedItems.filter(x => x.dType == type).length > 0) {
    return (
      ` ${type}:` +
      encodeURIComponent(
        appState.selectedItems
          .filter(x => {
            return x.dType == type;
          })
          .map(y => {
            let data = y.Name;
            data = data.replace(/\$/g, '');
            data = data.replace(/-/g, 'to');

            return `[${data}]`;
          })
          .toString(),
      )
    );
  }
  return '';
}

function buildSelectedQuerySupplier(type, appState) {
  if (appState.selectedItems.filter(x => x.dType == type).length > 0) {
    let result = '';
    return (
      ` asi:` +
      encodeURIComponent(
        appState.selectedItems
          .filter(x => {
            return x.dType == type;
          })
          .map((y, index) => {
            let cleany = y.Name.replace(/\(/g, '').replace(/\)/g, '');
            if (index == 0) {
              result = cleany.split('/')[1];
            } else {
              result += ',' + cleany.split('/')[1];
            }
            return result;
          })
          .toString(),
      )
    );
  }
  return '';
}
function buildSelectedQuery(type, appState) {
  if (appState.selectedItems.filter(x => x.dType == type).length > 0) {
    let filteredContent = appState.selectedItems.filter(x => x.dType == type);
    let filteredContentLength = filteredContent.length;
    return ` ${type}:${filteredContent[filteredContentLength - 1].Name}`;
    // return (
    //   ` ${type}:` +
    //   encodeURIComponent(
    //     appState.selectedItems
    //       .filter(x => {
    //         return x.dType == type;
    //       })
    //       .map(y => y.Name)
    //       .toString(),
    //   )
  }
  return '';
}
