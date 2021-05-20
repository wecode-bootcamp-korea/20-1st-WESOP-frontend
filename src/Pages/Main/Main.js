import React from 'react';
import Login from '../../Components/Login/Login';
import Nav from '../../Components/Nav/Nav';
import MainIllust from '../../Components/MainIllust/MainIllust';
import MainProduct from '../../Components/MainProduct/MainProduct';
import ProductList from '../../Components/ProductList/ProductList';
import Footer from '../../Components/Footer/Footer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Login />
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
