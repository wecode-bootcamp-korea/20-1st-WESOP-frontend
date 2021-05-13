import React from 'react';
import Gift from './Gift/Gift';
import './GiftList.scss';

class GiftList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }
  // http://10.58.1.64:8000/products/detailproduct
  getInfo = () => {
    fetch('./data/mockdata.json', {
      method: 'GET',
    })
      .then(products => products.json())
      .then(products =>
        this.setState({
          product: products,
        })
      );
  };
  componentDidMount() {
    this.getInfo();
  }

  render() {
    const { product } = this.state;
    return (
      <div className="giftList">
        {product.map(gift => {
          return (
            <Gift
              key={gift.id}
              id={gift.id}
              productName={gift.productName}
              img={gift.img}
              price={gift.price}
              size={gift.size}
              desc={gift.desc}
              contents={gift.contents}
            />
          );
        })}
      </div>
    );
  }
}

export default GiftList;
