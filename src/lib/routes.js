import React from 'react';
import loadData from './loadData';
import Loadable from 'react-loadable';

// import Home from '../components/Home'
// import About from '../components/About'
// import Posts from '../components/Posts'
// import Redirect from '../components/Redirect'
// import NotFound from '../components/NotFound'

const loading = () => {
  return <div>loading...</div>;
};

const Routes = [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('../components/Home'),
      loading,
    }),
  },
  {
    path: '/about',
    component: Loadable({
      loader: () => import('../components/About'),
      loading,
    }),
  },
  {
    path: '/posts/:id',
    component: Loadable({
      loader: () => import('../components/Posts'),
      loading,
    }),
    loadData: async path => await loadData(path),
  },
  {
    path: '/posts',
    component: Loadable({
      loader: () => import('../components/Posts'),
      loading,
    }),
    loadData: async path => await loadData(path),
  },
  {
    path: '/post',
    component: Loadable({
      loader: () => import('../components/Redirect'),
      loading,
    }),
  },
  {
    path: '*',
    component: Loadable({
      loader: () => import('../components/NotFound'),
      loading,
    }),
  },
];

export default Routes;
