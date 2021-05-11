import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Gift from './Components/Gift/Gift';
import Detail from './Components/Detail/Detail';
import FilterBar from './Components/FilterBar/FilterBar';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Detail" component={Detail} />
          <Route exact path="/Gift" component={Gift} />
          <Route exact path="/FilterBar" component={FilterBar} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
