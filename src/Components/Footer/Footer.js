import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="gridContainer">
          <div className="box">
            <div className="inputBox">
              <input
                type="text"
                placeholder="이메일 주소"
                className="enterEmail"
              />
              <i className="fas fa-arrow-right" />
            </div>
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

          {FOOTER_DATA.map((data, index) => (
            <div key={data + index} className="box">
              <div className="title">{Object.keys(data)}</div>
              <ul>
                {Object.values(data)[0].map((info, index) => (
                  <li key={info + index}>{info}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="banner">
          <p>© Wesop</p>
        </div>
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
  { '위치 기본 설정': ['배송: 대한민국', '언어: Korean'] },
  {
    지속가능성: [
      '이솝은 비콥 인증을 획득한 브랜드이며, 이솝의 전 제품은 비건 프렌들리 제품입니다.',
    ],
  },
  {
    소개: [
      '브랜드 스토리',
      'Foundation',
      '채용',
      '이솝 온라인 개인정보 취급 방침',
    ],
  },
  { 소셜: ['Instagram', 'Twitter', 'LinkedIn', 'Kakao Plus Friend'] },
  {
    주의: [
      '상호: 위솝코리아 유한회사 | 주소: 서울특별시 강남구 테헤란로 선릉 위워크 2호점 3F | 대표자: TEAM WESOP | 대표전화: 1800-0000 | 공식 온라인몰 주문 문의 070-1234-5678 | 대표 이메일: wesop@wesop.com | 호스팅 사업자: Wecode 20기',
    ],
  },
];
