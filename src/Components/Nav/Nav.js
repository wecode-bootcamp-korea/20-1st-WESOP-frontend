import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <>
        <div className="shippingBanner">
          <button className="shippingBannerButton" type="button">
            <p className="shippingBannerContent">
              전 제품 무료 표준 배송 혜택을 즐겨보세요.
            </p>
          </button>
        </div>
        <div className="navHeader">
          <div className="navHeaderContainer">
            <ul className="navHeaderNenu">
              <li className="navHeaderNenuList">
                <a className="navHeaderNenuListText" href="#">
                  <span>제품보기</span>
                </a>
              </li>
              <li className="navHeaderNenuList">
                <a className="navHeaderNenuListText" href="#">
                  <span>스토어</span>
                </a>
              </li>
              <li className="navHeaderNenuList">
                <a className="navHeaderNenuListText" href="#">
                  <span>검색</span>
                </a>
              </li>
            </ul>
            <ul className="navHeaderLoginAndCart">
              <li className="login">
                <a className="navHeaderLoginAndCartText" href="#">
                  <span>로그인</span>
                </a>
              </li>
              <li className="cart">
                <a className="navHeaderLoginAndCartText" href="#">
                  <span>카트</span>
                </a>
              </li>
            </ul>
          </div>
          <a className="navLogo" href="#">
            <img
              className="navLogoImg"
              src="../../img/wesop.png"
              alt="로고 이미지"
            />
          </a>
        </div>
      </>
    );
  }
}

export default Nav;
