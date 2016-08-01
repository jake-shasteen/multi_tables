import React, { Component } from 'react';
import './TableElement.css';

class TableElement extends Component {
  render() {
    return (
      <td>{ this.props.product }</td>
    );
  }
};

export default TableElement;
