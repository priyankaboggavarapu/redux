import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sage.css';
import {
  GetSageThemeList,
  GetProductsByTheme,
  searchProductsInHouse
} from '../../actions/sage.action';

class SageTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryText: '',
    };
  }
  componentDidMount() {
    this.props.getThemes();
  }

  render() {
    let options = <option>Select Theme</option>;
    if (this.props.SageSearch.ThemeList.length > 0) {
      options = this.props.SageSearch.ThemeList.map((x,index) => {
        return <option key={index} value={x}>{x}</option>;
      });
    }
    return (
      // <div className="mt-2">
        <div className="row">
          <div className="col-md-4 form-group">
            <select
             className="form-control drop "
              onChange={e => {
                this.props.getProductsByTheme(e.target.value);
              }}>
              <option value=''>Select Theme</option>
              {options}
            </select>
          </div>
        </div>
      // </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  getThemes: () => {
    dispatch(GetSageThemeList());
  },
  getProductsByTheme: ThemeId => {
    dispatch(GetProductsByTheme(ThemeId));
  },
  searchProductsInHouse :searchTerm =>{
    dispatch(searchProductsInHouse(searchTerm));
  }
});

const SageThemeList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SageTheme);

export default SageThemeList;
