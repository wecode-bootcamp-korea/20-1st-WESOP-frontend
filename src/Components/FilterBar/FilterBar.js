import React from 'react';
import FilterBarExtend from '../FilterBarExtend/FilterBarExtend';
import FilterBtnOpen from '../FilterBtn/FilterBtnOpen';
import FilterBtnClose from '../FilterBtn/FilterBtnClose';
import './FilterBar.scss';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterBtnOpen: true,
      filterBtnClose: false,
      hide: false,
      offsetTop: 0,
      category: [],
    };
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handle);
    fetch('./data/mockdata.json')
      .then(categorys => categorys.json())
      .then(categorys =>
        this.setState({
          category: categorys.result,
        })
      );
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handle);
  }

  handle = () => {
    this.setState({
      offsetTop: this.filterBar.current.getBoundingClientRect().top,
    });
  };

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
  filterBar = React.createRef();

  render() {
    const { filterBtnOpen, filterBtnClose, category } = this.state;
    let array = [];
    array = array.push(category[0].category_name);
    const set = new Set(array);
    const unique = [...set];
    console.log(unique);
    const categoryList =
      category &&
      category.map(categorys => (
        <>
          <li>{categorys[0].category_name}</li>
        </>
      ));
    return (
      <>
        {category && (
          <div className="filterBar">
            <div className="filterBarBefore">
              <div className="filterBarNav" ref={this.filterBar}>
                <ul className="filterList">
                  <li>모든스킨</li>
                  <li>|</li>
                  {categoryList}
                </ul>
                <div className="filterCategory" onClick={this.filterBtn}>
                  {filterBtnOpen && <FilterBtnOpen />}
                  {filterBtnClose && <FilterBtnClose />}
                </div>
              </div>
            </div>

            {this.state.offsetTop < 0 && (
              <>
                <div className="filterBarAfter">
                  <img
                    className="logo"
                    alt="위솝로고"
                    src="/images/wesop.png"
                  />
                  <div className="filterCategory" onClick={this.filterBtn}>
                    {filterBtnOpen && <FilterBtnOpen />}
                    {filterBtnClose && <FilterBtnClose />}
                  </div>
                </div>
              </>
            )}
            {filterBtnClose && (
              <FilterBarExtend
                category={category}
                filterBtnClose={filterBtnClose}
                styleChange={this.state.offsetTop < 0}
              />
            )}
          </div>
        )}
      </>
    );
  }
}
export default FilterBar;
