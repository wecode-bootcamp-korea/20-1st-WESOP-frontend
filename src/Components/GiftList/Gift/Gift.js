import React from 'react';
import './Gift.scss';

class Gift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gift: [],
      img: '',
      price: '',
      btnActive: true,
      priceAndSize: true,
      allSize: false,
    };
  }

  choiceSize = () => {
    this.setState({
      // img,
    });
  };
  mouseIn = () => {
    this.setState({
      btnActive: false,
      priceAndSize: false,
      allSize: true,
    });
  };
  mouseOut = () => {
    this.setState({
      btnActive: true,
      priceAndSize: true,
      allSize: false,
    });
  };

  addCart = () => {
    this.setState({ btnAddCart: true });
  };

  componentDidMount() {
    // this.setState({
    //   gift: this.props.gift,
    // });
  }

  render() {
    const { btnActive, priceAndSize, allSize } = this.state;
    const { gift, price } = this.props;
    const size = gift && gift.product_selections;
    const sizeList =
      size &&
      size.map(size => (
        <li>
          <input
            type="radio"
            onClick={() => {
              this.choiceSize(size);
            }}
            name="size"
            value={size.size}
          />
          <label>{size.size}</label>
        </li>
      ));
    return (
      <>
        {gift && (
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
                    src={gift.product_selections[0].image_url}
                  />
                </div>
                <div className="giftInfo">
                  <p>{gift.product_name}</p>
                  <div className="giftPriceSize">
                    {priceAndSize && (
                      <p>
                        ₩{Number(price).toLocaleString()} /{' '}
                        {gift.product_selections &&
                          gift.product_selections[0].size}
                      </p>
                    )}
                  </div>
                  <div className="sizeList">{allSize && sizeList}</div>
                </div>
              </div>
              <div className="giftDetailInfo">
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
                {Number(gift.product_selections[0].price).toLocaleString()}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Gift;
