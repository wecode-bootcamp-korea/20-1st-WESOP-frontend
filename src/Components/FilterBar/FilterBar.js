import React from 'react';
import FilterBarExtend from '../FilterBarExtend/FilterBarExtend';
import FilterBtnOpen from '../FilterBtn/FilterBtnOpen';
import FilterBtnClose from '../FilterBtn/FilterBtnClose';
import { BrowserRouter, Link } from 'react-router-dom';
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
      .then(categorys => {
        const categories = {};
        categorys.result.forEach(category => {
          categories[category[0].category_id] = categories[
            category[0].category_id
          ] || {
            menu_id: category[0].menu_id,
            menu_name: category[0].menu_name,
            category_id: category[0].category_id,
            category_name: category[0].category_name,
            feature_category_name:
              category[0].product_features[0].feature_category_name,
            features_use: category[0].product_features[1].features,
            features: category[0].product_features[0].features,
            product_ingredients: category[0].product_ingredients,
          };
        });
        this.setState({
          category: Object.values(categories),
        });
      });
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
    const categoryList = category.map(categorys => (
      <>
        <Link to="d">
          <li>{categorys.category_name}</li>
        </Link>
      </>
    ));
    return (
      <>
        {category && (
          <div className="filterBar">
            <div className="filterBarBefore">
              <div className="filterBarNav" ref={this.filterBar}>
                <ul className="filterList">
                  <li>모든상품</li>
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
          </div>
        )}
        {filterBtnClose && (
          <FilterBarExtend
            category={category}
            filterBtnClose={filterBtnClose}
            styleChange={this.state.offsetTop < 0}
          />
        )}
      </>
    );
  }
}
export default FilterBar;
