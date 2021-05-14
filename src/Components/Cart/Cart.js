import React from 'react';
import './Cart.scss';
//import CartProduct from './CartProduct/CartProduct';

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
                          <button className="CartProductQuantityBtn">
                            <span>1</span>
                          </button>
                        </div>
                        <div className="CartProductRemove">
                          <button className="CartProductRemoveBtn">삭제</button>
                        </div>
                        <div className="CartProductTotal">
                          <span>{product.price}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="CartSummary"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Cart;
