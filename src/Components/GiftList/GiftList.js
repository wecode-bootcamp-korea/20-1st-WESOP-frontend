import React from 'react';
import { withRouter } from 'react-router-dom';
import Gift from './Gift/Gift';
import './GiftList.scss';

class GiftList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    // fetch('./data/productMockdata.json')
    fetch(`http://10.58.5.74:8000/products?category_id=1`)
      .then(products => products.json())
      .then(products =>
        this.setState({
          product: products.result,
        })
      );
  }

  componentDidUpdate(pervProps) {
    if (pervProps.match.params.mid !== this.props.match.params.mid) {
      this.setState({ product: '' });
      // fetch('./data/category_id=1.json')
      fetch(`http://10.58.5.74:8000/products?category_id=1`)
        .then(products => products.json())
        .then(products =>
          this.setState({
            product: products.result,
          })
        );
    }
  }

  render() {
    const { product } = this.state;
    return (
      <div className="giftList">
        {product &&
          product.map(gift => {
            return <Gift key={gift[0].product_id} gift={gift} />;
          })}
      </div>
    );
  }
}

export default withRouter(GiftList);
