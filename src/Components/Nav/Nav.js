import React from 'react';
import './Nav.scss';
import MainMenu from '../../Components/MainMenu/MainMenu';

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
      isLoggedIn: JSON.parse(window.sessionStorage.getItem('accessToken')),
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

  logOut = () => {
    window.sessionStorage.removeItem('token');
    this.setState({
      isLoggedIn: JSON.parse(window.sessionStorage.getItem('accessToken')),
    });
  };

  render() {
    const { hide, openState, isLoggedIn } = this.state;
    const { navToggle, logOut } = this;

    const NAV_DATA = ['제품보기', '읽기', '검색', '로그인', '회원가입', '카트'];

    // window.sessionStorage.setItem('token', JSON.stringify('aaaa'));

    return (
      <>
        <div
          className={`nav ${hide && 'hide'} ${
            document.documentElement.scrollTop > 10 && 'background'
          }`}
        >
          <div className="shippingBanner">
            <button className="shippingBannerButton" type="button">
              <p className="shippingBannerContent">
                전 제품 무료 표준 배송 혜택을 즐겨보세요.
              </p>
            </button>
          </div>
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
                  NAV_DATA.slice(3).map((nav, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        navToggle(nav);
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
                  </>
                )}
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
