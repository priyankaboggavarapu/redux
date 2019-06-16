import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default hot(App);
