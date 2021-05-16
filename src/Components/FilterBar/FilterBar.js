import React from 'react';
import FilterBarExtend from '../FilterBarExtend/FilterBarExtend';
import FilterBtnOpen from '../FilterBtn/FilterBtnOpen';
import FilterBtnClose from '../FilterBtn/FilterBtnClose';
import './FilterBar.scss';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterBtnOpen: true, filterBtnClose: false, hide: false };
  }
  componentDidMount() {
    window.addEventListener('wheel', this.handle);
  }
  componentWillUnmount() {
    window.removeEventListener('wheel', this.handle);
  }
  handle = e => {};

  filterBtn = () => {
    if (this.state.filterBtnOpen)
      this.setState({
        filterBtnOpen: false,
        filterBtnClose: true,
      });
    else {
      this.setState({ filterBtnOpen: true, filterBtnClose: false });
    }
  };

  render() {
    const { filterBtnOpen, filterBtnClose } = this.state;
    return (
      <div className="filterBar">
        <div className="filterBarNav">
          <ul className="filterList">
            <li>모든 스킨</li>
            <li>|</li>
            <li>스킨케어기프트</li>
            <li>클렌저</li>
            <li>각질 제거</li>
            <li>토너</li>
            <li>쉐이빙</li>
            <li>선케어</li>
            <li>키트</li>
          </ul>
          <div className="filterCategory" onClick={this.filterBtn}>
            {filterBtnOpen && <FilterBtnOpen />}
            {filterBtnClose && <FilterBtnClose />}
          </div>
        </div>
        {filterBtnClose && <FilterBarExtend filterBtnClose={filterBtnClose} />}
      </div>
    );
  }
}
export default FilterBar;
