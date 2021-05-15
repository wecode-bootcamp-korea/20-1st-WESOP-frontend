import React from 'react';
import MenuColumn from '../MenuColumn/MenuColumn';
import './MainMenu.scss';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wheel: 0,
      firstRequest: '제품보기',
      secondRequest: '',
      thirdRequest: '',
      menus: [],
      categories: [],
      products: '',
      close: false,
      closeAnimation: '',
    };
  }

  componentDidMount() {
    fetch('/data/menuMockdata.json')
      .then(res => res.json())
      .then(res => {
        const menus = res['result']
          .filter(obj => !obj['category_name'])
          .map(obj => obj['menu_name']);
        this.setState({ menus: menus });

        const categories = {};
        res['result']
          .filter(obj => obj['category_name'])
          .forEach(obj => {
            categories[obj['menu_name']]
              ? categories[obj['menu_name']].push(obj['category_name'])
              : (categories[obj['menu_name']] = [obj['category_name']]);
          });
        this.setState({ categories: categories });
      });
    window.addEventListener('wheel', this.handleWheel);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
  }

  handleWheel = e => {
    this.setState({ wheel: this.state.wheel + e.deltaY * 0.001 });
  };

  handleFirstRequest = upperMenu => {
    this.setState(
      {
        firstRequest: '',
        secondRequest: '',
        thirdRequest: '',
      },
      () => {
        this.setState({ firstRequest: upperMenu });
      }
    );
  };

  handleSecondRequest = menu => {
    this.setState(
      {
        secondRequest: [],
        thirdRequest: '',
      },
      () => {
        this.setState({
          secondRequest: menu,
        });
      }
    );
  };

  handleThirdRequest = category => {
    this.setState(
      {
        thirdRequest: [],
      },
      () => {
        this.setState({ thirdRequest: category });
      }
    );

    fetch('./data/productMockdata.json')
      .then(res => res.json())
      .then(products => this.setState({ products: products.result }));
    //나중에 이부분 동적으로 수정해줘야 세 번째 칸 데이터를 제대로 받을 수 있음
  };

  render() {
    const { menuToggle } = this.props;

    const {
      wheel,
      firstRequest,
      secondRequest,
      thirdRequest,
      menus,
      categories,
      products,
      close,
      closeAnimation,
    } = this.state;

    const { handleFirstRequest, handleSecondRequest, handleThirdRequest } =
      this;

    let upperMenus = {
      제품보기: menus,
      읽기: ['더 아테네움', '회사 소개', '철학', 'Taxonomy of Design'],
      검색: ['인기검색어', '클렌저', '페뷸러스', '향수'],
    };

    return (
      <div className="mainMenu">
        <MenuColumn zIndex={2} closeAnimation={closeAnimation}>
          <div className="firstMenu">
            <div className="menuNav">
              <ul>
                {Object.keys(upperMenus).map((upperMenu, index) => (
                  <li
                    key={index}
                    onMouseOver={() => {
                      handleFirstRequest(upperMenu);
                    }}
                  >
                    {upperMenu}
                    <hr
                      style={{ width: firstRequest === upperMenu && `100%` }}
                    />
                  </li>
                ))}
              </ul>
              <i
                className="fas fa-times"
                onClick={() => {
                  this.setState({
                    secondRequest: '',
                    thirdRequest: '',
                    closeAnimation: 'allClose',
                  });
                  setTimeout(menuToggle, 1000);
                }}
              />
            </div>
            <img
              alt="wesop logo"
              src="images/wesop.png"
              className="logo"
              style={{ transform: `rotate(${wheel}turn)` }}
            />
            <div className="category">
              {firstRequest === '검색' && (
                <>
                  <i class="fas fa-arrow-right" />
                  <input />
                </>
              )}
              <ul>
                {(upperMenus[firstRequest] || []).map((menu, index) => (
                  <li
                    className="categoryList"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      borderColor: menu === secondRequest && '#333',
                    }}
                    onMouseOver={() => {
                      handleSecondRequest(menu);
                    }}
                  >
                    {menu}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MenuColumn>

        <MenuColumn
          zIndex={1}
          left={!secondRequest && '-33.3%'}
          closeAnimation={closeAnimation}
        >
          {secondRequest && (
            <div className="secondMenu">
              <ul className="category">
                {(categories[secondRequest] || []).map((category, index) => (
                  <li
                    className="categoryList"
                    key={index}
                    style={{
                      animationDelay: `${index * 0.1 + 0.2}s`,
                      borderColor: category === thirdRequest && '#333',
                    }}
                    onMouseOver={() => {
                      handleThirdRequest(category);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </MenuColumn>
        <MenuColumn
          zIndex={0}
          left={!thirdRequest && '-66.6%'}
          closeAnimation={closeAnimation}
        >
          {thirdRequest && products && (
            <div className="thirdMenu">
              <div className="category">
                <li className="categoryList">{thirdRequest} 모두 보기</li>

                <ul className="products">
                  {products.map((product, index) => (
                    <li
                      key={index}
                      style={{
                        animationDelay: `${index * 0.1 + 0.2}s`,
                      }}
                    >
                      <div className="individualProduct">
                        <img
                          alt="product thumbnail"
                          src={product.product_selections[0].image_url}
                        />
                        <div class="productInfo">
                          <p>{product.product_name}</p>
                          {product.product_selections.length > 1 ? (
                            <p>
                              {`${product.product_selections.length} 사이즈 `}
                              <span>/</span>{' '}
                              {` ₩ ${Number(
                                product.product_selections[0].price
                              ).toLocaleString()} 원부터`}
                            </p>
                          ) : (
                            <p>
                              {`${parseInt(
                                product.product_selections[0].size
                              )} mL `}
                              <span>/</span>{' '}
                              {` ₩ ${Number(
                                product.product_selections[0].price
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
      </div>
    );
  }
}

export default MainMenu;
