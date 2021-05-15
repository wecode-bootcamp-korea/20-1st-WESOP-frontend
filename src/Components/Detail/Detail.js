import React from 'react';
import './Detail.scss';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      img: '',
      price: '',
    };
  }
  choiceSize = selectInfo => {
    this.setState({
      img: selectInfo.image_url,
      price: selectInfo.price,
    });
  };

  componentDidMount() {
    fetch('/data/mockdata.json')
      .then(products => products.json())
      .then(products => {
        this.setState({
          product: products.result[0],
          img: products.result[0].product_selections[0].image_url,
          price: products.result[0].product_selections[0].price,
        });
      });
  }

  render() {
    const { product, img, price } = this.state;
    const feature = product && product.feature;
    const featureList =
      feature &&
      feature.map(feature => (
        <li>
          <p>{feature.feature_category_name}</p>
          <p>{feature.features.join(', ')}</p>
        </li>
      ));
    const selectInfo = product && product.product_selections;
    const selectInfoList =
      selectInfo &&
      selectInfo.map(selectInfo => (
        <li>
          <input
            type="radio"
            onClick={() => {
              this.choiceSize(selectInfo);
            }}
            name="slectSize"
            value={selectInfo.size}
          />
          <label>{selectInfo.size}</label>
        </li>
      ));

    return (
      <>
        {product && (
          <div className="detail">
            <div className="detailProduct">
              <div className="detailImg">
                <img alt="제품사진" src={img} />
                {product.product_selections.length > 1 && (
                  <ul className="btnSize">{selectInfoList}</ul>
                )}
              </div>
              <div className="detailBox">
                <ul className="category">
                  <li>{product.category_name}</li>
                  <li>&nbsp;&nbsp;&#183;&nbsp;&nbsp;</li>
                  <li>{product.menu_name}</li>
                </ul>
                <div className="detailNameExplain">
                  <h1 className="detailName">{product.category_name}</h1>
                  <p className="detailExplain">{product.description}</p>
                </div>
                <ul className="detailInfo">
                  {featureList}
                  {/* {ingredientList} */}
                </ul>
                <button className="addCart">
                  카트에 추가 - ₩{Number(price).toLocaleString()}
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Detail;
