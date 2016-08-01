import React, { Component } from 'react';
import TableHeader from './TableHeader.js';
import TableRow from './TableRow.js';
import './MultiTable.css';

class MultiTable extends Component {
  generateNumbers() {
    let numbers = [];
    for( var i = 1; i <= this.props.n; i++ ) {
      numbers.push( i );
    }
    return numbers;
  };

  render() {
    let multipliers = this.generateNumbers();

    let tableHeaders = [0].concat( multipliers ).map( ( number ) => {
      return (
          <TableHeader key={ number} c={ number } />
      );
    });

    let tableRows = multipliers.map( ( number ) => {
      return (
        <TableRow key={ number } r={ number } multipliers={ multipliers } />
      );
    })

    return (
      <table>
        <tr>
          { tableHeaders }
        </tr>
        { tableRows }
      </table>
    );
  };
};

export default MultiTable;
