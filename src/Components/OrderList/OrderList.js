import React from 'react';
import './OrderList.scss';

class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: 'onLogin',
      orderData: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animation: '' });
    }, 600);

    fetch('http://192.168.0.24:8000/orders/cart', {
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem('accessToken')),
      },
    })
      .then(res => res.json())
      .then(orderData => {
        this.setState({ orderData: orderData.result });
      });

    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.getElementsByTagName('body')[0].style.overflow = '';
  }

  close = () => {
    this.setState({
      animation: 'offLoginPage',
    });
    setTimeout(this.props.navToggle, 600);
  };

  render() {
    return (
      <div className="bodyBack">
        <div className="orderList">
          <div className={'modalBody ' + this.state.animation}>
            <button
              className="modalCloseBtn"
              type="button"
              onClick={this.close}
            >
              <img alt="closeButton_image" src="./images/closeBtn.png" />
            </button>
            <div className="modalHeadingWrap">
              <h1 className="modalTitle">주문 내역</h1>
              <table>
                <tr>
                  <th>상품명</th>
                  <th>사이즈</th>
                  <th>수량</th>
                  <th>가격</th>
                </tr>
                <tr>
                  <td>product.name</td>
                  <td>product.size</td>
                  <td>product.price</td>
                  <td>product.quantity</td>
                </tr>
                {/* {cartData.map(product => (
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.size}</td>
                    <td>{`₩ ${Number(product.price).toLocaleString()}`}</td>
                    <td>
                      {product.quantity}
                    </td>
                  </tr>
                ))} */}
              </table>
              <div className="orderInfo">
                <span>주문일자: 2021.00.00</span>
                <span>주문금액: ₩ 100,000</span>
              </div>
            </div>
            <button className="btnLogin" onClick={this.close}>
              확인
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderList;
