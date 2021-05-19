import React from 'react';
import { Link } from 'react-router-dom';
import Detail from '../../Components/Detail/Detail';
import Footer from '../../Components/Footer/Footer';
import Nav from '../../Components/Nav/Nav';
import ProductList from '../../Components/ProductList/ProductList';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  render() {
    return (
      <div className="productDetail">
        <Nav />
        <div className="upperBar">
          <Link to="/">
            <img alt="wesop logo" src="/images/wesop.png" className="logo" />
          </Link>
        </div>
        <Detail />
        <ProductList />
        <Footer />
      </div>
    );
  }
}

export default ProductDetail;
