import React from 'react';
import Footer from '../../Components/Footer/Footer';
import GiftList from '../../Components/GiftList/GiftList';

class GiftProductList extends React.Component {
  render() {
    return (
      <>
        <GiftList />
        <Footer />
      </>
    );
  }
}

export default GiftProductList;
