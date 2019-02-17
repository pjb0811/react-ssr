import React from 'react';
import withLayout from './withLayout';
import Counter from './Counter';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta name="description" content="about" />
      </Helmet>
      <h1>About</h1>
      <Counter />
    </div>
  );
};

export default withLayout(About);
