import React from 'react';
import './Cart.scss';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('/data/mockdata.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          products: res,
        });
      });
  }

  render() {
    const { products } = this.state;

    const onRemove = id => {
      this.setState(products.filter(product => product.id !== id));
    };

    return (
      <div className="Cart">
        <section className="CartBox">
          <div className="CartWrapper">
            <div className="CartInner">
              <div className="CartProducts">
                <div className="CartProductsHeader">
                  <div className="CartProductsHeaderTitle">카트</div>
                  <div className="CartProductsHeaderSize">사이즈</div>
                  <div className="CartProductsHeaderQuntity">수량</div>
                  <button className="closeButton">
                    <img
                      className="closeButtonImg"
                      src="../../imges/closeBtn.png"
                      alt="닫기버튼"
                    />
                  </button>
                </div>
                <ul className="CartProductsList">
                  {products.map(product => (
                    <li className="CartProductsListItem" key={product.id}>
                      <div className="CartProduct">
                        <div className="CartProductNameWrapper">
                          <span className="CartRropductName">
                            {product.productName}
                          </span>
                          <div className="CartRropductSize">
                            <span>{product.size}</span>
                          </div>
                        </div>
                        <div className="CartProductQuantity">
                          <select className="QuantityBtn">
                            <option value="1" selected>
                              1
                            </option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                        <div className="CartProductRemove">
                          <button
                            className="CartProductRemoveBtn"
                            onClick={() => onRemove(product.id)}
                          >
                            삭제
                          </button>
                        </div>
                        <div className="CartProductTotal">
                          <span>₩ {product.price}</span>;
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="CartSummary">
                <div className="CartWrap">
                  <div className="offerMessage">
                    <span>전 제품 무료 배송 혜택을 즐겨보세요.</span>
                  </div>
                  <div className="itmeMessage">
                    <h5 className="itemLabel">소계 (세금 포함)</h5>
                    <div className="totalPrice">
                      <span>₩ </span>
                    </div>
                  </div>
                  <div className="offerBtn">
                    <button className="btn" type="button">
                      <span>결제하기</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Cart;
