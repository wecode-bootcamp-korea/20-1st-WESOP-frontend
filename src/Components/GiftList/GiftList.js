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
    fetch('./data/productMockdata.json')
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
      fetch('./data/category_id=1.json')
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
    console.log(product);
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
