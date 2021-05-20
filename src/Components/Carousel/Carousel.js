import React from 'react';
import './Carousel.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { position: 0 };
  }
  render() {
    const { position } = this.state;
    const { amount, children } = this.props;

    return (
      <div className="carousel">
        <div className="list" style={{ right: `${position}px` }}>
          {children}
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
            right: position >= (amount - 3) * 340 && '-80px',
          }}
          onClick={() => {
            position < (amount - 3) * 340 &&
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
