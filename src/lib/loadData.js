import 'isomorphic-fetch';

export default async path => {
  const res = await fetch(`https://jsonplaceholder.typicode.com${path}`);

  return res.json();
};
