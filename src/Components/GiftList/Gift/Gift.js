import React from 'react';
import './Gift.scss';

class Gift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.gift[0].product_selections[0].price,
      img: this.props.gift[0].product_selections[0].image_url,
      size: this.props.gift[0].product_selections[0].size,
      giftId: this.props.gift[0].product_id,
      btnActive: true,
      priceSize: true,
      allSize: false,
    };
  }

  choiceSize = selectInfo => {
    this.setState({
      img: selectInfo.image_url,
      price: selectInfo.price,
      size: selectInfo.size,
    });
  };
  mouseIn = () => {
    this.setState({
      btnActive: false,
      priceSize: false,
      allSize: true,
    });
  };
  mouseOut = () => {
    this.setState({
      btnActive: true,
      priceSize: true,
      allSize: false,
    });
  };

  addCart = () => {
    this.setState({ btnAddCart: true });
    fetch('http://10.58.5.254:8000/order/cart', {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('token') },
      body: JSON.stringify({
        product_id: this.state.giftId,
        size: this.state.size,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'Product add in cart.') {
        }
      });
  };

  componentDidMount() {}

  render() {
    const { btnActive, priceSize, allSize, price, img, size, giftId } =
      this.state;
    const { gift } = this.props;
    const selectInfo = gift && gift.product_selections;
    const selectInfoList =
      selectInfo &&
      selectInfo.map(selectInfo => (
        <li>
          <label>
            <input
              type="radio"
              onClick={() => {
                this.choiceSize(selectInfo);
              }}
              name="size"
              value={selectInfo.size}
            />
            {selectInfo.size}
          </label>
        </li>
      ));
    return (
      <div className="gift">
        <div
          className="giftBox"
          onMouseEnter={this.mouseIn}
          onMouseLeave={this.mouseOut}
        >
          <div className="giftModel">
            <div className="giftImg">
              <img alt="상품사진" src={img} />
            </div>
            <div className="giftInfo">
              <p className="productName">{gift.product_name}</p>
              <div className="giftPriceSize">
                {priceSize && (
                  <p>
                    ₩{Number(price).toLocaleString()} / {size}
                  </p>
                )}
              </div>
              <div className="sizeList">{allSize && selectInfoList}</div>
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
            카트에 추가하기 - ₩{Number(price).toLocaleString()}
          </button>
        </div>
      </div>
    );
  }
}

export default Gift;
