import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PRODUCTS_BASE_URL } from '../../config';
import Detail from '../../Components/Detail/Detail';
import HowToUse from '../../Components/HowToUse/HowToUse';
import ProductList from '../../Components/ProductList/ProductList';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: '' };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pid !== this.props.match.params.pid) {
      this.getData();
    }
  }

  getData = () => {
    fetch(
      PRODUCTS_BASE_URL
        ? `${PRODUCTS_BASE_URL}/products/${this.props.match.params.pid}`
        : `/data/product:${this.props.match.params.pid}`
    )
      .then(product => product.json())
      .then(product => {
        this.setState({
          product: product.result,
        });
      });
  };

  render() {
    return (
      <div className="productDetail">
        <div className="upperBar">
          <Link to="/">
            <img alt="wesop logo" src="/images/wesop.png" className="logo" />
          </Link>
        </div>
        <Detail product={this.state.product && this.state.product} />
        <HowToUse />
        <div className="space" />
        <ProductList />
      </div>
    );
  }
}

export default withRouter(ProductDetail);
