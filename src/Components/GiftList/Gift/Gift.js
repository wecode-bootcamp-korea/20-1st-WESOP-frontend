import React from 'react';
import './Gift.scss';

class Gift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gift: [],
    };
  }

  componentDidMount() {
    this.setState({
      gift: this.props,
    });
  }

  render() {
    const { gift } = this.state;
    return (
      <div className="Gift">
        <div className="giftBox">
          <div className="giftModel">
            <div className="giftImg">
              <img alt="상품사진" src={gift.img}></img>
            </div>
            <div className="giftNameSize">
              <p>{gift.productName}</p>
              <p>
                ₩ {gift.price} / {gift.size}
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
          <button className="addCart">카트에 추가하기 - ₩ ${gift.price}</button>
        </div>
      </div>
    );
  }
}

export default Gift;
