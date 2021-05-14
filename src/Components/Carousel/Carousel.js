import React from 'react';
import './Carousel.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { position: 0 };
  }
  render() {
    const { position } = this.state;
    const { children } = this.props;

    return (
      <div className="carousel">
        <div className="productList" style={{ right: `${position}px` }}>
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
            right: position >= (children.length - 4) * 340 && '-80px',
          }}
          onClick={() => {
            position < (children.length - 4) * 340 &&
              this.setState({ position: position + 340 });
          }}
        >
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    );
  }
}

export default Carousel;
