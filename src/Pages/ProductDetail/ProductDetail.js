import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Detail from '../../Components/Detail/Detail';
import Footer from '../../Components/Footer/Footer';
import Nav from '../../Components/Nav/Nav';
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

  componentDidUpdate(pervProps) {
    if (pervProps.match.params.pid !== this.props.match.params.pid) {
      this.getData();
    }
  }

  getData = () => {
    fetch('/data/mockdata.json')
      // fetch(`/products/${this.props.match.params.pid}`)
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
        <Nav />
        <div className="upperBar">
          <Link to="/">
            <img alt="wesop logo" src="/images/wesop.png" className="logo" />
          </Link>
        </div>
        <Detail product={this.state.product && this.state.product} />
        <ProductList />
        <Footer />
      </div>
    );
  }
}

export default withRouter(ProductDetail);
