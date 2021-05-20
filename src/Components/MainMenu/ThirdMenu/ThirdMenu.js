import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MenuColumn from '../../MenuColumn/MenuColumn';
import './ThirdMenu.scss';

class ThirdMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { products, thirdRequest, animation, close } = this.props;

    return (
      <MenuColumn
        zIndex={0}
        left={!(thirdRequest && products) && '-67vw'}
        animation={animation}
      >
        {thirdRequest && products && (
          <div className="thirdMenu">
            <div className="category">
              <Link to="/products">
                <li className="categoryList">{thirdRequest} 모두 보기</li>
              </Link>
              <ul className="products">
                {products.map((product, index) => (
                  <li
                    key={index}
                    style={{
                      animationDelay: `${index * 0.1 + 0.5}s`,
                    }}
                    onClick={() => {
                      close();
                      this.props.history.push(
                        `productdetail/${product[0].product_id}`
                      );
                    }}
                  >
                    <div className="individualProduct">
                      <img
                        alt="product thumbnail"
                        src={product[0].product_selections[0].image_url}
                      />
                      <div className="productInfo">
                        <p>{product[0].product_name}</p>
                        {product[0].product_selections.length > 1 ? (
                          <p>
                            {`${product[0].product_selections.length} 사이즈 `}
                            <span>/</span>{' '}
                            {` ₩ ${Number(
                              product[0].product_selections[0].price
                            ).toLocaleString()} 원부터`}
                          </p>
                        ) : (
                          <p>
                            {`${parseInt(
                              product[0].product_selections[0].size
                            )} mL `}
                            <span>/</span>{' '}
                            {` ₩ ${Number(
                              product[0].product_selections[0].price
                            ).toLocaleString()}`}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </MenuColumn>
    );
  }
}

export default withRouter(ThirdMenu);
