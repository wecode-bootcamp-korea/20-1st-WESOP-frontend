import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GiftPage from './Pages/GiftPage/GiftPage';
import Main from './Pages/Main/Main';
import Products from './Pages/Products/Products';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Search from './Pages/Search/Search';
import Filter from './Pages/Filter/Filter';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:mid" component={Products} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/filter" component={Filter} />
          <Route exact path="/giftpage" component={GiftPage} />
          <Route exact path="/giftpage/:cid" component={GiftPage} />
          <Route exact path="/productdetail" component={ProductDetail} />
          <Route exact path="/productdetail/:pid" component={ProductDetail} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
