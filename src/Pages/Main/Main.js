import React from 'react';
import MainIllust from '../../Components/MainIllust/MainIllust';
import MainProduct from '../../Components/MainProduct/MainProduct';
import ProductList from '../../Components/ProductList/ProductList';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <MainIllust />
        <ProductList />
        <MainProduct />
      </div>
    );
  }
}

export default Main;
