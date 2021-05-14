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
    console.log(this.state);
    return (
      <div className="gift">
        <div
          className="giftBox"
          onMouseEnter={this.mouseIn}
          onMouseLeave={this.mouseOut}
        >
          <div className="giftModel">
            <div className="giftImg">
              <img alt="상품사진" src={gift.img} />
            </div>
            <div className="giftNameSize">
              <p>{gift.productName}</p>
              <p>
                ₩ {Number(gift.price).toLocaleString()} / {gift.size}
              </p>
            </div>
          </div>
          <div className="giftInfo">
            <ul>
              <li>
                <p>기프트 소개</p>
                <p>{gift.desc}</p>
              </li>
              <li>
                <p>구성품</p>
                <p>{gift.contents}</p>
              </li>
            </ul>
          </div>
          <button
            onClick={this.addCart}
            className={btnActive ? 'addCartDisabled' : 'addCartEnabled'}
          >
            카트에 추가하기 - ₩{Number(gift.price).toLocaleString()}
          </button>
        </div>
      </div>
    );
  }
}

export default Gift;
