import React from 'react';
import './Cart.scss';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animation: 'openAnimation', cartData: 0 };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animation: '' });
    }, 500);

    this.renewCartData();
  }

  close = () => {
    this.setState({
      animation: 'closeAnimation',
    });
    setTimeout(this.props.cartToggle, 500);
  };

  deleteCartData = product => {
    fetch('http://192.168.0.24:8000/orders/cart', {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        product_id: Number(product.product_id),
        size: product.size,
      }),
    }).then(this.renewCartData());
  };

  modifyCartData = (product, i) => {
    fetch('http://192.168.0.24:8000/orders/cart', {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        product_id: Number(product.product_id),
        size: product.size,
        quantity: i,
      }),
    }).then(() => {
      this.renewCartData();
    });
  };

  renewCartData = () => {
    fetch('http://192.168.0.24:8000/orders/cart', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(cartData => {
        this.setState({ cartData: cartData.result });
      });
  };

  render() {
    const { cartData } = this.state;

    return (
      <div className={`cart ${this.state.animation}`}>
        <div className="cartList">
          {cartData && (
            <>
              <table>
                <tr>
                  <th>카트</th>
                  <th>사이즈</th>
                  <th>
                    수량
                    <i class="fas fa-times" onClick={this.close} />
                  </th>
                </tr>
                {cartData.map(product => (
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.size}</td>
                    <td>
                      <select
                        name="amount"
                        onChange={e => {
                          this.modifyCartData(
                            product,
                            e.target.options.selectedIndex + 1
                          );
                        }}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i =>
                          i == product.quantity ? (
                            <option value={i} selected>
                              {i}
                            </option>
                          ) : (
                            <option value={i}>{i}</option>
                          )
                        )}
                      </select>
                      <p
                        onClick={() => {
                          this.deleteCartData(product);
                        }}
                      >
                        삭제
                      </p>
                    </td>
                  </tr>
                ))}
              </table>
            </>
          )}
        </div>
        <div className="cartSum">
          <div>
            <p>전 제품 무료 배송 혜택을 즐겨보세요.</p>
            <div className="priceSum">
              <span>소계(세금 포함)</span>
              <span className="price">
                ₩{' '}
                {cartData &&
                  cartData
                    .reduce((acc, cur) => {
                      return acc + Number(cur.price) * cur.quantity;
                    }, 0)
                    .toLocaleString()}
              </span>
              <button>결제하기</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
