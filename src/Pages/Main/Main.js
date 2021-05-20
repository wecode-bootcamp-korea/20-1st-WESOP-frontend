import React from 'react';
import Nav from '../../Components/Nav/Nav';
import MainIllust from '../../Components/MainIllust/MainIllust';
import MainProduct from '../../Components/MainProduct/MainProduct';
import ProductList from '../../Components/ProductList/ProductList';
import Footer from '../../Components/Footer/Footer';
import FilterBar from '../../Components/FilterBar/FilterBar';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <MainIllust />
        <FilterBar />
        <ProductList />
        <MainProduct />
        <Footer />
      </div>
    );
  }
}

export default Main;
