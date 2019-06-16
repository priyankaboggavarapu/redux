import React, { Component } from 'react';
import './ProductDetails.css';
import axios from'axios';
import ScrollableAnchor  from 'react-scrollable-anchor';
import { connect } from 'react-redux';
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {ProductDetails:{}}
    }

    componentDidMount() {
        console.log(this.props);
        console.log(window.location.href);
        let id =window.location.pathname.split('/')[2];
        //let { match: { params } } = this.props;
        let url = `https://api.asicentral.com/v1/products/${id}.json`;
        axios.get(url,{
            headers: {
                Authorization: 'AsiMemberAuth client_id=500103135 &client_secret=57735a8dde6007de5346d02a3680915b'
            }
        })
          .then(response=>{
              let ProductDetails = response.data;
              this.setState({ProductDetails})
              console.log(ProductDetails)
          })
        }
        getSizes(){
            let sizes =<span></span>
            if(this.state.ProductDetails.Attributes&&this.state.ProductDetails.Attributes.Sizes){
                sizes =this.state.ProductDetails.Attributes.Sizes.Values.map((x,i)=>{
                 return <span>{x.Name}</span>
                }
            );
            }
            return sizes; 
        }
        getImprintMethods(){
            let imprintMethods =[];
            if(this.state.ProductDetails.Imprinting){
                imprintMethods =this.state.ProductDetails.Imprinting.Methods.Values.map(x=>x);
            }
            return imprintMethods;
        }
        getImprintMethodsToDisplay(){
            let imprintMethods =<span></span>
            if(this.state.ProductDetails.Imprinting){
                imprintMethods =this.state.ProductDetails.Imprinting.Methods.Values.map((x,i)=>{
                    return <div>{x.Name}</div>
                });
            }
            return imprintMethods
        }
        
        getQuantity(){
            let Quantity= [];
            if(this.state.ProductDetails && this.state.ProductDetails.Prices){
                Quantity = this.state.ProductDetails.Prices.map(x=>{
                    return    x.Quantity.From +'-'+ x.Quantity.To;
                })
            }
            return Quantity;
        }
        getPrice(){
            let Price= [];
            if(this.state.ProductDetails && this.state.ProductDetails.Prices){
                Price = this.state.ProductDetails.Prices.map(x=>{
                    return    x;
            });
          }
            return Price;
        }
       
        getSupplierDetails(){
           let supplierDetails ={
               website:'',
               email:'',
               phone:'',
               name:''
           };
           if(this.state.ProductDetails &&
             this.state.ProductDetails.Supplier){
            
           supplierDetails.website =this.state.ProductDetails.Supplier.Websites[0];
           supplierDetails.email =this.state.ProductDetails.Supplier.Email;
           supplierDetails.phone =this.state.ProductDetails.Supplier.Phone;
           supplierDetails.rating =this.state.ProductDetails.Supplier.Rating;
           supplierDetails.name =this.state.ProductDetails.Supplier.Name;
             }
             return supplierDetails;
        }
        
        getColors(){
            let colors = '';
            if(this.state.ProductDetails && this.state.ProductDetails.Attributes && this.state.ProductDetails.Attributes.Colors ){
                colors=this.state.ProductDetails.Attributes.Colors.Values.map((color, index) =>{
                    if(index==0){
                        return<span><span className="colon-after" key={index}>{color.Name+" "} ({color.Code})</span></span>
                     }
                return <span className="colon-after" key={index}>{", "+color.Name+" "} ({color.Code})</span> 
            });
        }
            return colors;
        }
        getMaterials(){
            let materials =<div></div>
           if(this.state.ProductDetail && this.state.ProductDetails.Attributes.Materials
            &&this.state.ProductDetails.Attributes.Materials
            &&this.state.ProductDetails.Attributes.Materials.Values) {
                materials= this.state.productDetails.Attributes.Materials.Values.map((x,i)=>{
                return<a className="ml-1" href="" key={i}>{x.Name}</a>
             })
            }
             return materials;
        }
    render() {
        let server = 'https://api.asicentral.com/v1/';
        let productDetails={}
        if(this.state.ProductDetails && this.state.ProductDetails.Attributes){
         productDetails = this.state.ProductDetails;
        }
        let renderInfo =<div/>
        if(productDetails&& productDetails.Attributes){
            renderInfo =<div>
         
            <div className="row bg-color">
                <div className="col-md-1"></div>
                <div className="col-md-10 middle">
                    <div className="row">
                        <div className="col-md-7">
                            <h3 className="no-margin text-primary ng-binding">{productDetails.Name}
                        </h3>
                            <div>
                                <span>
                                    <span class="label label-primary label-confirmed">
                                        <i class="fa fa-check"></i>
                                    </span>
                                </span>
                                <span >
                                    <i class="fa fa-lg fa-exchange text-primary-alt" ></i>
                                </span>

                                <span class="text-light-2 text-medium ng-binding">Last updated by Supplier: {productDetails.UpdateDate}</span>

                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="dropdown">
                                        <button className="btn btn-default dropdown-toggle" type="button"
                                            data-toggle="dropdown">Send to Customer
                                    <span className="caret"></span></button>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">HTML</a></li>
                                            <li><a href="#">CSS</a></li>
                                            <li><a href="#">JavaScript</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <img width="400px" src={server + `/${productDetails.ImageUrl}`} />
                            <div className="product-image-strip margin-bottom-10">
                                <div className="product-image-list carousel">
                                    <div className="mask clearfix mask-cli">
                                        <ul className="prodstrip list-unstyled row clearfix abs">
                                            <li className="li"><img width="40" src={server + `/${productDetails.ImageUrl}`} /></li>
                                            <li className="li"><img width="40" src={server + `/${productDetails.ImageUrl}`} /></li>
                                            <li className="li"><img width="40" src={server + `/${productDetails.ImageUrl}`} /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <p>{productDetails.Description}</p>

                            <div class="product-price">
                                <strong class="colon-after" >Price:</strong>
                                <a href="#pricing"><strong>${productDetails.LowestPrice.Price}</strong></a>

                            </div>
                            <hr></hr>

                            <div className="row">
                                <div className="col-md-6">
                                <div className="product-attribute">
                                       {this.getColors()}
                                    </div>
                                    <div className="product-attribute">
                                        <span><strong>Sizes</strong></span><br />
                                        {this.getSizes()}
                                    </div>
                                    <div className="product-attribute">
                                        <span><strong>Imprint Methods</strong></span><br />
                                        {this.getImprintMethodsToDisplay()} 
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="well supplier-info">
                                        <div>
                                            <a href="" className="supplier-name">{productDetails.Supplier.Name}</a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <span>{productDetails.Supplier.AsiNumber}</span>
                                            </a>
                                        </div>
                                        <div className="supplier-contact-info">
                                            <div>
                                                <i className="fa fa-phone"></i>
                                                {this.getSupplierDetails().phone.Work}
                                            </div>
                                            <div>
                                                <a href= {this.getSupplierDetails().website} alt= {this.getSupplierDetails().website}>
                                                    <i className="fa fa-globe"></i>
                                                  {this.getSupplierDetails().website}
                                                </a>
                                            </div>
                                            <div>
                                                <a href={this.getSupplierDetails().email} alt={this.getSupplierDetails().email}>
                                                    <i className="fa fa-envelope-mail"></i>Email:{this.getSupplierDetails().email}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="well well-sm well-default hidden-print">
                                <div class="form-group">
                                    <button className="btn btn-primary">Create Order</button>
                                </div>
                                <a href="">Estimate Shipping</a>
                                <span>|</span>
                                <a href="">Compare</a>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarColor01">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#pricing">Pricing <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#imprint">Imprint</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#product">Product Information</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#production">Production and Shipping</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#safety">Safety Warnings</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#supplier">Supplier Information</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <ScrollableAnchor id={'pricing'}>
                            <section id="pnlPricing" className="product-section">
                                <div>
                                    <p>Pricing</p>
                                    <h6 className="left-h6">
                                        <small class="pull-right">
                                            <a>Report a Product Discrepancy</a>
                                        </small>

                                    </h6>
                                </div>

                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Quantity</th>
                                            {this.getQuantity().map(x=>{
                                                return <th>{x}</th>
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Catalog Price</th>
                                            {this.getPrice().map(x=>{
                                                return <td>{x.Price}</td>
                                            })}
                                        </tr>
                                        <tr>
                                            <th>Cost</th>
                                            {this.getPrice().map(x=>{
                                                return <td>{x.Cost}</td>
                                            })}
                                        </tr>
                                    </tbody>
                                </table>

                                <div>
                                    <p>(5R) Price subject to change without notice, please verify with Supplier.</p>
                                    <button className="btn btn-default left-h6"><i class="fa fa-shopping-cart"></i>Order</button>
                                </div>
                                <br />
                                <hr></hr>

                            </section>
                            </ScrollableAnchor>
                            <br />
                            {/* <section id="pnlPricing" className="product-section">
                                <p>Imprint Information</p>
                                <hr></hr>
                            </section> */}
                            <ScrollableAnchor id={'imprint'}>
                            <section id="pnlPricing" className="product-section">
                                <div>

                                    <strong>Imprint Information</strong>
                                    <hr></hr>
                                    <div>
                                    < strong >Imprint Methods</strong>
                                    <p>{this.getImprintMethods().map(x=>{
                                          return <span className="ml-1">{x.Name}</span>
                                    })
                                    }</p>
                                    </div>
                                    <div>
                                     <p></p>
                                    <p>Deep Etch Charges:</p>
                                    <ul>
                                        <li ><div class="margin-bottom-10">
                                            <div >
                                                <span  >
                                                    Set-up Charge (Per Order)
                                                     –
                                                    Deep Etch:
                                             </span>
                                                <span >
                                                    <span >
                                                        <span>Price </span>
                                                    </span>
                                                    <span>$80.00</span>
                                                    <span >(R)</span>
                                                    <span >
                                                        <span>Cost: </span>
                                                        <span >1@</span><span asi-price="" data-code="USD" >$48.00</span>
                                                    </span>
                                                </span>

                                            </div>
                                        </div>
                                        </li>
                                    </ul>
                                    </div>
                                    <div>
                                        <strong  >Full Color Process</strong>
                                        <br></br>
                                        <p >{productDetails.Imprinting.FullColorProcess?'Yes':'No'}</p>
                                    </div>
                                    <div>
                                        <strong >Personalization</strong>
                                        <br></br>
                                        <p >{productDetails.Imprinting.Personalization?'Yes':'No'}</p>
                                    </div>
                                    <div>
                                        <strong >Sold Unimprinted</strong>
                                        <p >{productDetails.Imprinting.SoldUnimprinted?'Yes':'No'}</p>
                                    </div>

                                </div>
                            </section>
                            </ScrollableAnchor>
                            <br/>
                            <ScrollableAnchor id={'product'}>
                            <section id="pnlPricing" className="product-section">
                                <div>

                                    <strong>Product Information</strong>
                                    <hr></hr>
                                    <div>
                                    < strong >Description </strong>
                                    <p>{productDetails.Description}</p>
                                    </div>
                                    <div>
                                    < strong >Categories </strong><br/>
                                    {productDetails.Categories.map((x,i)=>{
                                        return<a className="ml-1" href="" key={i}>{x.Name}</a>
                                    })}
                                    </div>
                                    <div>
                                    < strong >Colors </strong>
                                    <div>
                                   {this.getColors()}
                                    </div>
                                    </div>
                                    <div>
                                    < strong >Sizes </strong>
                                    <p> {this.getSizes()}</p>
                                    </div>
                                    <div>
                                    < strong >Materials </strong>
                                    {this.getMaterials()}
                                    </div>
                                    <div>
                                    < strong >Requires Assembly  </strong>
                                    <p>Unspecified</p>
                                    </div>
                                </div>
                            </section>
                            </ScrollableAnchor>
                            <ScrollableAnchor id={'production'}>
                            <section id="pnlPricing" className="product-section">
                                <div>

                                    <strong>Production and Shipping</strong>
                                    <hr></hr>
                                    <div>
                                    < strong >Packaging</strong>
                                    <ul>
                                        <li ><div class="margin-bottom-10">
                                            <div >
                                                <span  >
                                                TBD
                                             </span>
                                               </div>
                                        </div>
                                        </li>
                                    </ul>
                                    <div>
                                    < strong >Can be Shipped in a Plain Box </strong>
                                    <p>TBD</p>
                                    </div>
                                    <div>
                                    < strong >Made in USA </strong>
                                    <p>TBD</p>
                                    </div>
                                    </div>
                                </div>
                            </section>
                            </ScrollableAnchor>
                            <ScrollableAnchor id={'safety'}>
                            <section id="pnlPricing" className="product-section">
                                <div>

                                    <strong>Safety & Compliance</strong>
                                    <hr></hr>
                                    <div>
                                    < strong >Safety </strong>
                                    <p>{productDetails.Warnings.map(x=>{
                                        return <label>{x.Description}</label>
                                    })}</p>
                                    </div>    
                                </div>
                            </section>
                            </ScrollableAnchor>
                            <ScrollableAnchor id={'supplier'}>
                            <section id="pnlPricing" className="product-section">
                                <div>

                                    <strong>Supplier Information</strong>
                                    <hr></hr>
                                    <div class="row">
                                    <div class="col-md-6">
                                        <a href="#">{productDetails.Supplier.Name}</a>
                                        </div>    
                                        
                                        <div class="col-md-6">
                                            Rating:<a href="#">{productDetails.Supplier.Rating.Rating}</a>
                                        </div> 
                                        <div class="col-md-6">
                                        <a href="#">asi/{productDetails.Supplier.AsiNumber}</a>
                                        </div>    
                                        
                                        <div class="col-md-6">
                                            <a href="#">{productDetails.Supplier.Phone.Work}</a>
                                        </div>   
                                        <div class="col-md-6 offset-md-6">
                                            <a href={"mailto:"+productDetails.Supplier.Email}>Contact Supplier</a>
                                        </div> 
                                        <div class="col-md-6 offset-md-6">
                                            <a href="#">{productDetails.Supplier.Websites[0]}</a>
                                        </div>    
                                    
                                    </div>
                                    
                                </div>
                            </section>
                            </ScrollableAnchor>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        }
        return ( 
           <div> {renderInfo}</div>
          )
    }
}

const mapStateToProps = (state) => {
   return state
  }
export default ProductDetail