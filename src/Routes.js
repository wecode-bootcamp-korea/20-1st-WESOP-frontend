import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GiftProductList from './Pages/GiftProductList/GiftProductList';
import Main from './Pages/Main/Main';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/giftpage" component={GiftProductList} />
          <Route exact path="/productdetail" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
