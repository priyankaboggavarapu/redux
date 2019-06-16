import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import "./autosuggest.css";
import Axios from 'axios'

export const renderSuggestion = suggestion => {
  return <span>{suggestion}</span>;
};
export const escapeRegexCharacter = str => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
export default class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [""],
      isLoading: false
    };

    this.lastRequestId = null;
  }
  
  loadSuggestions(value) {
    // Cancel the previous request
    if (this.lastRequestId !== null) {
      clearTimeout(this.lastRequestId);
    }

    this.setState({
      isLoading: true
    });

    // Fake request
    let url =`https://api.asicentral.com/v1/lists/auto_complete/${this.props.type}.json?term=${value}`
    Axios.get(url, {
        headers: {
          Authorization:
            "AsiMemberAuth client_id=500103135 &client_secret=57735a8dde6007de5346d02a3680915b"
        }
      }).then(result=>{
        this.setState({
            isLoading:false,
            suggestions:result.data
        })
      }).catch(err=>{
        console.log(err);
      });
  }

  getSuggestionValue = suggestion => {
    console.log(suggestion);
    this.props.selectedCriteria(this.props.type,suggestion);
   
  return suggestion;
};
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.loadSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: [],
      });
  };
  
  static getDerivedStateFromProps(props, state){
     if(props.clear && !state.iscleared){
       state.iscleared=true;
       state.value='';
     }
  }
  

  render() {
   
    let { value, suggestions, isLoading } = this.state;
    let inputProps = {
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange
    };
    const status = isLoading ? "Loading..." : "Type to load suggestions";

    return<div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>;
    
  }

//   getMatchingItems(item) {
//     return this.state.suggestions.filter(x => x.toLowerCase()==item.toLowerCase());
//   }
}
