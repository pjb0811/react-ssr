import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RedirectRoute = () => {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.status = 302;
        }
        return <Redirect from="/post" to="/posts" />;
      }}
    />
  );
};

export default RedirectRoute;
