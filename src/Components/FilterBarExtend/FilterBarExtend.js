import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './FilterBarExtend.scss';

class FilterBarExtend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
    };
  }
  render() {
    const { category } = this.state;
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
          <ul className="listSkinType">{skinTypeCheck}</ul>
        </div>
        <div className="filterUse">
          <Link to="d">
            <header className="themeUse">제품특징</header>
          </Link>
          <ul className="listUse">{themeUseCheck}</ul>
        </div>
        <div className="filterSmell">
          <Link to="">
            <header className="themeSmell">성분</header>
          </Link>
          <ul className="listSmell">{themeSmellCheck}</ul>
        </div>
      </div>
    );
  }
}

export default FilterBarExtend;
