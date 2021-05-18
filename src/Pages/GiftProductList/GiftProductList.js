import React from 'react';
import Footer from '../../Components/Footer/Footer';
import GiftList from '../../Components/GiftList/GiftList';
import Nav from '../../Components/Nav/Nav';
import MainIllust from '../../Components/MainIllust/MainIllust';

class GiftProductList extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <MainIllust />
        <GiftList />
        <Footer />
      </>
    );
  }
}

export default GiftProductList;
