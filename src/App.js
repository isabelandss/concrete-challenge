import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Result from '../src/pages/Result';

const App = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={Result}/>
    </Switch>
  </Router>

export default App;
