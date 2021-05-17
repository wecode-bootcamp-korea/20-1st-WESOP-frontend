import React from 'react';
import { INFO } from '../MockData';
import '../HowToUse/HowToUse.scss';

class HowToUse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBox: [],
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=12', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(jsonData =>
        this.setState(
          {
            dataBox: jsonData,
          },
          () => {
            console.log(jsonData);
          }
        )
      );
  }

  render() {
    const infoMap = INFO.map((el, index) => (
      <li key={index}>
        <dt>{el.dt}</dt>
        <dd>{el.dd}</dd>
      </li>
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
