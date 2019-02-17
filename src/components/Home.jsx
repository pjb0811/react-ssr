import React from 'react';
import withLayout from './withLayout';
import Counter from './Counter';

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <Counter />
    </div>
  );
};

export default withLayout(Home);
