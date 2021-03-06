import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { USER_BASE_URL } from '../../../config';
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
    fetch(`${USER_BASE_URL}/orders/cart`, {
      method: 'POST',
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem('accessToken')),
      },
      body: JSON.stringify({
        product_id: Number(this.state.giftId),
        size: this.state.size,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'Product add in cart.') {
        }
      })
      .then(alert('카트에 추가되었습니다!'));
  };

  goToDetail = pid => {
    this.props.history.push(`/productdetail/${pid}`);
    window.scrollTo(0, 0);
  };

  render() {
    const { btnActive, priceSize, allSize, price, img, size } = this.state;
    const { gift } = this.props;
    const selectInfo = gift && gift[0].product_selections;
    const selectInfoList =
      selectInfo &&
      selectInfo.map(selectInfo => (
        <li>
          <label>
            <input
              className="selectSize"
              type="radio"
              onClick={e => {
                e.stopPropagation();
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
          <div
            className="giftModel"
            onClick={() => {
              this.goToDetail(gift[0].product_id);
            }}
          >
            <div className="giftImg">
              <img alt="상품사진" src={img} />
            </div>
            <div className="giftInfo">
              <p className="productName">{gift[0].product_name}</p>
              <div className="giftPriceSize">
                {gift[0].product_selections.length > 1
                  ? priceSize && (
                      <p className="priceSize">
                        ₩{Number(price.toLocaleString())}원부터 /{' '}
                        {gift[0].product_selections.length} 사이즈
                      </p>
                    )
                  : priceSize && (
                      <p>
                        ₩{Number(price).toLocaleString()} / {size}
                      </p>
                    )}
                {gift[0].product_selections.length === 1
                  ? !priceSize && (
                      <p>
                        ₩{Number(price).toLocaleString()} / {size}
                      </p>
                    )
                  : null}
              </div>
              <div className="sizeList">
                {gift[0].product_selections.length > 1
                  ? allSize && selectInfoList
                  : null}
              </div>
            </div>
          </div>
          <div
            className="giftDetailInfo"
            onClick={() => {
              this.goToDetail(gift[0].product_id);
            }}
          >
            <ul>
              <li>
                <p>기프트 소개</p>
                <p>{gift[0].category_description}</p>
              </li>
              <li>
                <p>구성품</p>
                <p>{gift[0].product_content}</p>
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

export default withRouter(Gift);
