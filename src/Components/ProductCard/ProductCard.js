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
      <>
        {productSelections && (
          <div
            className="productCard"
            style={{ backgroundColor: hover && hoverColor }}
            onMouseOver={handleHover}
            onMouseOut={handleHover}
          >
            <div className="imgContainer">
              <img alt="product" src={productSelections.image_url} />
            </div>
            <div className="desc">
              <p>{product_name}</p>
              {`${parseInt(productSelections.size)} mL`}
              <span> / </span>
              {Number(productSelections.price).toLocaleString()}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ProductCard;
