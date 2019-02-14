import React from 'react';
import withLayout from './withLayout';
import Counter from './Counter';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="counter" />
      </Helmet>
      <h1>home</h1>
      <Counter />
    </div>
  );
};

export default withLayout(Home);
