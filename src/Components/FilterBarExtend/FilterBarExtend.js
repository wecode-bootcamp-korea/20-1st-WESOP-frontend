import React from 'react';
import { BrowserRouter, withRouter, Link } from 'react-router-dom';
import './FilterBarExtend.scss';

class FilterBarExtend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      skinType: [],
    };
  }
  componentDidMount() {
    const skinType = {};
    const themeUse = {};
    const themeSmell = {};

    this.state.category.forEach(category => {
      skinType[category.features] = skinType[category.features] || {
        check_features: category.features,
      };
    });
    this.state.category.forEach(category => {
      themeUse[category.features_use] = themeUse[category.features_use] || {
        check_features_use: category.features_use,
      };
    });
    this.state.category.forEach(category => {
      themeSmell[category.features_use] = themeSmell[category.features_use] || {
        check_product_ingredients: category.product_ingredients,
      };
    });
    this.setState({
      skinType: Object.values(skinType),
      themeUse: Object.values(themeUse),
      themeSmell: Object.values(themeSmell),
    });
  }

  render() {
    const { category, skinType, themeUse, themeSmell } = this.state;

    console.log(skinType);
    // let skinTypeCategory = [];

    // skinType &&
    //   skinType.map(skin => {
    //     for (let i = 0; i < Object.keys(skin).length; i++) {
    //       skinTypeCategory.push(skin[i]);
    //     }
    //   });
    // let skinList = new Set(skinTypeCategory);
    // console.log(skinList);

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
