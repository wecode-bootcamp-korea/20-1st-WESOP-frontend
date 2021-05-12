import React from 'react';
import './ProductCard.scss';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { productName, size, price, img } = this.props.product;
    return (
      <div className="productCard">
        <div className="imgContainer">
          <img alt="product image" src={img} />
        </div>
        <div className="desc">
          <h3>{productName}</h3>
          {`${parseInt(size)} mL`}
          <span> / </span>
          {price > 1000 ? `₩ ${price / 1000},000` : `₩ ${price}`}
        </div>
      </div>
    );
  }
}

export default ProductCard;
