import React from 'react';
import './Detail.scss';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      img: '',
      price: '',
    };
  }

  componentDidMount() {
    fetch('/data/mockdata.json')
      .then(products => products.json())
      .then(products => {
        this.setState({
          product: products.result[0],
        });
      });
  }

  render() {
    const { product } = this.state;
    const feature = product && product.feature;
    const size = product && product.product_selections;
    const featureList =
      feature &&
      feature.map(feature => (
        <li>
          <p>{feature.feature_category_name}</p>
          <p>{feature.features.join(', ')}</p>
        </li>
      ));
    const sizeList =
      size &&
      size.map(size => (
        <li>
          <input type="radio" name="size" value={size.size} checked />
          <label>{size.size}</label>
        </li>
      ));

    return (
      <>
        {product && (
          <div className="detail">
            <div className="detailProduct">
              <div className="detailImg">
                <img
                  alt="제품사진"
                  src="https://www.aesop.com/medias/Aesop-Kits-Nurturer-GL-Web-Large-1584x962px.png?context=bWFzdGVyfGltYWdlc3w0NTkzNTl8aW1hZ2UvcG5nfGltYWdlcy9oZjAvaGM1Lzk5MjYzNDQ1NDAxOTAucG5nfDU0ZjhmNTM5OTU5MjIzNmI1OTI4ZTEwNmE1MmRlNWQ2ZGY3YTI0Y2NmOTFiYTI4N2QwMjY3OWVjMzUxNzFmNGM"
                />
                {product.product_selections.length > 1 && (
                  <ul className="btnSize">{sizeList}</ul>
                )}
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
                  {featureList}
                  {/* {ingredientList} */}
                </ul>
                <button className="addCart">
                  카트에 추가 - ₩
                  {Number(product.product_selections[0].price).toLocaleString()}
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Detail;
