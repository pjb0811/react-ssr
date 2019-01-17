// import 'isomorphic-fetch';
import axios from 'axios';

export default async path => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com${path}`);
  return res.data;
};
