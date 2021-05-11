import React from 'react';
import './MainProduct.scss';

class MainProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      innerWidth: 0,
      clickedNumber: 0,
      slideRight: 0,
      barLeft: 100,
      barWidth: 0,
    };
  }

  setBar = () => {
    const { innerWidth } = this.state;

    this.setState({ innerWidth: window.innerWidth });

    this.setState(previousState => {
      return { barWidth: (previousState.innerWidth - 200) / 6 };
      //6은 this.state.products.length... (products의 개수!)
    });

    this.setState(previousState => {
      return {
        slideRight: (this.state.innerWidth / 6) * previousState.clickedNumber,
        barLeft: 100 + previousState.barWidth * previousState.clickedNumber,
      };
    });
  };

  componentDidMount() {
    fetch('/data/mockdata.json')
      .then(productData => productData.json())
      .then(productData => {
        this.setState({
          products: productData,
        });
      });

    this.setBar();

    window.addEventListener('resize', this.setBar);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setBar);
  }

  render() {
    const { products, slideRight, barLeft, clickedNumber, barWidth } =
      this.state;
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
            slideRight > 0 &&
              this.setState({ clickedNumber: clickedNumber - 1 }, () => {
                this.setBar();
              });
          }}
          style={{ left: slideRight <= 0 && -90 }}
        >
          <i class="fas fa-chevron-left" />
        </button>
        <button
          className="next"
          onClick={() => {
            slideRight < 1200 &&
              this.setState({ clickedNumber: clickedNumber + 1 }, () => {
                this.setBar();
                console.log(slideRight);
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
