import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchByText,searchProduct } from '../../actions/search';
class BasicSearch extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAdvancedSearch = this.handleAdvancedSearch.bind(this);
    this.state = {
      queryText: '',
      showAdvancedSearch:false
    };
  }

  handleChange(e) {
    this.setState({ queryText: e.target.value });
  }

  handleSearch() {
    this.props.searchByText(this.state.queryText)
    this.props.searchItem(this.props.search,null,false);
  }
  handleAdvancedSearch(){
    this.props.displayAdvancedSearch();
  }

  componentDidMount() {
    this.props.searchItem(this.props.search,null,false);
  }

  render() {
    return (
      <div className="mt-2">
        <div className="row">
          <div className="col-md-3 offset-md-1 ">
            <input
              type="text"
              placeholder="Search Product"
              name="Search Product"
              onChange={this.handleChange}
              className="form-control  mt-1"
            />
          </div>
          <div className="col-md-3">
            <button
              type="button"
              className="btn btn-small btn-primary col-md-4"
              onClick={this.handleSearch}
            >
              Search
            </button>
          </div>
          <div className="col-md-5">
            <button
              type="button"
              className="btn btn-small btn-primary col-md-4"
              onClick={this.handleAdvancedSearch}
            >
              Advanced Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  searchItem: (searchCriteria, item) => {
    dispatch(searchProduct(searchCriteria, item,false,0));
  },
  searchByText:(item)=>{
    dispatch(searchByText(item)); 
  }
});

const BasicSearchForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasicSearch);

export default BasicSearchForm;
