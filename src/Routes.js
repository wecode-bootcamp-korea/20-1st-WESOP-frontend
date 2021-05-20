import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import FilterBar from './Components/FilterBar/FilterBar';
import Main from './Pages/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
