import React from 'react';
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
    fetch('/data/mockdata.json')
      .then(productData => productData.json())
      .then(productData => {
        this.setState({
          products: productData,
        });
      });
  }

  clickPrev = () => {
    const { slideRight, barLeft } = this.state;
    barLeft > 0 &&
      this.setState({
        barLeft: barLeft - 16.4,
        slideRight: slideRight - 10,
      });
  };

  clickNext = () => {
    const { slideRight, barLeft } = this.state;
    barLeft < 80 &&
      this.setState({
        barLeft: barLeft + 16.4,
        slideRight: slideRight + 10,
      });
  };

  render() {
    const { products, slideRight, barLeft } = this.state;
    const { clickPrev, clickNext } = this;
    return (
      <div className="productList">
        <div style={{ right: `${slideRight}%` }}>
          {products.map(product => (
            <div className="product" key={product.id}>
              <img alt="individualProduct" src={product.img} />
              <p>{product.productName}</p>
              <p>{product.desc}</p>
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
    );
  }
}

export default ProductList;
