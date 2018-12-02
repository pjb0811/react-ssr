import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import routes from './lib/routes';
import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>{renderRoutes(routes)}</Switch>
      </div>
    );
  }
}

export default App;
