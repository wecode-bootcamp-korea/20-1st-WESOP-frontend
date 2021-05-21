import React from 'react';
import LogIn from '../../Components/Login/Login';
import SignUp from '../../Components/SignUp/SignUp';
import MainMenu from '../../Components/MainMenu/MainMenu';
import Cart from '../Cart/Cart';
import OrderList from '../OrderList/OrderList';
import NeedLogin from '../NeedLogin/NeedLogin';
import './Nav.scss';

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
        주문내역: false,
        비회원: false,
      },
      isLoggedIn: JSON.parse(window.sessionStorage.getItem('accessToken')),
    };
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel);
  }

  componentDidUpdate() {
    if (
      this.state.isLoggedIn !==
      JSON.parse(window.sessionStorage.getItem('accessToken'))
    ) {
      this.setState({
        isLoggedIn: JSON.parse(window.sessionStorage.getItem('accessToken')),
      });
    }
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

  logOut = () => {
    window.confirm('로그아웃 하시겠습니까?') &&
      window.sessionStorage.removeItem('accessToken');
    this.setState({
      isLoggedIn: JSON.parse(window.sessionStorage.getItem('accessToken')),
    });
  };

  render() {
    const { hide, openState, isLoggedIn } = this.state;
    const { navToggle, logOut } = this;

    const NAV_DATA = [
      '제품보기',
      '읽기',
      '검색',
      '로그인',
      '회원가입',
      '카트',
      '주문내역',
    ];
    return (
      <>
        {openState.로그인 && (
          <LogIn
            loginToggle={() => {
              navToggle('로그인');
            }}
          />
        )}
        {openState.회원가입 && (
          <SignUp
            signUpToggle={() => {
              navToggle('회원가입');
            }}
          />
        )}
        {openState.주문내역 && (
          <OrderList
            navToggle={() => {
              navToggle('주문내역');
            }}
          />
        )}
        {openState.비회원 && (
          <NeedLogin
            navToggle={() => {
              navToggle('비회원');
            }}
          />
        )}
        <div
          className={`nav ${hide && 'hide'} ${
            document.documentElement.scrollTop > 10 && 'background'
          }`}
        >
          {openState.카트 ? (
            <Cart cartToggle={() => navToggle('카트')} />
          ) : (
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
                {!isLoggedIn ? (
                  NAV_DATA.slice(3, 6).map((nav, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        index >= 2 ? navToggle('비회원') : navToggle(nav);
                      }}
                    >
                      {nav}
                      <hr />
                    </li>
                  ))
                ) : (
                  <>
                    <li onClick={logOut}>
                      로그아웃
                      <hr />
                    </li>
                    <li
                      onClick={() => {
                        navToggle('카트');
                      }}
                    >
                      카트
                      <hr />
                    </li>
                    <li
                      onClick={() => {
                        navToggle('주문내역');
                      }}
                    >
                      주문내역
                      <hr />
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
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
