import React from 'react';
import MainProduct from '../../Components/MainProduct/MainProduct';
import ProductList from '../../Components/ProductList/ProductList';

class Main extends React.Component {
  render() {
    return (
      <>
        <ProductList />
        <MainProduct />
      </>
    );
  }
}

export default Main;
