import React from 'react';
import './Gift.scss';

class Gift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gift: [],
      btnActive: true,
      btnAddCart: false,
    };
  }
  mouseIn = () => {
    this.setState({
      btnActive: false,
    });
  };

  mouseOut = () => {
    this.setState({
      btnActive: true,
    });
  };

  addCart = () => {
    this.setState({ btnAddCart: true });
  };

  componentDidMount() {
    this.setState({
      gift: this.props.gift,
    });
  }

  render() {
    const { gift, btnActive, btnAddCart } = this.state;
    return (
      <div className="gift">
        <div
          className="giftBox"
          onMouseEnter={this.mouseIn}
          onMouseLeave={this.mouseOut}
        >
          <div className="giftModel">
            <div className="giftImg">
              <img
                alt="상품사진"
                src={
                  gift.product_selections &&
                  gift.product_selections[0].imgage_url
                }
              />
            </div>
            <div className="giftNameSize">
              <p>{gift.category_name}</p>
              <p>
                ₩
                {Number(
                  gift.product_selections && gift.product_selections[0].price
                ).toLocaleString()}{' '}
                / {gift.product_selections && gift.product_selections[0].size}
              </p>
            </div>
          </div>
          <div className="giftInfo">
            <ul>
              <li>
                <p>기프트 소개</p>
                <p>{gift.description}</p>
              </li>
              <li>
                <p>구성품</p>
                <p>{gift.content}</p>
              </li>
            </ul>
          </div>
          <button
            onClick={this.addCart}
            className={btnActive ? 'addCartDisabled' : 'addCartEnabled'}
          >
            카트에 추가하기 - ₩
            {Number(
              gift.product_selections && gift.product_selections[0].price
            ).toLocaleString()}
          </button>
        </div>
      </div>
    );
  }
}

export default Gift;
