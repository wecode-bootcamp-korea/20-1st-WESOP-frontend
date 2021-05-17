import React from 'react';
import '../HowToUse/HowToUse.scss';

class HowToUse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const INFO = [
      {
        id: 1,
        dt: '레저렉션 아로마틱 핸드 밤, 75 mL ',
        dd: '홍보  큐티클에 각별히 신경이 필요할 때마다 깨끗한 손에 발라주세요.',
      },
      {
        id: 2,
        dt: '에이 로즈 바이 애니 아더 네임 바디 클렌저, 500 mL',
        dd: '손이나 해면에 덜어 목부터 발끝까지 젖은 피부에 마사지한 다음 깨끗하게 헹구어 냅니다.',
      },
      { id: 3, dt: '에이 로즈 바이 애니 아더 네임 바디 클렌저, 500 mL' },
      {
        id: 4,
        dt: '시더 & 시트러스 립 살브 9mL',
        dd: '튜브를 가볍게 짜내어 입술에 펴 바릅니다.',
      },
    ];

    const infoMap = INFO.map(el => (
      <>
        <dt key={el.id}>{el.dt}</dt>
        <dd>{el.dd}</dd>
      </>
    ));
    return (
      <div className="howToUse">
        <section className="aboutProduct">
          <div className="leftProductImage">
            <figure>
              <img alt="leftProductImage" src="/images/leftProduct.png" />
            </figure>
          </div>
          <div className="rightPart">
            <div className="rightProduct">
              <header>
                <span>사용법</span>
                <h1>제품을 사용할 때마다 감사의 마음이 전해집니다.</h1>
              </header>
              <div className="productInfo">
                {/* <dl>
                  <dt>레저렉션 아로마틱 핸드 밤, 75 mL </dt>
                  <dd>
                    큐티클에 각별히 신경이 필요할 때마다 깨끗한 손에 발라주세요.
                  </dd>
                </dl> */}
                <dl>{infoMap}</dl>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HowToUse;
