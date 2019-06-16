import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetProductsByCategory } from '../../actions/sage.action';
import '../../App.css';
class SageProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      productDetails: {
        "ProductID": "32191156",
        "Category": "Bags",
        "SuppID": "50422",
        "LineName": "BAG MAKERS",
        "CatPage": "102",
        "CatYear": "2019",
        "ItemNum": "11WHP79",
        "SPC": "CIIKH-AKWUE",
        "PrName": "Mini White Shoppers Bag (Flexo Ink)",
        "Description": "These popular White kraft-paper shoppers are functional, affordable and available in small to medium sizes. Include matching twisted paper handles and serrated cut top.  7 3/4\" W x 4 3/4\" D x 9 3/4\" H",
        "Dimensions": "7 3/4\" W x 4 3/4\" D x 9 3/4\" H",
        "Keywords": "Shopper Tote, Eco Friendly, Twisted Paper Handle, 4 3/4\" Gusset, Reusable, Rectangle, Open Top, Shopping Bag, Gift Bag",
        "Colors": "White Kraft",
        "Themes": "Anniversary, Gift, Shopping",
        "Qty1": "150",
        "Qty2": "250",
        "Qty3": "500",
        "Qty4": "1000",
        "Qty5": "3000",
        "Qty6": "0",
        "Prc1": "1.61",
        "Prc2": "0.93",
        "Prc3": "0.85",
        "Prc4": "0.81",
        "Prc5": "0.75",
        "PrCode": "AAAAA",
        "CatPrc1": "1.61",
        "CatPrc2": "0.93",
        "CatPrc3": "0.85",
        "CatPrc4": "0.81",
        "CatPrc5": "0.75",
        "CatPrCode": "AAAAA",
        "Net1": "0.81",
        "Net2": "0.47",
        "Net3": "0.43",
        "Net4": "0.41",
        "Net5": "0.38",
        "PriceAdjustMsg": "Click here for detailed pricing; Digital Full-Color imprinted plastic bags - EQP at 500 bags Screen imprinted non-woven polypropylene, polyester, cotton/jute, and PET non-woven bags - EQP at 150 bags (first column quantity) Sparkle imprinted non-woven polypropylene, polyester, cotton/jute, and PET non-woven bags - EQP at 150 bags (first column quantity) Sublimation imprinted PET non-woven and polyester (Dali and Picasso) bags - EQP at 500 bags ColorVista imprinted non-woven polypropylene, polyester, cotton/jute, PET non-woven, and paper bags - EQP at 500 bags Flexographic (ink) imprinted plastic and paper bags - EQP at 500 bags Hot stamp (foil) imprinted plastic and paper bags - EQP at 500 bags",
        "Currency": "USD",
        "PiecesPerUnit1": "1",
        "PiecesPerUnit2": "1",
        "PiecesPerUnit3": "1",
        "PiecesPerUnit4": "1",
        "PiecesPerUnit5": "1",
        "PiecesPerUnit6": "0",
        "Options": {
          "Option": {
            "Name": "Imprint",
            "Type": "U",
            "Values": {
              "Value": [
                { "Name": "1 Location" },
                {
                  "Name": "Second Location (per bag)",
                  "Prc1": "0.25",
                  "Net1": "0.20",
                  "Prc2": "0.25",
                  "Net2": "0.20",
                  "Prc3": "0.25",
                  "Net3": "0.20",
                  "Prc4": "0.25",
                  "Net4": "0.20",
                  "Prc5": "0.25",
                  "Net5": "0.20",
                  "Prc6": "0.00",
                  "Net6": "0.00"
                }
              ]
            },
            "PrCode": "GGGGG"
          }
        },

        "MadeUSA": "0",
        "AssembledInCountry": "MX",
        "Recycle": "1",
        "Recyclable": "1",
        "NewProduct": "0",
        "EnvFriendly": "1",
        "Food": "0",
        "Clothing": "0",
        "WarningLbl": "WARNING: ",
        "Verified": "1",
        "ImprintArea": "6\" W x 5\" H on Front or Back",
        "DecorationMethod": "Flexography",
        "DecorationNotOffered": "0",
        "SetupChg": "60",
        "SetupChgCode": "G",
        "RepeatSetupChg": "0",
        "ScreenChg": "0",
        "PlateChg": "60",
        "PlateChgCode": "G",
        "DieChg": "0",
        "ToolingChg": "0",
        "AddClrChg": "60",
        "AddClrChgCode": "G",
        "AddClrRunChg1": "0.15",
        "AddClrRunChg2": "0.15",
        "AddClrRunChg3": "0.15",
        "AddClrRunChg4": "0.15",
        "AddClrRunChg5": "0.15",
        "AddClrRunChg6": "0",
        "AddClrRunChgCode": "GGGGG",
        "PriceIncludes": "1 color;1 side;1 location",
        "Package": "Bulk",
        "WeightPerCarton": "19",
        "UnitsPerCarton": "250",
        "CartonL": "17",
        "CartonW": "21",
        "CartonH": "14",
        "ShipPointCountry": "US",
        "ShipPointZip": "60180",
        "ProdTime": "4 to 15 working days",
        "Comment": "Please call for additional information & to verify production times due to the large volume of orders at this time.",
        "PicLink": "https://www.promoplace.com/ws/ws.dll/QPic?SN=50422&P=32191156&RS=300",
        "Pics": {
          "-type": "array",
          "Pic": [
            {
              "Index": "1",
              "URL": "https://www.promoplace.com/ws/ws.dll/QPic?SN=50422&P=32191156&RS=300&I=1",
              "HasLogo": "1"
            },
            {
              "Index": "2",
              "URL": "https://www.promoplace.com/ws/ws.dll/QPic?SN=50422&P=32191156&RS=300&I=2",
              "HasLogo": "0"
            }
          ]
        },

        "SpecialAvailable": "0",
        "ExpDate": "12/31/19"
      }
    };
  }

  render() {
    console.log(this.props.match);
    return <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <img src="https://www.promoplace.com/ws/ws.dll/QPic?SN=50422&P=32191156&RS=300" />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-5 text-right">
                <strong>Description</strong>
              </div>
              <div className="col-md-1">
                :
            </div>
              <div className="col-md-6 text-left">
                {this.state.productDetails.Description}
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 text-right">
                <strong> Category</strong>
              </div>
              <div className="col-md-1">
                :
            </div>
              <div className="col-md-6 text-left">
                {this.state.productDetails.Category}
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 text-right">
                <strong> LineName </strong>
              </div>
              <div className="col-md-1">
                :
            </div>
              <div className="col-md-6 text-left">
                {this.state.productDetails.LineName}
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 text-right">
                <strong> PrName </strong>
              </div>
              <div className="col-md-1">
                :
            </div>
              <div className="col-md-6 text-left">
                {this.state.productDetails.PrName}
              </div>
            </div>


            <div className="row">
              <div className="col-md-5 text-right">
                <strong> Item Number </strong>
              </div>
              <div className="col-md-1">
                :
            </div>
              <div className="col-md-6 text-left">
                {this.state.productDetails.ItemNum}
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 text-right">
                <strong> Dimensions </strong>
              </div>
              <div className="col-md-1">
                :
            </div>
              <div className="col-md-6 text-left">
                {this.state.productDetails.Dimensions}
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 text-right">
                <strong> Keywords </strong>
              </div>
              <div className="col-md-1">
                :
            </div>
              <div className="col-md-6 text-left">
                {this.state.productDetails.Keywords}
              </div>
            </div>


            <div className="row">
              <div className="col-md-5 text-right">
                <strong> Colors </strong>
              </div>
              <div className="col-md-1">
                :
            </div>
              <div className="col-md-6 text-left">
                {this.state.productDetails.Colors}
              </div>
            </div>


            <div className="row">
              <div className="col-md-5 text-right">
                <strong> Themes </strong>
              </div>
              <div className="col-md-1">
                :
            </div>
              <div className="col-md-6 text-left">
                {this.state.productDetails.Themes}
              </div>
            </div>
            <br></br>
            <div className="row text">
              <table class="table table-bordered" >
                <thead>
                  <tr>

                    <th colspan="6" className="text-center">Quantity</th>

                  </tr>
                  <tr>
                    <th>Quantity1</th>
                    <th>Quantity2</th>
                    <th>Quantity3</th>
                    <th>Quantity4</th>
                    <th>Quantity5</th>
                    <th>Quantity6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.productDetails.Qty1}</td>
                    <td>{this.state.productDetails.Qty2}</td>
                    <td>{this.state.productDetails.Qty3}</td>
                    <td>{this.state.productDetails.Qty4}</td>
                    <td>{this.state.productDetails.Qty5}</td>
                    <td>{this.state.productDetails.Qty6}</td>
                  </tr>

                </tbody>
              </table>
            </div>

            <div className="row text">
              <table class="table table-bordered" >
                <thead>
                  <tr>

                    <th colspan="5" className="text-center">Products</th>

                  </tr>
                  <tr>
                    <th>Product1</th>
                    <th>Product2</th>
                    <th>Product3</th>
                    <th>Product4</th>
                    <th>Product5</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.productDetails.Prc1}</td>
                    <td>{this.state.productDetails.Prc2}</td>
                    <td>{this.state.productDetails.Prc3}</td>
                    <td>{this.state.productDetails.Prc4}</td>
                    <td>{this.state.productDetails.Prc5}</td>
                 
                  </tr>

                </tbody>
              </table>
            </div>


            <div className="row text">
              <table class="table table-bordered" >
                <thead>
                  <tr>

                    <th colspan="5" className="text-center">Categroy Products</th>

                  </tr>
                  <tr>
                    <th>Categroy Product1</th>
                    <th>Categroy Product2</th>
                    <th>Categroy Product3</th>
                    <th>Categroy Product4</th>
                    <th>Categroy Product5</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.productDetails.CatPrc1}</td>
                    <td>{this.state.productDetails.CatPrc2}</td>
                    <td>{this.state.productDetails.CatPrc3}</td>
                    <td>{this.state.productDetails.CatPrc4}</td>
                    <td>{this.state.productDetails.CatPrc5}</td>
                 
                  </tr>

                </tbody>
              </table>
            </div>


            <div className="row text">
              <table class="table table-bordered" >
                <thead>
                  <tr>

                    <th colspan="5" className="text-center">Net</th>

                  </tr>
                  <tr>
                    <th>Net1</th>
                    <th>Net2</th>
                    <th>Net3</th>
                    <th>Net4</th>
                    <th>Net5</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.productDetails.Net1}</td>
                    <td>{this.state.productDetails.Net2}</td>
                    <td>{this.state.productDetails.Net3}</td>
                    <td>{this.state.productDetails.Net4}</td>
                    <td>{this.state.productDetails.Net5}</td>
                 
                  </tr>

                </tbody>
              </table>
            </div>


          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return state;
};

const SageProductDetail = connect(
  mapStateToProps,
  null,
)(SageProductDetails);
export default SageProductDetail;
