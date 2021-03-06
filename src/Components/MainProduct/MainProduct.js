import React from 'react';
import { Link } from 'react-router-dom';
import './MainProduct.scss';

class MainProduct extends React.Component {
  render() {
    return (
      <div className="mainProduct">
        <div>
          <p>아침과 저녁을 위한 비타민 C</p>
          <p className="mainDesc">피부 구조를 탄탄하게 지탱해주는 성분</p>
          <p className="subDesc">
            비타민 C는 피부의 탄력성을 강화하는 데 필수적입니다. 아침과 저녁에
            모두 사용하기 적합하며 시간을 두고 꾸준이 사용했을 때 뛰어난 효과를
            선사합니다.
          </p>
          <Link to="/giftpage">
            <button>
              비타민 C 알아보기
              <i className="fas fa-arrow-right" />
            </button>
          </Link>
        </div>
        <img alt="product image" src="/images/vitamin.jpg" />
      </div>
    );
  }
}

export default MainProduct;
