import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FilterBar from './Components/FilterBar/FilterBar';
import GiftProductList from './Pages/GiftProductList/GiftProductList';
import Main from './Pages/Main/Main';
import Products from './Pages/Products/Products';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Products} />
          <Route exact path="/giftpage" component={GiftProductList} />
          <Route exact path="/giftpage/:id" component={GiftProductList} />
          <Route exact path="/productdetail" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
