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

  category_name = '';
  description = '';
  //백엔드에서 데이터 키값을 알려 주셔서 임시로 js 파일 안에 변수를 선언해뒀습니다!

  render() {
    const { products, position } = this.state;
    const { bgColor, hoverColor } = this.props;
    const { category_name, description } = this;

    return (
      <div className="inventory" style={{ backgroundColor: bgColor }}>
        <div className="categoryDesc">
          <h2>{category_name || '스킨 케어 기프트'}</h2>
          <p>
            {description ||
              '이솝 제품군에서 스킨 케어 제품은 개인용은 물론 사려 깊은 선물용으로 많은 사랑을 받고 있습니다.'}
          </p>
          <span>
            스킨 케어 기프트 (16) <i className="fas fa-arrow-right" />
          </span>
        </div>
        <div className="slideContainer">
          <div className="productList" style={{ right: `${position}px` }}>
            {/* {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                hoverColor={hoverColor || '#f0efe1'}
              />
            ))} */}
            {this.props.children}
          </div>
          <button
            className="prev"
            style={{ left: position <= 0 && '-80px' }}
            onClick={() => {
              position > 0 && this.setState({ position: position - 340 });
            }}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            className="next"
            style={{
              right: position >= (products.length - 3) * 340 && '-80px',
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
