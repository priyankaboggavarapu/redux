import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus,faSortUp,faSortDown } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'
import { selectedCriteria, searchProduct } from '../../actions/search';


class CriteriaSection extends Component {
  constructor(props) {
    super(props);
    this.selectItem = this.selectItem.bind(this);
    this.state = {
      ShowMore: false,
      hideAll: false,
      searchText: '',
    };
    this.showMore = this.showMore.bind(this);
    this.hideAll = this.hideAll.bind(this);
  }

  showMore() {
    this.setState({ ShowMore: !this.state.ShowMore });
  }

  selectItem(x) {
    this.props.selectedCriteria(x);
    this.props.selectProducts(this.props.search, x);
  }

  hideAll() {
    this.setState({ hideAll: !this.state.hideAll });
  }
  applySupplierFilter=(data)=>{
    console.log(data);
    data.filter(x=>x.selected).forEach(y=>{
      this.props.selectedCriteria(y);
    });
    this.props.selectProducts(this.props.search, null);
  }


  displayCheckBoxes = (x) => {
    if (this.props.criteria.selectMulti) {
      return (
        <div className="col-md-1">
          <input type="checkbox" onClick={()=>{
            x.selected=!x.selected;
          }} />
        </div>
      );
    }
    return <div className="col-md-1" />;
  };

  showApply = (dataToDisplay) => {
    if (this.props.criteria.selectMulti) {
      return (
        <div className="col-md-2 text-anchor">
          <label
            className="float-right text-anchor mt-3"
            onClick={()=>{
              this.applySupplierFilter(dataToDisplay)}}
          >
            Apply
          </label>
        </div>
      );
    }
    return <div className="col-md-2 text-anchor" />;
  };

  displaySearch = (dataToDisplay) => {
    return (
      <div className="row mb-3">
        <div className="col-md-10">
          <input
            type="text"
            className="form-control"
            placeholder={'Search ' + this.props.criteria.Header}
            onChange={e => {
              this.setState({ searchText: e.target.value });
            }}
          />
        </div>
        {this.showApply(dataToDisplay)}
      </div>
    );
  };
  displayItemName = x => {
    return (
      <div
        className="col-md-6"
        onClick={() => {
          this.selectItem(x);
        }}
      >
        {x.Name}
      </div>
    );
  };
  displayItemCount = x => {
    return (
      <div
        className="col-md-4"
        onClick={() => {
          this.selectItem(x);
        }}
      >
        {x.Products}
      </div>
    );
  };

  displayShowMore = () => {
    return (
      <label className="float-right text-anchor" onClick={this.showMore}>
        {this.state.ShowMore ? '-Show Less' : '+ Show More'}
      </label>
    );
  };

  displayContent = () => {
    let dataToDisplay = [];
    if (this.state.searchText == '') {
      dataToDisplay = this.state.ShowMore
        ? this.props.criteria.data
        : this.props.criteria.data.slice(0, 5);
    } else {
      dataToDisplay = this.state.ShowMore
        ? this.props.criteria.data.filter(x =>
            x.Name.toLowerCase().includes(this.state.searchText.toLowerCase()),
          )
        : this.props.criteria.data
            .filter(x =>
              x.Name.toLowerCase().includes(
                this.state.searchText.toLowerCase(),
              ),
            )
            .slice(0, 5);
    }

    const scrollClass = this.state.ShowMore
      ? 'card-body small card-scroll '
      : 'card-body small ';

    if (this.props.criteria && this.props.criteria.data) {
      if (this.state.hideAll) {
        return <div />;
      }
      return (
        <div className={scrollClass}>
          {this.displaySearch(dataToDisplay)}
          {dataToDisplay.map((x, i) => {
            return (
              <div key={i} className="row">
                {this.displayCheckBoxes(x)}
                {this.displayItemName(x)}
                {this.displayItemCount(x)}
              </div>
            );
          })}
          {this.displayShowMore()}
        </div>
      );
    }
  };

  displayHeader = () => {
   let icon = <FontAwesomeIcon icon={faSortUp} />;
   if(this.state.hideAll){
     icon =<FontAwesomeIcon icon={faSortUp} />
   }
   else{
    icon= <FontAwesomeIcon icon={faSortDown} />
   }
    return (
      <div className="card-header primary" onClick={this.hideAll}>
       {this.props.criteria.Header} <span class="float-right"> {icon}</span>
      </div>
    );
  };
  render() {
    return (
      <div className="card border-light">
        {this.displayHeader()}
        {this.displayContent()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => ({
  selectedCriteria: item => {
    dispatch(selectedCriteria(item));
  },
  selectProducts: (searchCriteria, item) => {
    dispatch(searchProduct(searchCriteria, item,false,0));
  },
});
const CriteriaSectionDetails = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CriteriaSection);

export default CriteriaSectionDetails;
