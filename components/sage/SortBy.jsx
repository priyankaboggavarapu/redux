import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sage.css';
import {
  GetSageSortByList,
  GetSortBy,
  searchProductsInHouse
} from '../../actions/sage.action';

class SageSortBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryText: '',
    };
  }
  componentDidMount() {
    this.props.getSortBy();
  }

  render() {
    let options = <option>SortBy</option>;
    if (this.props.SageSearch.SortByList.length > 0) {
      options = this.props.SageSearch.SortByList.map((x,index) => {
        return <option key={index} value={x}>{x}</option>;
      });
    }
    return (
    //   <div className="mt-2">
        <div className="row">
          <div className="col-md-4 form-group">
            <select
            className="form-control drop text-box"
              onChange={e => {
                this.props.getSortBy(e.target.value);
              }}>
              <option value=''>SortBy</option>
              {options}
            </select>
          </div>
        </div>
    //   </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  getSortBy: () => {
    dispatch(GetSageSortByList());
  },
  getSortBy: SortById => {
    dispatch(GetSortBy(SortById));
  },
  searchProductsInHouse :searchTerm =>{
    dispatch(searchProductsInHouse(searchTerm));
  }
});

const SageSortByList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SageSortBy);

export default SageSortByList;
