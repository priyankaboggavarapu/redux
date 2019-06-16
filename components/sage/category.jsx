import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sage.css';
import {
  GetSageCategoryList,
  GetProductsByCategory,
  searchProductsInHouse
} from '../../actions/sage.action';
import SageThemeList from './theme'
class SageCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryText: '',
    };
  }

  //   handleChange(e) {
  //     this.setState({ queryText: e.target.value });
  //   }

  //   handleSearch() {
  //     this.props.searchByText(this.state.queryText)
  //     this.props.searchItem(this.props.search,null,false);
  //   }

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    let options = <option>Select Category</option>;
    if (this.props.SageSearch.CategoryList.length > 0) {
      options = this.props.SageSearch.CategoryList.map((x,index) => {
        return <option key={index} value={x.Num[0]}>{x.Name[0]}</option>;
      });
    }
    return (
      // <div className="mt-2">
        <div className="row">
          <div className="col-md-4 form-group">
            <select
              className="form-control drop text-box"
              onChange={e => {
                this.props.getProductsByCategory(e.target.value);
              }}>
              <option  className="form-control" value=''>Select Category</option>
              {options}
            </select>
          </div>
          {/* <div className="col-md-4 ">
          <SageThemeList />
          </div> */}
          {/* <div className="col-md-4">
            <input
              className="form-control"
              placeholder='Search By Product Name, Price'
              onChange={(e)=>{
                this.props.searchProductsInHouse(e.target.value);
              }}
            />
          </div> */}
        </div>
      // </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  getCategories: () => {
    dispatch(GetSageCategoryList());
  },
  getProductsByCategory: categoryId => {
    dispatch(GetProductsByCategory(categoryId));
  },
  searchProductsInHouse :searchTerm =>{
    dispatch(searchProductsInHouse(searchTerm));
  }
});

const SageCategoryList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SageCategory);

export default SageCategoryList;
