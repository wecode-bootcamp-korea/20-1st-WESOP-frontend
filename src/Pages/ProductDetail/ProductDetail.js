import React from 'react';
import Detail from '../../Components/Detail/Detail';
import Footer from '../../Components/Footer/Footer';
import Nav from '../../Components/Nav/Nav';

class ProductDetail extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Detail />
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
