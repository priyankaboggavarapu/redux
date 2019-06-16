import React, { Component } from "react";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";
import ProductInfo from "./productinfo";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      showProductDetails: false
    };
    this.displayProductDetails = this.displayProductDetails.bind(this);
  }
  displayProductDetails() {
    this.setState({ showProductDetails: !this.state.showProductDetails });
  }

  render() {
    const { product } = this.props;
    let { productDetails } = this.props;
    if (this.state.showProductDetails) {
      return (
        <ProductInfo
          productInfo={productDetails}
          basicInfo={product}
          displayProductDetails={this.displayProductDetails}
        />
      );
    } else if (productDetails && productDetails.Id) {
      const server = "https://api.asicentral.com/v1/";
      return (
        <div
          className="card"
          onClick={e => {
            this.displayProductDetails();
          }}
        >
          <div className="row">
            <div className="col-md-3 mt-1 mb-1">
              <img
                src={server + `/${product.ImageUrl}`}
                className="img-rounded"
                alt={product.Name}
              />
            </div>
            <div className="col-md-5 mt-1 mb-1">
              <div className="row">
                <div className="col-md-12">
                  <a href={"/productdetails/" + product.Id} target="_blank">
                    {product.Name}
                  </a>
                </div>
                <div className="col-md-8">
                  {getSupplierDetails(productDetails)}
                </div>
              </div>
            </div>
            {getPrice(product, productDetails)}
          </div>
        </div>
      );
    }
    return <div />;
  }
}

const mapStateToProps = state => {
  return { stateObj: state };
};

const getSupplierRating = productDetails => {
  if (productDetails && productDetails.Supplier.Rating) {
    return (
      <div className="col-md-12">
        <StarRatings
          rating={productDetails.Supplier.Rating.Rating / 2}
          starRatedColor="brown"
          numberOfStars={5}
          name="rating"
          starDimension="12px"
          starSpacing="2px"
        />
        <span className="small text-align-bottom">
          ({productDetails.Supplier.Rating.Transactions})
        </span>
      </div>
    );
  }
  return <div />;
};
const getSupplierDetails = productDetails => {
  if (productDetails && productDetails.Supplier) {
    return (
      <div className="row">
        <div className="col-md-12 font-weight-bold small">
          {/* <div className=""> */}
          {productDetails.Supplier.Name}
        </div>
        <div className="col-md-12 font-weight-bold small">
          <div className="col-md-6">
            <a href={"/productdetails/" + productDetails.Id} target="_blank">
              <u>asi/{productDetails.Supplier.AsiNumber}</u>
            </a>
          </div>
        </div>

        {getSupplierRating(productDetails)}

        {/* <div className="col-md-6">
          <b>Options</b>
        </div> */}
      </div>
    );
  }
  return <div />;
};
const getColors = productDetails => {
  if (
    productDetails &&
    productDetails.Attributes &&
    productDetails.Attributes.Colors &&
    productDetails.Attributes.Colors.Values
  ) {
    return (
      <li>
        {productDetails.Attributes.Colors.Values.map((x, i) => {
          if (i == 0) {
            return <span className="text-wrap">{x.Name}</span>;
          }
          if (i < 2) {
            return <span className="text-wrap">{", " + x.Name}</span>;
          }

          return "";
        })}
      </li>
    );
  }
  return "";
};
const getSizes = productDetails => {
  if (
    productDetails &&
    productDetails.Attributes &&
    productDetails.Attributes.Sizes &&
    productDetails.Attributes.Sizes.Values
  ) {
    return (
      <li>
        {productDetails.Attributes.Sizes.Values.map((x, i) => {
          if (i < 2) {
            return <span className="text-truncate">{" " + x.Name}</span>;
          }
          return "";
        })}
      </li>
    );
  }
  return "";
};
const getPrice = (productInfo, productDetails) => {
  return (
    <div className="col-md-4 mt-1 mb-1 small">
      <div className="col-md-12">
        <label className="text-uppercase">Price</label>:{" "}
        <strong>{productInfo.Price.Quantity}</strong>
        <strong>
          @${productInfo.Price.Price} (${productInfo.Price.DiscountCode})
        </strong>
      </div>
      <div className="col-md-12">
        <label className=".text-uppercase">COST</label>:{" "}
        <strong>{productInfo.Price.Quantity}</strong>
        <strong>@${productInfo.Price.Cost}</strong>
      </div>
      <div className="col-md-12">
        <b>Options</b>
        {getColors(productDetails)}
        {getSizes(productDetails)}
      </div>
    </div>
  );
};
const ProductComponent = connect(
  mapStateToProps,
  null
  //  mapDispatchToProps,
)(Product);

export default ProductComponent;
