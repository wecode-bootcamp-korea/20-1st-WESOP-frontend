import React from 'react';
import '../HowToUse/HowToUse.scss';

class HowToUse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="howToUse">
        <section className="aboutProduct">
          <div className="leftProductImage">
            <figure>
              <img alt="leftProductImage" src="/images/leftProduct.png" />
            </figure>
          </div>
          <div className="rightPart">
            <div className="rightProductInfo">
              <header>
                <span>사용법</span>
                <h1>제품을 사용할 때마다 감사의 마음을 전합니다.</h1>
              </header>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HowToUse;
