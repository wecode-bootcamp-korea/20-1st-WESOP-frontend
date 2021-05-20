import React from 'react';
import Footer from '../../Components/Footer/Footer';
import GiftList from '../../Components/GiftList/GiftList';
import Nav from '../../Components/Nav/Nav';
import MainIllust from '../../Components/MainIllust/MainIllust';
import FilterBar from '../../Components/FilterBar/FilterBar';

class GiftPage extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <MainIllust />
        <FilterBar />
        <GiftList />
        <Footer />
      </>
    );
  }
}

export default GiftPage;
