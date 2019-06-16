import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeSelectedCriteria, searchProduct } from '../../actions/search';

class SelectedCriteria extends Component {
  constructor(props) {
    super(props);
    this.clearAll = this.clearAll.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  clearAll() {}

  removeItem(item) {
    this.props.removeSelectedCriteria(item);

    this.props.searchProduct(this.props.search, item,false,0);
  }

  render() {
    let displayContent = '';
    if (this.props.search.selectedItems.length > 0) {
      let selectedCriterias=this.props.search.selectedItems.map(x=>x.dType);
      let distinctCriterias = [...new Set(selectedCriterias)];
      console.log(distinctCriterias);
      let finalObject = distinctCriterias.map(x=>{
        let name =''
        if(x=='category')
          name= 'Category';
        if(x=='supplier')
          name='Suppliers';
        if(x=='imprint_method'){
          name ='Impringint Methods';
        }
        if(x=='theme'){
          name ='Themes';
        }
        if(x=='color'){
          name ='Colors';
        }
        if(x=='price'){
          name='Price';
        }
        if(x=='material'){
          name='Material';
        }
        if(x=='material'){
          name='Material';
        }
        return {name:name,data:this.props.search.selectedItems.filter(y=>y.dType==x)}
      })
      console.log(finalObject)
      displayContent = (
        <div className="card border-light">
          <div className="card-header primary">Selected Items</div>
          <div className="card-body small">
            {finalObject.map((x, i) => {
              return (
                <div>
                  <div className='row mt-1 ml-2'>
                    <h6> {x.name}</h6>
                    </div>
                    {this.getItems(x.data)}
                </div>)
                      
                {/* <div
                  key={i}
                  className="row"
                  onClick={() => {
                    this.removeItem(x);
                  }}>
                  {this.getItems(x.data)}
                  <div className="col-md-8">{x.Name}</div>
                  <div className="col-md-4">X</div>
                </div> */}
              
            })}
          </div>
        </div>
      );
    }
    return <div>{displayContent}</div>;
  }
  getItems =(data)=>{
    let result = data.map((x,i)=>{
    return <div key={i}
    className="row ml-2"
    onClick={() => {
      this.removeItem(x);
    }}>
       <div className="col-md-8">{x.Name}</div>
    <div className="col-md-4">X</div>
  </div>})
    return result;
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => ({
  removeSelectedCriteria: item => {
    dispatch(removeSelectedCriteria(item));
  },
  searchProduct: (search, item) => {
    dispatch(searchProduct(search, item,false,0));
  },
});
const SelectedCriteriaDetails = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectedCriteria);

export default SelectedCriteriaDetails;
