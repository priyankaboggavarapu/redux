import React, { Component } from "react";
import { Header } from "../header";
import { SideNav } from "../sidenav/sidenav";
import ProductList from "../product/productList";
import BasicSearch from "./search";
import { connect } from 'react-redux';
import {searchProduct,setAdvancedCriteria,clearProductList} from '../../actions/search';
import AdvancedSearch from "../AdvancedSearch/AdvancedSearch";

 class HomeComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdvancedSearch: false
    };
    this.displayAdvancedSearch = this.displayAdvancedSearch.bind(this);
    this.handleAdvancedSearch = this.handleAdvancedSearch.bind(this);
  }
  displayAdvancedSearch () {
    this.setState({ showAdvancedSearch: !this.state.showAdvancedSearch });
  }
  handleAdvancedSearch(data){
    console.log(data);
    console.log(this.props);
    this.props.setAdvancedCriteria(data);
    this.props.clearProductList();
    this.props.searchProduct(this.props.search);
  }

  render() {
      console.log(this.props)
    let renderContent = (
      <div class="container-fluid">
        <BasicSearch displayAdvancedSearch ={this.displayAdvancedSearch}/>
        <div className="row">
          <SideNav  />
          <ProductList />
        </div>
      </div>
    );

    if (this.state.showAdvancedSearch) {
      renderContent = <AdvancedSearch 
      handleAdvancedSearch={this.handleAdvancedSearch}
      displayAdvancedSearch ={this.displayAdvancedSearch}
      advancedSearchSelection={this.props.search.advancedSearch} />;
    }
    return (
      <div>
        <div className="container-fluid">
          <Header />
        </div>

        {renderContent}
      </div>
    );
  }
}
  

const mapStateToProps = state => {
    return state;
  };

  const mapDispatchToProps = dispatch => ({
    searchProduct: (searchCriteria, item) => {
      dispatch(searchProduct(searchCriteria, item,false,0));
    },
    setAdvancedCriteria :(data) => {
        dispatch(setAdvancedCriteria(data));
      },
      clearProductList:()=>{
          dispatch(clearProductList())
      }
  });
  
  const HomeForm = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HomeComponet);  

  export default HomeForm; 
