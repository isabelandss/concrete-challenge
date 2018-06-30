import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Result from '../src/pages/Result';
import Home from '../src/pages/Home';

const App = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/result" component={Result}/>
    </Switch>
  </Router>

export default App;
