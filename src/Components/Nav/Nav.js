import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
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
              <li>
                <Link to="#" className="NenuListText">
                  <span>제품보기</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="NenuListText">
                  <span>스토어</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="NenuListText">
                  <span>검색</span>
                </Link>
              </li>
            </ul>
            <ul className="LoginAndCart">
              <li>
                <Link to="#" className="LoginAndCartText">
                  <span>로그인</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="LoginAndCartText">
                  <span>카트</span>
                </Link>
              </li>
            </ul>
          </div>
          <Link to="#" className="navLogo">
            <img
              className="navLogoImg"
              src="../../img/wesop.png"
              alt="로고 이미지"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;
