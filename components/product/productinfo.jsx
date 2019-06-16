import React, { Component } from "react";
import "./product.css";
export default class ProductInfo extends Component {
  render() {
    const server = "https://api.asicentral.com/v1/";
    console.log(this.props);
    return (
      <div className="card">
        <div className="close-btn-wrapper mr-2">
          <a
            className="close-btn"
            href="javascript:void(0);"
            onClick={this.props.displayProductDetails}
          >
            x
          </a>
        </div>
        <div className="row">
          <div className="col-md-3">
            <img
              className="img-responsive main-img"
              src={server + `${this.props.basicInfo.ImageUrl}`}
            />
          </div>
          <div className="col-md-9 mt-1 mb-1">
            <div>
              {" "}
              <a
                href={"/productdetails/" + this.props.basicInfo.Id}
                target="_blank"
              >
                {this.props.basicInfo.Name}
              </a>
            </div>
            <p className="description small">
              {this.props.basicInfo.Description}
              {/* The starfire Pederson is a perfect bevelled circle mounted into a chrome finished holder and black base. */}
            </p>
            <div className="small product-attributes ">
              <div>
                <b>Options</b>
              </div>
              <div>
                <span className="product-attribute attribute-header">
                  <strong>Colors:</strong>
                </span>
                {this.props.productInfo.Attributes.Colors.Values.map(
                  (color, index) => {
                    if (index == 0) {
                      return (
                        <span
                          className="attribute-header   colon-after"
                          key={index}
                        >
                          {" " + color.Name}
                        </span>
                      );
                    }
                    return (
                      <span
                        className="attribute-header   colon-after"
                        key={index}
                      >
                        {" ," + color.Name}
                      </span>
                    );
                  }
                )}
              </div>
              <div>
                <span className="product-attribute attribute-header">
                  <strong>Sizes:</strong>
                </span>
                {this.getSizes()}
              </div>
              <div>
                <span className="product-attribute attribute-header">
                  {" "}
                  <strong>Imprint Methods:</strong>
                </span>
                {this.props.productInfo.Imprinting.Methods.Values.map(
                  (method, index) => {
                    if (index == 0) {
                      return (
                        <span className="attribute-header   colon-after">
                          {" " + method.Name}
                        </span>
                      );
                    }
                    return (
                      <span className="attribute-header   colon-after">
                        {", " + method.Name}
                      </span>
                    );
                  }
                )}
              </div>
              <div className="well well-sm small no-border no-margin supplier-info">
                <div className="row">
                  <div className="col-md-6">
                    <div className="supplier-inline-wrapper">
                      <a
                        href=""
                        className="ellipsis supplier-name supplier-inline"
                      >
                        <strong>{this.props.productInfo.Supplier.Name}</strong>
                      </a>
                    </div>
                  </div>
                  <div>
                    <span>asi/{this.props.productInfo.Supplier.AsiNumber}</span>

                    <a href="" className="label label-preferred ">
                      <span className="tooltip-loaded">
                        <span>
                          <span className="ellipsis  ">
                            Reward
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-md-8 textright">
                  <div className="rating ">
                    <span className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty">
                      <span className="rating-wrapper">
                        <a href="">
                          <span className="supplier-ratings">
                            <i className="r-9" />
                          </span>
                        </a>
                        <small className="rating-count  ">
                          Ratings(
                          {this.props.productInfo.Supplier.Rating.Rating})
                        </small>
                      </span>
                    </span>
                  </div>
                  <div className=" ">
                    {this.props.productInfo.Supplier.Phone.TollFree}
                  </div>
                  <a href="" className=" ng-isolate-scope">
                    <i className="fa fa-email" />Contact :
                    {this.props.productInfo.Supplier.Email}
                  </a>
                  <div className="ellipsis ">
                    <a href="" className="">
                      <i className="fa fa-globe" />{" "}
                      {this.props.productInfo.Supplier.Websites[0]}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  getSizes() {
    let sizes = (
      <span className="attribute-header colon-after" />
    );
    if (
      this.props.productInfo &&
      this.props.productInfo.Attributes.Sizes &&
      this.props.productInfo.Attributes.Sizes.Values
    ) {
      sizes = this.props.productInfo.Attributes.Sizes.Values.map(
        (size, index) => {
          return (
            <span
              className="attribute-header colon-after"
              key={index}
            >
              {size.Name}
            </span>
          );
        }
      );
    }
    return sizes;
  }
  getSupllierInfo() {
    return (
      <div className="col-md-6">
        <div className="font-weight-bold">
          {this.props.basicInfo.Supplier.Name}
        </div>
        <div className="font-weight-bold">
          asi/{this.props.basicInfo.Supplier.AsiNumber}
        </div>
      </div>
    );
  }
}
