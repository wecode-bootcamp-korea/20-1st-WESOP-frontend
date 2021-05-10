import React from 'react';
import './MainProduct.scss';

class MainProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], rightPx: 0, rightHr: 542 };
  }

  componentDidMount() {
    fetch('/data/mockdata.json')
      .then(productData => productData.json())
      .then(productData => {
        this.setState({ products: productData });
      });
  }
  render() {
    const { products, rightPx, rightHr } = this.state;
    return (
      <div className="MainProduct">
        <div style={{ right: rightPx }}>
          {products.map(product => (
            <div className="product">
              <img src={product.img} />
              <p>{product.productName}</p>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>
        <button
          className="prev"
          onClick={() => {
            rightPx > 0 &&
              this.setState({ rightPx: rightPx - F00, rightHr: rightHr + F01 });
          }}
          style={{ left: rightPx <= 0 && -90 }}
        >
          <i class="fas fa-chevron-left" />
        </button>
        <button
          className="next"
          onClick={() => {
            rightPx < 1200 &&
              this.setState({ rightPx: rightPx + F00, rightHr: rightHr - F01 });
          }}
          style={{ right: rightPx > 1200 && -90 }}
        >
          <i class="fas fa-chevron-right" />
        </button>
        <hr />
        <hr className="move" style={{ right: rightHr }} />
      </div>
    );
  }
}

export default MainProduct;

const F00 = 250;
const F01 = 1300 / 6;
