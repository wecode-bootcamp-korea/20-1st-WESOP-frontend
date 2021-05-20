import React from 'react';
import { withRouter } from 'react-router-dom';
import './ProductCard.scss';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  goToDetail = productId => {
    this.props.history.push(`/productdetail/${productId}`);
    window.scrollTo(0, 0);
  };

  render() {
    const { productSelections, hoverColor } = this.props;
    const { hover } = this.state;
    const { handleHover, goToDetail } = this;
    const { product } = this.props;

    return (
      <>
        {productSelections && (
          <div
            className="productCard"
            style={{ backgroundColor: hover && hoverColor }}
            onMouseOver={handleHover}
            onMouseOut={handleHover}
            onClick={() => {
              goToDetail(product.product_id);
            }}
          >
            <div className="imgContainer">
              <img alt="product" src={productSelections.image_url} />
            </div>
            <div className="desc">
              <p>{product.product_name}</p>
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

export default withRouter(ProductCard);
