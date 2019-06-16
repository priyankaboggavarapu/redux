import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Spinner } from '@zendeskgarden/react-loaders';
import { getProductDetails } from '../../actions/productdetails';
import { searchProduct } from '../../actions/search';
import Product from './product';

class ProductListComponent extends Component {
  render() {
    if (this.props.products && this.props.products.length > 0) {
      const { Page, ResultsTotal } = this.props.search.result;

      return (
        <div className="col-md-7">
        
            {this.props.search.result.Results.map((x, i) => {
              return (
                <div key={i} className="mt-2">
                  <Product
                    product={x}
                    productDetails={this.props.products.find(y => y.Id == x.Id)}
                  />
                </div>
              );
            })}
          
        </div>
      );
    }
    return (
      <div className="col-md-8">
        <div className="ml-4 mt-4">
          <Spinner color={zdColorBlue500} size="70px" />;
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
const { zdColorBlue500 } = require('@zendeskgarden/css-variables');
const mapDispatchToProps = dispatch => ({
  getProductDetails: id => {
    dispatch(getProductDetails(id));
  },
  paginateProducts: (searchCriteria, item, infinteScroll = true, page) => {
    dispatch(searchProduct(searchCriteria, item, infinteScroll, page));
  },
});
const definePageNumber = (products,Page,totalProducts)=>{
  if(products.length/10==Page){
    return {Page:Page+1,isSearch:true}
  }
  return {Page:Page,isSearch:false}
}

const ProductList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductListComponent);

export default ProductList;
