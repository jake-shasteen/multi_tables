import React, { Component } from 'react';
import TableElement from './TableElement.js';
import './TableRow.css';

class TableRow extends Component {


  render() {
    let products = this.props.multipliers.map( (multiplier) => ( multiplier * this.props.r ) );

    let tableElements = products.map( ( product, i ) => {
      return (
        <TableElement key={ i } product={ product } />
      );
    })

    return (
      <tr>
        <th>{ this.props.r }</th>
        { tableElements }
      </tr>
    );
  }
}

export default TableRow;
