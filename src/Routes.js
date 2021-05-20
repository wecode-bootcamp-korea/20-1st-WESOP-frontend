import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GiftPage from './Pages/GiftPage/GiftPage';
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
          <Route exact path="/products/:mid" component={Products} />
          <Route exact path="/giftpage" component={GiftPage} />
          <Route exact path="/products/:id" component={Products} />
          <Route exact path="/giftpage" component={GiftPage} />
          <Route exact path="/giftpage/:id" component={GiftPage} />
          <Route exact path="/productdetail" component={ProductDetail} />
          <Route exact path="/productdetail/:pid" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
