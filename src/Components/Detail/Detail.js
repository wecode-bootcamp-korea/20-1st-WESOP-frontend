import React from 'react';
import './Detail.scss';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [{}],
      // temp: [],
    };
  }
  // getTestInfo = () => {
  //   fetch('/data/detailproduct.json', {
  //     method: 'GET',
  //   })
  //     .then(data => data.json())
  //     .then(data => {
  //       this.setState({
  //         temp: data['result'],
  //       });
  //     });
  // };

  getInfo = () => {
    fetch('/data/mockdata.json', {
      method: 'GET',
    })
      .then(products => products.json())
      .then(products => {
        this.setState({
          product: products.filter(product => product.id === 0),
        });
      });
  };

  componentDidMount() {
    this.getInfo();
    // this.getTestInfo();
  }

  render() {
    const { product, temp } = this.state;
    // console.log(temp[0].feature[0].feature_category_name);
    // product && console.log(product[0].id);
    return (
      <div className="detail">
        <div className="detailProduct">
          <div className="detailImg">
            <img
              alt="제품사진"
              src="https://www.aesop.com/medias/Aesop-Kits-Nurturer-GL-Web-Large-1584x962px.png?context=bWFzdGVyfGltYWdlc3w0NTkzNTl8aW1hZ2UvcG5nfGltYWdlcy9oZjAvaGM1Lzk5MjYzNDQ1NDAxOTAucG5nfDU0ZjhmNTM5OTU5MjIzNmI1OTI4ZTEwNmE1MmRlNWQ2ZGY3YTI0Y2NmOTFiYTI4N2QwMjY3OWVjMzUxNzFmNGM"
            />
            <ul className="size">
              <li>
                <input type="radio" name="size" value="20ml" checked />
                <label for="20ml"></label>
              </li>
              <li>
                <input type="radio" name="size" value="50ml"></input>
                <label for="50ml">50ml</label>
              </li>
              <li>
                <input type="radio" name="size" value="100ml"></input>
                <label for="100ml">100ml</label>
              </li>
            </ul>
          </div>
          <div className="detailBox">
            <ul className="category">
              <li>키트 & 여행제품</li>
              <li>&nbsp;&nbsp;&#183;&nbsp;&nbsp;</li>
              <li>바디 & 핸드</li>
            </ul>
            <div className="detailNameExplain">
              <h1 className="detailName">{product[0].productName}</h1>
              <p className="detailExplain">{product[0].desc}</p>
            </div>
            <ul className="detailInfo">
              <li>
                <p>카트 구성</p>
                <p>손을 부드럽게 향기로운 트리오</p>
              </li>
              <li>
                <p>상세 정보</p>
                <p>레저렉션</p>
              </li>
              <li>
                <p>주요 성분</p>
                <p>만다린, 로즈마리 리프</p>
              </li>
            </ul>
            <button className="addCart">
              카트에 추가 - ₩{Number(product[0].price).toLocaleString()}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
