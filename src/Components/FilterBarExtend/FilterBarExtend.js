import React from 'react';
import { BrowserRouter, withRouter, Link } from 'react-router-dom';
import './FilterBarExtend.scss';

class FilterBarExtend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      categoryExpend: [],
    };
  }
  componentDidMount() {
    const categories = {};
    this.state.category.forEach(category => {
      categories[category.features] = categories[category.features] || {
        check_menu_id: category.menu_id,
        check_menu_name: category.menu_name,
        check_category_id: category.category_id,
        check_category_name: category.category_name,
        check_features_use: category.feature_use,
        check_features: category.features,
        check_product_ingredients: category.product_ingredients,
      };
    });
    this.setState({ categoryExpend: Object.values(categories) });
  }
  render() {
    const { category, categoryExpend } = this.state;
    console.log(categoryExpend);
    // const skinTypeCheck = category.map(categorys => (
    //   <>
    //     <label>
    //       <li>
    //         <input type="checkbox" value="" />
    //         {categorys.features}
    //       </li>
    //     </label>
    //   </>
    // ));
    // const themeUseCheck = category.map(categorys => (
    //   <>
    //     <label>
    //       <li>
    //         <input type="checkbox" value="" />
    //         {categorys.features_use}
    //       </li>
    //     </label>
    //   </>
    // ));
    // const themeSmellCheck = category.map(categorys => (
    //   <>
    //     <label>
    //       <li>
    //         <input type="checkbox" value="" />
    //         {categorys.product_ingredients}
    //       </li>
    //     </label>
    //   </>
    // ));

    return (
      <div
        className="filterBarNavExpend"
        style={{
          backgroundColor: this.props.styleChange && '#fffef2',
          borderBottom: this.props.styleChange && '1px solid lightgray',
        }}
      >
        <div className="filterSkinType">
          <Link to="d">
            <header className="themeSkinType">피부타입</header>
          </Link>
          <p>{categoryExpend && categoryExpend.menu_name}</p>
          {/* <ul className="listSkinType">{skinTypeCheck}</ul> */}
        </div>
        <div className="filterUse">
          <Link to="d">
            <header className="themeUse">제품특징</header>
          </Link>
          {/* <ul className="listUse">{themeUseCheck}</ul> */}
        </div>
        <div className="filterSmell">
          <Link to="">
            <header className="themeSmell">성분</header>
          </Link>
          {/* <ul className="listSmell">{themeSmellCheck}</ul> */}
        </div>
      </div>
    );
  }
}

export default FilterBarExtend;
