import React from 'react';
import './Nav.scss';
import MainMenu from '../../Components/MainMenu/MainMenu';
import Cart from '../Cart/Cart';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      openState: {
        제품보기: false,
        읽기: false,
        검색: false,
        로그인: false,
        회원가입: false,
        카트: false,
      },
    };
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
  }

  handleWheel = e => {
    this.setState({ hide: e.deltaY > 0 && true, background: true });
  };

  navToggle = nav => {
    const { openState } = this.state;
    this.setState({
      openState: { ...openState, [nav]: !openState[nav] },
    });
  };

  render() {
    const { hide, openState } = this.state;
    const { navToggle } = this;

    const NAV_DATA = ['제품보기', '읽기', '검색', '로그인', '회원가입', '카트'];

    return (
      <>
        <div
          className={`nav ${hide && 'hide'} ${
            document.documentElement.scrollTop > 10 && 'background'
          }`}
        >
          {openState.카트 && <Cart cartToggle={() => navToggle('카트')} />}
          {!openState.카트 && (
            <div className="shippingBanner">
              <button className="shippingBannerButton" type="button">
                <p className="shippingBannerContent">
                  전 제품 무료 표준 배송 혜택을 즐겨보세요.
                </p>
              </button>
            </div>
          )}
          <div className="navHeader">
            <div className="navHeaderContainer">
              <ul className="leftMenu">
                {NAV_DATA.slice(0, 3).map((nav, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      navToggle(nav);
                    }}
                  >
                    {nav}
                    <hr />
                  </li>
                ))}
              </ul>
              <ul className="rightMenu">
                {NAV_DATA.slice(3).map((nav, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      navToggle(nav);
                    }}
                  >
                    {nav}
                    <hr />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {openState.로그인 && <div></div>}
        {NAV_DATA.slice(0, 3).map(
          (nav, index) =>
            openState[nav] && (
              <MainMenu
                key={index}
                menuToggle={() => {
                  navToggle(nav);
                }}
                firstRequest={nav}
              />
            )
        )}
      </>
    );
  }
}

export default Nav;
