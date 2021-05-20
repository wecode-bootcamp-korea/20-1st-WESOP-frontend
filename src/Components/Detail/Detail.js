import React from 'react';
import './Detail.scss';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      img: '',
      price: '',
      product_id: '',
      size: '',
    };
  }

  addCart = () => {
    console.log(localStorage.getItem('token'));
    fetch('http://192.168.0.24:8000/orders/cart', {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('token') },
      body: JSON.stringify({
        product_id: Number(this.state.product_id),
        size: this.state.size,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'Product add in cart.') {
        }
      });
  };

  choiceSize = selectInfo => {
    this.setState({
      img: selectInfo.image_url,
      price: selectInfo.price,
      size: selectInfo.size,
    });
  };

  componentDidMount() {
    fetch('/data/mockdata.json')
      .then(products => products.json())
      .then(products => {
        this.setState({
          product: products.result,
          img: products.result.product_selections[0].image_url,
          price: products.result.product_selections[0].price,
          product_id: products.result.product_id,
          size: products.result.product_selections[0].size,
        });
      });
  }

  render() {
    const { product, img, price } = this.state;
    const feature = product && product.product_features;
    const featureList =
      feature &&
      feature.map(feature => (
        <li key={feature.feature_category_name}>
          <p>{feature.feature_category_name}</p>
          <p>{feature.features.join(', ')}</p>
        </li>
      ));
    const selectInfo = product && product.product_selections;
    const selectInfoList =
      selectInfo &&
      selectInfo.map(selectInfo => (
        <li key={selectInfo.size}>
          <label>
            <input
              type="radio"
              onClick={() => {
                this.choiceSize(selectInfo);
              }}
              name="slectSize"
              value={selectInfo.size}
            />
            {selectInfo.size}
          </label>
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
                <ul className="detailInfo">{featureList}</ul>
                <button className="addCart" onClick={this.addCart}>
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
