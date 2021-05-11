import React from 'react';
import './Detail.scss';
import '../../Styles/common.scss';
import '../../Styles/reset.scss';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }
  getInfo = () => {
    fetch('/data/mockdata.json', {
      method: 'GET',
    })
      .then(products => products.json())
      .then(products => {
        this.setState({
          product: products.filter(product => product.id === 2),
        });
      });
  };
  componentDidMount() {
    this.getInfo();
  }
  render() {
    const { product } = this.state;
    console.log(product);
    return (
      <div className="Detail">
        <div className="detailProduct">
          <div className="detailImg">
            <img
              alt="제품사진"
              src="https://www.aesop.com/medias/Aesop-Kits-Nurturer-GL-Web-Large-1584x962px.png?context=bWFzdGVyfGltYWdlc3w0NTkzNTl8aW1hZ2UvcG5nfGltYWdlcy9oZjAvaGM1Lzk5MjYzNDQ1NDAxOTAucG5nfDU0ZjhmNTM5OTU5MjIzNmI1OTI4ZTEwNmE1MmRlNWQ2ZGY3YTI0Y2NmOTFiYTI4N2QwMjY3OWVjMzUxNzFmNGM"
            />
          </div>
          <div className="detailBox">
            <div className="category">
              <ul>
                <li>키트 & 여행제품</li>
                <li>&nbsp;&nbsp;&#183;&nbsp;&nbsp;</li>
                <li>바디 & 핸드</li>
              </ul>
            </div>
            <div className="detailNameExplain">
              <h1 className="detailName">너처러</h1>
              <p className="detailExplain">
                어머니를 비롯해 보살펴 주신 모든 분들에게 감사를 표현하는 기프트
                키트. 인기 많은 핸드 밤, 상쾌한 바디 클렌저, 영양을 전하는 립
                살브가 재사용이 가능한 어메니티 케이스에 담겨 선보입니다
              </p>
            </div>
            <div className="detailInfo">
              <ul>
                <li>
                  <div className="headerFirst">카트 구성</div>
                  <div className="explainFirst">
                    손을 부드럽게 향기로운 트리오
                  </div>
                </li>
                <li>
                  <div className="headerSecond">상세 정보</div>
                  <div className="explainSecond">레저렉션</div>
                </li>
              </ul>
            </div>
            <button className="addCart">카트에 추가 - ₩ 96,000</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
