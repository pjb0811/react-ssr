import React from 'react';
import withLayout from './withLayout';
import Counter from './Counter';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Counter />
    </div>
  );
};

export default withLayout(About);
