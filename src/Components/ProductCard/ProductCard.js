import React from 'react';
import './ProductCard.scss';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const { productSelections } = this.props;
    const { product_name } = this.props.product;
    const { hoverColor } = this.props;
    const { hover } = this.state;
    const { handleHover } = this;

    return (
      <div
        className="productCard"
        style={{ backgroundColor: hover && hoverColor }}
        onMouseOver={handleHover}
        onMouseOut={handleHover}
      >
        <div className="imgContainer">
          <img
            alt="product"
            src={productSelections && productSelections.image_url}
          />
        </div>
        <div className="desc">
          <h3>{product_name}</h3>
          {productSelections && productSelections.size}
          <span> / </span>
          {productSelections &&
            Number(productSelections.price).toLocaleString()}
        </div>
      </div>
    );
  }
}

export default ProductCard;
