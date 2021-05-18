import React from 'react';
import Nav from '../../Components/Nav/Nav';
import MainIllust from '../../Components/MainIllust/MainIllust';
import MainProduct from '../../Components/MainProduct/MainProduct';
import ProductList from '../../Components/ProductList/ProductList';
import Footer from '../../Components/Footer/Footer';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <MainIllust />
        <ProductList />
        <MainProduct />
        <Footer />
      </div>
    );
  }
}

export default Main;
