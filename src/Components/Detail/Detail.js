import React from 'react';
import './Detail.scss';

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
          product: products.result[0],
        });
      });
  };

  componentDidMount() {
    this.getInfo();
  }

  render() {
    const { product } = this.state;
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
                <label for="20ml">1L</label>
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
              <li>{product.category_name}</li>
              <li>&nbsp;&nbsp;&#183;&nbsp;&nbsp;</li>
              <li>{product.menu_name}</li>
            </ul>
            <div className="detailNameExplain">
              <h1 className="detailName">{product.category_name}</h1>
              <p className="detailExplain">{product.description}</p>
            </div>
            <ul className="detailInfo">
              <li>
                <p>카트 구성</p>
                <p>손을 부드럽게 향기로운 트리오</p>
              </li>
              <li>
                <p></p>
                <p>dd</p>
              </li>
              <li>
                <p>주요 성분</p>
                <p>{product.ingredient}</p>
              </li>
            </ul>
            <button className="addCart">
              카트에 추가 - ₩{Number(product.product_name).toLocaleString()}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
