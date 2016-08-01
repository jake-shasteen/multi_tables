import React, { Component } from 'react';
import MultiTable from './MultiTable.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Some multiplication tables...</h1>
        <MultiTable n='20' />
      </div>
    );
  }
}

export default App;
