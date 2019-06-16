import React from 'react';
import SageCategoryList from './category';
import SageProductList from './products';
import SageThemeList from './theme';
import SageSortByList from './SortBy';
import './sage.css';
import refresh from '../../images/refresh.png';

export const SageSearch = () => {
  return (

    <div className="container">
      <br></br>
      <div className="row">
        <div className="col-md-1">
          QuickSearch
      </div>
        <div className="col-md-7">
          <div class="input-group add-on">
            <input class="form-control text-box" placeholder="Search" name="srch-term" id="srch-term" type="text" />
            <div class="input-group-btn">
              <button class="btn btn-info btn-height" type="submit">
                Search</button>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <img src={refresh} className="refresh-img" />
        </div>


      </div>
      <br></br>
    
        <div className="row">
          <div className="col-md-3">

            <SageCategoryList />
            <SageProductList />
            <SageThemeList />
            <SageSortByList />
          </div>
          <div className="col-md-3">


            <div className="form-group">
              <input className="form-control text-box" type="text" name="VendorItem" placeholder="Vendor Item" />
            </div>
            <div className="form-group">
              <input className="form-control text-box" type="text" name="Keywords" placeholder="Keywords" />
            </div>
            <div className="form-group">
              <input className="form-control text-box" type="text" name="Color" placeholder="Color" />
            </div>
            <div className="form-group">
              <input className="form-control text-box" type="text" name="Sage SPC" placeholder="Sage SPC" />
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <div class="form-check">
                <label>
                  <input type="checkbox" name="check" /> <span class="label-text">Verified</span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <div class="form-check">
                <label>
                  <input type="checkbox" name="check" /> <span class="label-text">Environmentally Friendly</span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <div class="form-check">
                <label>
                  <input type="checkbox" name="check" /> <span class="label-text">Recycable</span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <div class="form-check">
                <label>
                  <span class="label-text">Production Days:</span>	<input type="text" className="form-control days-text text-box" />
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-3">

            <div className="form-group">
              <div class="form-check">
                <label>
                  <input type="checkbox" name="check" /> <span class="label-text">New Product</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <div class="form-check">
                <label>
                  <input type="checkbox" name="check" /> <span class="label-text">Union Shop</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <div class="form-check">
                <label>
                  <input type="checkbox" name="check" /> <span class="label-text">All Audiences</span>
                </label>
              </div>
            </div>
            <div className="row min-max">
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control text-box" type="text" placeholder="min" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control text-box" type="text" placeholder="max" />
                </div>
              </div>
            </div>







          </div>

        </div>

      </div>
   
  );
};
