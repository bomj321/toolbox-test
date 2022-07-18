import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Template from '../components/Template';
import Files from '../containers/Files';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Template>
          <Route exact path="/" component={Files} />
        </Template>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
