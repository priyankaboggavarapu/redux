import React, { Component } from "react";
//import { Container, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import "./AdvancedSearch.css";
import AutoComplete from "./autocomplete";
class AdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.closeAdvancedSearch = this.closeAdvancedSearch.bind(this);
    this.advancedSearchSubmit = this.advancedSearchSubmit.bind(this);
    this.advancedSearch = this.advancedSearch.bind(this);
    this.advancedSearchSelection = this.props.advancedSearchSelection;
    this.state = {
      advancedSearchCriteria: this.props.advancedSearchSelection,
      clear: false
    };
  }
  selectedCriteria = (type, value) => {
    const { advancedSearchCriteria } = this.state;
    advancedSearchCriteria[type] = value;
    this.setState({ advancedSearchCriteria });
    console.log(this.state);
  };
  prepareQuery() {}
  closeAdvancedSearch() {
    this.props.displayAdvancedSearch();
  }
  autoComplete(listType, query) {}
  clearAll = () => {
    let { advancedSearchCriteria } = this.state;
    advancedSearchCriteria = {
      criteriaAnd: "",
      criteriaOr: "",
      criteriaExact: "",
      category: "",
      shape: "",
      size: "",
      theme: "",
      supplier_country: "",
      supplier_state: "",
      typeOfBudget: { type: "price", from: "", to: "" },
      numberType: "supplier",
      asi: "",
      material: "",
      market: "",
      color: "",
      product_number: "",
      imprint_method: "",
      quantity: "",
      province: "",
      region: ""
    };
    this.setState({ advancedSearchCriteria, clear: true });
  };
  advancedSearch(e) {
    let currentState = this.state;
    if (e.target.name == "from") {
      currentState.advancedSearchCriteria.typeOfBudget.from = e.target.value;
    }
    if (e.target.name == "to") {
      currentState.advancedSearchCriteria.typeOfBudget.to = e.target.value;
    } else {
      currentState.advancedSearchCriteria[e.target.name] = e.target.value;
    }
    this.setState(currentState);
    console.log(this.state);
    //this.props.closeAdvancedSearch();
  }
  advancedSearchSubmit() {
    this.props.handleAdvancedSearch(this.state.advancedSearchCriteria);
    this.closeAdvancedSearch();
  }

  render() {
    let advancedSearchSelection = this.state.advancedSearchCriteria;
    return (
      <div className="container">
        <div className="bckclr">
          <h5>Search for products using...</h5>
          <div className="row">
            <div className="col-md-3">
              <strong>All of these words(AND)</strong>
              <input
                className="inputtxt"
                name="criteriaAnd"
                value={advancedSearchSelection.criteriaAnd}
                onChange={this.advancedSearch}
                type="text"
              />
            </div>
            <div className="col-md-3">
              <strong>Any of these Words(OR)</strong>
              <input
                className="inputtxt"
                value={advancedSearchSelection.criteriaOr}
                onChange={this.advancedSearch}
                type="text"
                name="criteriaOr"
              />
            </div>
            <div className="col-md-3">
              <strong>This exact phrase </strong>
              <input
                type="text"
                value={advancedSearchSelection.criteriaExact}
                onChange={this.advancedSearch}
                name="criteriaExact"
              />
            </div>
            <div className="col-md-3" />
          </div>
        </div>
        
          <div className="row">
            <div className="col-md-6 bckclr">
                <h5>Supplier</h5>
                <div className="form-group">
                  <input
                    type="radio"
                    value="supplier"
                    defaultChecked="true"
                    // checked={advancedSearchSelection.numberType=='supplier'}
                    onChange={() => {
                      advancedSearchSelection.numberType = "supplier";
                    }}
                    name="asiGroup"
                  />
                  Supplier &nbsp;
                  <input
                    type="radio"
                    value="asi"
                    // checked={advancedSearchSelection.numberType=='asi'}
                    onChange={() => {
                      advancedSearchSelection.numberType = "asi";
                    }}
                    name="asiGroup"
                  />
                  &nbsp; ASI Number&nbsp;
                  <input
                    type="radio"
                    value="line"
                    // checked={advancedSearchSelection.numberType=='line_name'}
                    onChange={() => {
                      advancedSearchSelection.numberType = "line_name";
                    }}
                    name="asiGroup"
                  />
                  &nbsp; Linename &nbsp;
                  <input
                    type="email"
                    className="form-control"
                    name="asi"
                    value={advancedSearchSelection.asi}
                    onChange={this.advancedSearch}
                    placeholder=""
                    required
                  />
              </div>
              <div className="row">
                <div className="col-md-6">
                  State/Province
                  <div className="input-group">
                    {/* <input
                        type="text"
                        className="form-control"
                        placeholder="State/Province"
                        name="province"
                        value=""
                        onChange=""
                      /> */}
                    <AutoComplete
                      clear={this.state.clear}
                      type="supplier_state"
                      placeholder="State"
                      selectedCriteria={this.selectedCriteria}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  Region/Country
                  <div className="input-group">
                    <AutoComplete
                      clear={this.state.clear}
                      type="supplier_country"
                      placeholder="Country"
                      selectedCriteria={this.selectedCriteria}
                    />
                  </div>
                </div>
              </div>
              <div className="row bckclr">
                <h5>Market</h5>
                <label>Countries the products can be shipped to</label>
                <br />
                <input
                  type="radio"
                  name="market"
                  value="US"
                  defaultChecked="true"
                  onClick={e => {
                    let currentState = this.state;
                    currentState.advancedSearchCriteria["market"] = "US";
                    this.setState(currentState);
                  }}
                />{" "}
                United States &nbsp; &nbsp;
                <input
                  type="radio"
                  name="market"
                  value="CANADA"
                  onClick={e => {
                    let currentState = this.state;
                    currentState.advancedSearchCriteria["market"] = "CANADA";
                    this.setState(currentState);
                    console.log(
                      "maket",
                      this.state.advancedSearchCriteria.market
                    );
                  }}
                />{" "}
                Canada
            </div>
            
          </div>
          <div className="col-md-6">
              <div className="bckclr">
                <h5>Product</h5>
                <input
                  type="radio"
                  name="price"
                  value="Price"
                  defaultChecked="true"
                  onClick={e => {
                    let currentState = this.state;
                    currentState.advancedSearchCriteria["typeOfBudget"][
                      "type"
                    ] = "price";
                    this.setState(currentState);
                    console.log(this.state.advancedSearchCriteria);
                    console.log(
                      "type",
                      this.state.advancedSearchCriteria.typeOfBudget
                    );
                  }}
                />
                Price &nbsp; &nbsp;
                <input
                  type="radio"
                  name="price"
                  value="Cost"
                  onClick={e => {
                    let currentState = this.state;
                    currentState.advancedSearchCriteria["typeOfBudget"][
                      "type"
                    ] = "cost";
                    this.setState(currentState);
                  }}
                />{" "}
                Cost
                <div className="row mb-2">
                  <div className="col-md-3">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                      <Input
                        placeholder="From"
                        name="from"
                        value={advancedSearchSelection.typeOfBudget.from}
                        onChange={this.advancedSearch}
                      />
                    </InputGroup>
                  </div>
                  {/* <div className="col-md-1">To</div> */}
                  <div className="col-md-3">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                      <Input
                        placeholder="To"
                        name="to"
                        value={advancedSearchSelection.typeOfBudget.to}
                        onChange={this.advancedSearch}
                      />
                    </InputGroup>
                  </div>
                  <div className="col-md-4">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Quantity"
                        name="quantity"
                        value={advancedSearchSelection.quantity}
                        onChange={this.advancedSearch}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      {/* <input
                        type="text"
                        className="form-control"
                        placeholder="Category"
                        name="category"
                        value={advancedSearchSelection.category}
                        onChange={this.advancedSearch}
                      /> */}
                      <AutoComplete
                        clear={this.state.clear}
                        type="category"
                        placeholder="Category"
                        selectedCriteria={this.selectedCriteria}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      {/* <input
                        type="text"
                        className="form-control"
                        placeholder="Material"
                        name="material"
                        value={advancedSearchSelection.material}
                        onChange={this.advancedSearch}
                      /> */}
                      <AutoComplete
                        clear={this.state.clear}
                        type="material"
                        placeholder="Material"
                        selectedCriteria={this.selectedCriteria}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      {/* <label for="inputEmail">Color</label> */}
                      {/* <input
                        type="text"
                        className="form-control"
                        placeholder="Color"
                        name="color"
                        value={advancedSearchSelection.color}
                        onChange={this.advancedSearch}
                      /> */}
                      <AutoComplete
                        clear={this.state.clear}
                        type="color"
                        placeholder="Color"
                        selectedCriteria={this.selectedCriteria}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      {/* <label for="inputEmail">Product Number</label> */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Product Number"
                        name="product_number"
                        value={advancedSearchSelection.product_number}
                        onChange={this.advancedSearch}
                      />
                      {/* <AutoComplete clear={this.state.clear} type='material' placeholder='Material' selectedCriteria={this.selectedCriteria}/> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      {/* <label for="inputEmail">Size</label> */}
                      {/* <input
                        type="text"
                        className="form-control"
                        placeholder="Size"
                        name="size"
                        value={advancedSearchSelection.size}
                        onChange={this.advancedSearch}
                      /> */}
                      <AutoComplete
                        clear={this.state.clear}
                        type="size"
                        placeholder="Size"
                        selectedCriteria={this.selectedCriteria}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      {/* <label for="inputEmail">Imprint Number</label> */}
                      {/* <input
                        type="text"
                        className="form-control"
                        placeholder="Imprint Method"
                        name="imprint_method"
                        value={advancedSearchSelection.imprint_method}
                        onChange={this.advancedSearch}
                      /> */}
                      <AutoComplete
                        clear={this.state.clear}
                        type="imprint_method"
                        placeholder="Imprint Method"
                        selectedCriteria={this.selectedCriteria}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      {/* <label for="inputEmail">Shape</label> */}
                      {/* <input
                        type="text"
                        className="form-control"
                        placeholder="Shape"
                        name="shape"
                        value={advancedSearchSelection.shape}
                        onChange={this.advancedSearch}
                      /> */}
                      <AutoComplete
                        clear={this.state.clear}
                        type="shape"
                        placeholder="Shape"
                        selectedCriteria={this.selectedCriteria}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      {/* <label for="inputEmail">Theme</label> */}
                      {/* <input
                        type="text"
                        className="form-control"
                        placeholder="Theme"
                        name="theme"
                        value={advancedSearchSelection.theme}
                        onChange={this.advancedSearch}
                      /> */}
                      <AutoComplete
                        clear={this.state.clear}
                        type="theme"
                        placeholder="Theme"
                        selectedCriteria={this.selectedCriteria}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

          <div className="row">
            <div className="col-md-6">
              <div className="col-md-6 search-center">
                <h5 className="text-anchor" onClick={this.clearAll}>
                  Clear All{" "}
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4 search-center">
                  <h5
                    className="text-anchor"
                    onClick={this.closeAdvancedSearch}
                  >
                    Close{" "}
                  </h5>
                </div>
                <div className="col-md-3">
                  <button
                    className="btn btn-primary"
                    onClick={this.advancedSearchSubmit}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}
export default AdvancedSearch;
