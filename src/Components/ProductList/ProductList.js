import React from 'react';
import { withRouter } from 'react-router-dom';
import './ProductList.scss';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      slideRight: 0,
      barLeft: 0,
    };
  }

  componentDidMount() {
    fetch('/data/category_id=1.json')
      .then(productData => productData.json())
      .then(productData => {
        this.setState({
          products: productData['result'],
        });
      });
  }

  clickPrev = () => {
    const { slideRight, barLeft } = this.state;
    barLeft > 0 &&
      this.setState({
        barLeft: barLeft - 16.4,
        slideRight: slideRight - 20,
      });
  };

  clickNext = () => {
    const { slideRight, barLeft } = this.state;
    barLeft < 80 &&
      this.setState({
        barLeft: barLeft + 16.4,
        slideRight: slideRight + 20,
      });
  };

  goToDetail = productId => {
    this.props.history.push(`/productdetail/${productId}`);
  };

  render() {
    const { products, slideRight, barLeft } = this.state;
    const { clickPrev, clickNext, slider, goToDetail } = this;

    return products.product_selections ? (
      <div className="productList">
        <div style={{ right: `${slideRight}%` }} ref={slider}>
          {products.map((product, index) => (
            <div
              className="product"
              key={index}
              onClick={() => {
                goToDetail(product[0].product_id);
              }}
            >
              <img
                alt="individualProduct"
                src={product[0].product_selections[0].image_url}
              />
              <p>{product[0].product_name}</p>
              <p>{product[0].product_ingredients.join(', ')}</p>
            </div>
          ))}
        </div>
        <button
          className="prev"
          onClick={clickPrev}
          style={{ left: barLeft <= 0 && -90 }}
        >
          <i className="fas fa-chevron-left" />
        </button>
        <button
          className="next"
          onClick={clickNext}
          style={{ right: barLeft > 80 && -90 }}
        >
          <i className="fas fa-chevron-right" />
        </button>
        <div className="staticBar">
          <div className="movingBar" style={{ left: `${barLeft}%` }}></div>
        </div>
      </div>
    ) : null;
  }
}

export default withRouter(ProductList);
