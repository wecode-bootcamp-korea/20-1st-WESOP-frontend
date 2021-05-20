import React from 'react';
import './FilterBtnClose.scss';

class FilterBtnClose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button className="filterBtnClose">
        <img alt="화살표" src="./images/Close.png" />
      </button>
    );
  }
}

export default FilterBtnClose;
