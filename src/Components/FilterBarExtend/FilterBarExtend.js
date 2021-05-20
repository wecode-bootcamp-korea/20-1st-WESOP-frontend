import React from 'react';
import { BrowserRouter, withRouter, Link } from 'react-router-dom';
import './FilterBarExtend.scss';

class FilterBarExtend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      skinType: [],
      themeUse: [],
      themeSmell: [],
    };
  }
  componentDidMount() {
    const skinType = {};
    const themeUse = {};
    const themeSmell = {};
    let skinTypeCategory = [];
    let themeUseCategory = [];
    let themeSmellCategory = [];

    this.state.category.forEach(category => {
      skinType[category.features] = skinType[category.features] || {
        check_features: category.features,
      };
    });
    Object.values(skinType).forEach(ele => {
      ele.check_features.forEach(type => {
        if (!skinTypeCategory.includes(type)) {
          skinTypeCategory.push(type);
        }
      });
    });

    this.state.category.forEach(category => {
      themeUse[category.features_use] = themeUse[category.features_use] || {
        check_features_use: category.features_use,
      };
    });
    Object.values(themeUse).forEach(ele => {
      ele.check_features_use.forEach(type => {
        if (!themeUseCategory.includes(type)) {
          themeUseCategory.push(type);
        }
      });
    });

    this.state.category.forEach(category => {
      themeSmell[category.features_use] = themeSmell[category.features_use] || {
        check_product_ingredients: category.product_ingredients,
      };
    });
    Object.values(themeSmell).forEach(ele => {
      ele.check_product_ingredients.forEach(type => {
        if (!themeSmellCategory.includes(type)) {
          themeSmellCategory.push(type);
        }
      });
    });

    this.setState({
      skinType: skinTypeCategory,
      themeUse: themeUseCategory,
      themeSmell: themeSmellCategory,
    });
  }

  render() {
    const { skinType, themeUse, themeSmell } = this.state;

    const skinTypeCheck = skinType.map(categorys => (
      <label>
        <li>
          <input
            type="checkbox"
            name="skintype_id"
            value="9"
            // onChange={e => {
            //   console.log(e);
            // }}
          />
          {categorys}
        </li>
      </label>
    ));

    const themeUseCheck = themeUse.map(categorys => (
      <label>
        <li>
          <input type="checkbox" value="" />
          {categorys}
        </li>
      </label>
    ));

    const themeSmellCheck = themeSmell.map(categorys => (
      <label>
        <li>
          <input type="checkbox" value="" />
          {categorys}
        </li>
      </label>
    ));

    return (
      <div
        className="filterBarNavExpend"
        style={{
          backgroundColor: this.props.styleChange && '#fffef2',
          borderBottom: this.props.styleChange && '1px solid lightgray',
        }}
      >
        <form
          className="filterSkinType"
          action="/filter"
          method="get"
          // onChange={e => {
          //   console.log(e);
          // }}
        >
          <header className="themeSkinType">피부타입</header>
          <ul className="listSkinType">{skinTypeCheck}</ul>
        </form>
        <div className="filterUse">
          <header className="themeUse">제품특징</header>
          <ul className="listUse">{themeUseCheck}</ul>
        </div>
        <div className="filterSmell">
          <header className="themeSmell">성분</header>

          <ul className="listSmell">{themeSmellCheck}</ul>
        </div>
      </div>
    );
  }
}

export default FilterBarExtend;
