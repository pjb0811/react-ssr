import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './lib/routes';
// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* {renderRoutes(routes)} */}
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default App;
