import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  GetProductsByCategory,
  SelectProduct
} from "../../actions/sage.action";

class SageProducts extends Component {
  constructor() {
    super();
  }
  selectProduct = (e, productId) => {
    this.props.SelectProduct(productId);
    e.preventDefault();
    setTimeout(() => {
      window.open(`/sageproductdetails/${productId}`);
    }, 2000);
    // window.open(`/sageproductdetails/${productId}`);
  };

  render() {
    let products = <div />;

    if (this.props.SageSearch.ProductsByCategory.ItemsFiltered.length > 0) {
      let productsList = this.props.SageSearch.ProductsByCategory.ItemsFiltered.map(
        x => {
          return (
            <div className="card mt-3 col-md-12">
              <div className="row">
                <div className="col-md-3 mt-1 mb-1">
                  <img
                    src={x.ThumbPicLink[0]}
                    className="img-rounded"
                    alt={x.PrName[0]}
                  />
                </div>
                <div className="col-md-7 mt-1 mb-1">
                  <div className="row">
                    <div className="col-md-12 text-wrap mt-1">
                      Name:{" "}
                      <NavLink
                        to={`/sageproductdetails/${x.ProductID[0]}`}
                        activeStyle={{
                          textDecoration: "none",
                          color: "black"
                        }}
                      >
                        {x.PrName[0]}
                      </NavLink>
                      {/* <a
                        href="javascript:void(0)"
                        onClick={(e)=>{this.selectProduct(e,x.ProductID[0])}}
                      >
                        {x.PrName[0]}
                      </a> */}
                    </div>
                    <div className="col-md-12 text-wrap mt-1">
                      Code:{" "}
                      <a
                        href="javascript:void(0)"
                        onClick={e => {
                          this.selectProduct(e, x.ProductID[0]);
                        }}
                      >
                        {x.SPC[0]}
                      </a>
                    </div>
                    <div className="col-md-12 text-wrap mt-1">
                      Price:{" "}
                      <a
                        href="javascript:void(0)"
                        onClick={e => {
                          this.selectProduct(e, x.ProductID[0]);
                        }}
                      >
                        $ {x.Prc[0]}
                      </a>
                    </div>
                    <div className="col-md-12 text-wrap mt-1">
                      <button className="btn btn-primary">View Deatils</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      );
      return (
        <div>
          <div className="col-md-12">
            <span className ='float-right'>Total Products:
            {this.props.SageSearch.ProductsByCategory.ItemsFiltered.length}</span>
          </div>
          {productsList}
        </div>
      );
    }
    return <div />;
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  SelectProduct: categoryId => {
    dispatch(SelectProduct(categoryId));
  }
});

const SageProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SageProducts);
export default SageProductList;
