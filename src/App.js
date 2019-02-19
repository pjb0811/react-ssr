import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './lib/routes';
import { Helmet } from 'react-helmet';
// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>My App</title>
          <meta name="description" content="my app" />
          <style>
            {`body {
              background-color: green 
            }`}
          </style>
        </Helmet>
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
