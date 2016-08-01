import React, { Component } from 'react';
import './TableHeader.css';

class TableHeader extends Component {

  render() {
    return (
      <th>{ this.props.c }</th>
    );
  }
}

export default TableHeader;
