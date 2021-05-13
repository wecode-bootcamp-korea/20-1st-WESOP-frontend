import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Footer">
        <div className="gridContainer">
          <div className="box">
            <input
              type="text"
              placeholder="이메일 주소"
              className="enterEmail"
            />
            <p>
              이솝 제품, 서비스, 스토어, 행사, 문화적 관심사 등 다양한 소식을
              받아볼 수 있도록 구독하세요.
            </p>
            <label>
              <input type="checkbox" name="over14" className="over14" />
              <span></span>
              본인의 만 14세 이상 여부를 확인해주세요.
            </label>
          </div>
          <div className="box">
            <div className="title">주문 및 지원</div>
            <ul>
              <li>문의하기</li>
              <li>자주 묻는 질문</li>
              <li>배송 및 반품</li>
              <li>문의하기</li>
            </ul>
          </div>
          <div className="box">C</div>
          <div className="box">D</div>
          <div className="box">E</div>
          <div className="box">F</div>
          <div className="box">G</div>
          <div className="box">H</div>
        </div>
        <div className="banner"></div>
      </div>
    );
  }
}

export default Footer;

const FOOTER_DATA = [
  {
    '주문 및 지원': [
      '문의 하기',
      '자주 듣는 질문',
      '배송 및 반품',
      '이용 약관',
    ],
  },
  { 서비스: ['라이브', '간결함과 진정성'] },
];
