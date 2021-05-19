import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Products from './Pages/Products/Products';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/menu_id/:id" component={Products} />
          <Route exact path="/products/category_id/:id" component={Products} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
