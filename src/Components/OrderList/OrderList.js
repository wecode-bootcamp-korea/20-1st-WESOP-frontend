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

    fetch('http://10.58.2.119:8000/orders/log', {
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem('accessToken')),
      },
    })
      .then(res => res.json())
      .then(orderData => {
        this.setState({ orderData: orderData.result, animation: '' });
      });

    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }

  close = () => {
    this.setState({
      animation: 'offLoginPage',
    });
    setTimeout(this.props.navToggle, 600);
  };

  render() {
    const { orderData } = this.state;

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
              {orderData ? (
                <table>
                  <tr>
                    <th>주문일자</th>
                    <th>상품명</th>
                    <th>사이즈</th>
                    <th>수량</th>
                    <th>가격</th>
                  </tr>
                  {orderData.map(product => (
                    <tr>
                      <td>{product.date.split('T')[0]}</td>
                      <td>{product.name}</td>
                      <td>{product.size}</td>
                      <td>{product.quantity}</td>
                      <td>{`₩ ${Number(product.price).toLocaleString()}`}</td>
                    </tr>
                  ))}
                </table>
              ) : (
                <p>주문하신 내역이 없습니다.</p>
              )}
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
