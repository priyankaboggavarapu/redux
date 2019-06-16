import React from 'react';
import { connect } from 'react-redux';

let ResultCount = stateObject => {
  let supplierCount = 0;
  let totalCount = 0;
  if (stateObject.search && stateObject.search.result) {
    totalCount = stateObject.search.result.ResultsTotal;
    supplierCount = stateObject.search.result.SuppliersTotal?stateObject.search.result.SuppliersTotal:0;
  }
  return (
    <article className="card-group-item">
      <header className="card-header">
        <div className="row">
          <div className="col-md-10 small">
            <label className="title " />{totalCount+" "}
            <label>Results from Suppliers{" "+supplierCount} </label>
          </div>
        </div>
      </header>
    </article>
  );
};

const mapStateToProps = state => {
  return state;
};
ResultCount = connect(mapStateToProps)(ResultCount);
export default ResultCount;
