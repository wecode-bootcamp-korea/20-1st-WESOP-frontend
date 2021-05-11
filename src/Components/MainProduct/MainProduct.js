import React from 'react';
import './MainProduct.scss';

class MainProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], slideRight: 0, barLeft: 100, innerWidth: 0 };
    this.barWidth = 0;
  }

  setBar = () => {
    this.setState({ innerWidth: window.innerWidth }, () => {
      this.barWidth = (this.state.innerWidth - 200) / 6;
    });

    this.setState({
      slideRight: F00 * clickedNumber,
      barLeft: 100 + this.barWidth * clickedNumber,
    });
  };

  componentDidMount() {
    fetch('/data/mockdata.json')
      .then(productData => productData.json())
      .then(productData => {
        this.setState({ products: productData });
      });

    this.setBar();

    window.addEventListener('resize', this.setBar);
  }

  render() {
    const { products, slideRight, barLeft } = this.state;
    const { barWidth } = this;

    return (
      <div className="MainProduct">
        <div style={{ right: slideRight }}>
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
            clickedNumber--;
            slideRight > 0 &&
              this.setState({
                slideRight: F00 * clickedNumber,
                barLeft: 100 + barWidth * clickedNumber,
              });
          }}
          style={{ left: slideRight <= 0 && -90 }}
        >
          <i class="fas fa-chevron-left" />
        </button>
        <button
          className="next"
          onClick={() => {
            clickedNumber++;
            slideRight < 1200 &&
              this.setState({
                slideRight: F00 * clickedNumber,
                barLeft: 100 + barWidth * clickedNumber,
              });
          }}
          style={{ right: slideRight > 1200 && -90 }}
        >
          <i class="fas fa-chevron-right" />
        </button>
        <hr />
        <hr className="move" style={{ width: barWidth, left: barLeft }} />
      </div>
    );
  }
}

export default MainProduct;

const F00 = 250;
let clickedNumber = 0;
