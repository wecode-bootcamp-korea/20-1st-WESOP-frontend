import React from 'react';
import SignUp from '../../Components/SignUp/SignUp';
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
        <SignUp />;
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
