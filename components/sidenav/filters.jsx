import React from 'react';
import { connect } from 'react-redux';
import CriteriaSection from './CriteriaSection';

const BuildArray = (obj, dType, name) => {
  return obj[name].map(x => {
    return { ...x, dType, selected: false };
  });
};

const filtersObj = stateObject => {
  const criteriaArray = [];
  if (
    stateObject.search &&
    stateObject.search.result &&
    stateObject.search.result.Dimensions
  ) {
    const { Dimensions } = stateObject.search.result;
    if (Dimensions.Categories) {
      Dimensions.Categories = BuildArray(Dimensions, 'category', 'Categories');
      criteriaArray.push({
        Header: 'Category',
        data: Dimensions.Categories,
        ShowMore: false,
      });
    }
    if (Dimensions.Suppliers) {
      Dimensions.Suppliers = BuildArray(Dimensions, 'supplier', 'Suppliers');
      criteriaArray.push({
        Header: 'Suppliers',
        data: Dimensions.Suppliers,
        ShowMore: false,
        selectMulti: true,
      });
    }
    if (Dimensions.Prices) {
      Dimensions.Prices = BuildArray(Dimensions, 'price', 'Prices');
      criteriaArray.push({
        Header: 'Prices',
        data: Dimensions.Prices,
        ShowMore: false,
      });
    }

    if (Dimensions.Colors) {
      Dimensions.Colors = BuildArray(Dimensions, 'color', 'Colors');
      criteriaArray.push({
        Header: 'Colors',
        data: Dimensions.Colors,
        ShowMore: false,
      });
    }
    if (Dimensions.Materials) {
      Dimensions.Materials = BuildArray(Dimensions, 'material', 'Materials');
      criteriaArray.push({
        Header: 'Materials',
        data: Dimensions.Materials,
        ShowMore: false,
      });
    }
    if (Dimensions.ImprintingMethods) {
      Dimensions.ImprintingMethods = BuildArray(
        Dimensions,
        'imprint_method',
        'ImprintingMethods',
      );
      criteriaArray.push({
        Header: 'Imprinting Methods',
        data: Dimensions.ImprintingMethods,
        ShowMore: false,
      });
    }

    if (Dimensions.Themes) {
      Dimensions.Themes = BuildArray(Dimensions, 'theme', 'Themes');
      criteriaArray.push({
        Header: 'Themes',
        data: Dimensions.Themes,
        ShowMore: false,
      });
    }
  }
  return criteriaArray.map((x, i) => {
    return <CriteriaSection key={i} criteria={x} />;
  });
};

const mapStateToProps = state => {
  return state;
};
const filters = connect(mapStateToProps)(filtersObj);
export default filters;
