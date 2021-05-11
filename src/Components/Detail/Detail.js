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
            <img alt="제품사진" src={product.img} />
          </div>
          <div className="detailBox">
            <div className="category">
              <ul>
                <li>
                  <p>키트 & 여행제품</p>
                </li>
                <li>
                  <p>바디 & 핸드</p>
                </li>
              </ul>
            </div>
            <div className="nameExplain">
              <h1 className="name">너처러</h1>
              <p className="explain">
                인기많은 핸드밤, 상쾌한 바디클렌저, 영양제를 전하는 립살브
                재사용
              </p>
            </div>
            <div className="detailInfo">
              <ul>
                <li>
                  <div>카트 구성</div>
                  <div>손을 부드럽게 향기로운 트리오</div>
                </li>
                <li>
                  <div>상세 정보</div>
                  <div>레저렉션 아로마</div>
                </li>
              </ul>
            </div>
            <div className="addCart">카트에 추가 - ₩ 96,000</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
