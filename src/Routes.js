import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GiftProductList from './Pages/GiftProductList/GiftProductList';
import Main from './Pages/Main/Main';
<<<<<<< HEAD
=======
import Products from './Pages/Products/Products';
>>>>>>> origin
import ProductDetail from './Pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
<<<<<<< HEAD
=======
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Products} />
          <Route exact path="/giftpage" component={GiftPage} />
          <Route exact path="/giftpage/:id" component={GiftPage} />
>>>>>>> origin
          <Route exact path="/productdetail" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
