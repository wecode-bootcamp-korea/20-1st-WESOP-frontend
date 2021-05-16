import React from 'react';
import './FilterBtnOpen.scss';

class FilterBtnOpen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button className="filterBtnOpen">
        <p>필터</p>
        <img alt="화살표" src="./images/DownArrow.png" />
      </button>
    );
  }
}

export default FilterBtnOpen;
