import React from 'react';
import './Cart.scss';
import { USER_BASE_URL } from '../../../src/config';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    //animation: 아래로 내려오는 애니메이션을 담은 클래스명 (Cart.scss에서 확인할 수 있습니다!)
    this.state = { animation: 'openAnimation', cartData: '' };
  }

  componentDidMount() {
    //cart 열릴 때 화면이 최상단으로 올라가도록 => (0, 0)은 각각 x좌표, y좌표
    window.scrollTo(0, 0);

    //openAnimation에 담긴 애니메이션이 끝나면 애니메이션 삭제 (umount될 때 또 다른 애니메이션을 주기 위해서)
    setTimeout(() => {
      this.setState({ animation: '' });
    }, 500);

    //cart 열 때마다 데이터 불러오기
    this.renewCartData();

    //cart 모달 창 열리면 스크롤 비활성화
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    //cart 닫을 때 다시 스크롤 활성화 (안 해 주면 계속 스크롤이 안 됩니당)
    document.body.style.overflow = 'unset';
  }

  //cart 닫는 method (사라지는 animation 먼저 주고, 애니메이션 끝나면 진짜 unmount되도록)
  close = () => {
    this.setState({
      animation: 'closeAnimation',
    });
    //cartToggle은 부모에서 받아온 method로서 부모에서 관리하는 Cart 컴포넌트 조건부 렌더링을 위한 true/false 상태값을 바꿔 줍니다
    setTimeout(this.props.cartToggle, 500);
  };

  deleteCartData = product => {
    //delete 전송한 후 성공하면 renewCart로 카트 데이터 다시 받기 (안 해 주면 카트 껐다 켜야만 화면에 반영 됨)
    fetch(`${USER_BASE_URL}/orders/cart/${product.cart_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem('accessToken')),
      },
    }).then(this.renewCartData);
  };

  modifyCartData = (product, i) => {
    //마찬가지로 patch 후 데이터 다시 받기
    fetch(`${USER_BASE_URL}/orders/cart`, {
      method: 'PATCH',
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem('accessToken')),
      },
      body: JSON.stringify({
        product_id: Number(product.product_id),
        size: product.size,
        quantity: i,
      }),
    }).then(this.renewCartData);
  };

  renewCartData = () => {
    fetch(`${USER_BASE_URL}/orders/cart`, {
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem('accessToken')),
      },
    })
      .then(res => res.json())
      .then(cartData => {
        this.setState({ cartData: cartData.result });
      });
  };

  order = () => {
    fetch(`${USER_BASE_URL}/orders/order`, {
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem('accessToken')),
      },
    })
      .then(this.renewCartData)
      .then(alert('주문이 완료되었습니다!'));
  };

  render() {
    const { cartData } = this.state;

    return (
      <div className={`cart ${this.state.animation}`}>
        <div className="cartList">
          <i class="fas fa-times" onClick={this.close} />
          {/* cart에 담은 데이터에 따라 조건부 렌더링
          데이터가 없어도 빈 배열[]이 들어와서 .lengt를 붙여 줘야 함 */}
          {cartData.length ? (
            <table>
              <tr>
                <th>카트</th>
                <th>사이즈</th>
                <th>수량</th>
                <th>가격</th>
              </tr>
              {cartData.map(product => (
                <tr key={product.product_id}>
                  <td>{product.name}</td>
                  <td>{product.size}</td>
                  <td>{`₩ ${Number(product.price).toLocaleString()}`}</td>
                  <td>
                    {/* //수량 조절하는 form 태그 (뭔지 모르시면 html select, option 검색해 보세요!) */}
                    <select
                      name="amount"
                      //수량 선택하면 modifyCartData 함수에 상품&개수 인자로 담아서 호출하도록 (selectedIndex+1)을 한 이유는 option value는 1,2,3부터 시작하는데 selectedIndex는 0,1,2부터 시작해서...! 근데 selected option의 value를 추출할 다른 방법이 있을 것 같아요
                      onChange={e => {
                        this.modifyCartData(
                          product,
                          e.target.options.selectedIndex + 1
                        );
                      }}
                    >
                      {/* 필요한 option 개수만큼 만들기 위해서 map
                      product.quantity는 서버에서 전송해 준 수량 (내가 카트에 담은 수량)
                      option에 selected 속성을 주면 그 option이 default로 선택된 채 보여집니다 */}
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i =>
                        i === product.quantity ? (
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
          ) : (
            <p className="empty">카트에 담긴 상품이 없습니다.</p>
          )}
        </div>
        <div className="cartSum">
          <div>
            <p>전 제품 무료 배송 혜택을 즐겨보세요.</p>
            <div className="priceSum">
              <span>소계(세금 포함)</span>
              <span className="price">
                {/* 카트에 담긴 상품 총 가격 계산하는 로직 (reduce 메서드 찾아 보세요!) */}
                {`₩ ${
                  cartData
                    ? cartData
                        .reduce((acc, cur) => {
                          return acc + Number(cur.price) * cur.quantity;
                        }, 0)
                        .toLocaleString()
                    : 0
                }`}
              </span>
              <button onClick={this.order}>결제하기</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
