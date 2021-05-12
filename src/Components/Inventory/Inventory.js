import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Inventory.scss';

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      position: 0,
    };
  }

  componentDidMount() {
    fetch('/data/mockdata.json')
      .then(productsData => productsData.json())
      .then(productsData => this.setState({ products: productsData }));
  }

  clickPrev = () => {};

  clickNext = () => {};

  render() {
    const { products, position } = this.state;
    const { clickPrev, clickNext } = this;

    return (
      <div className="inventory">
        <div className="categoryDesc">
          <h2>스킨 케어 기프트</h2>
          <p>
            이솝 제품군에서 스킨 케어 제품은 개인용은 물론 사려 깊은 선물용으로
            많은 사랑을 받고 있습니다.
          </p>
          <span>
            스킨 케어 기프트 (16) <i className="fas fa-arrow-right" />
          </span>
        </div>
        <div className="slideContainer">
          <div className="productList" style={{ right: `${position}px` }}>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <button
            className="prev"
            style={{ left: position <= 0 && '-90px' }}
            onClick={() => {
              position > 0 && this.setState({ position: position - 340 });
            }}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            className="next"
            style={{
              right: position >= (products.length - 3) * 340 && '-90px',
            }}
            onClick={() => {
              position < (products.length - 3) * 340 &&
                this.setState({ position: position + 340 });
            }}
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}

export default Inventory;
