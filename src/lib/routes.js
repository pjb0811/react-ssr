import React from 'react';
import loadData from './loadData';
import Loadable from 'react-loadable';

const loading = () => {
  return <div>loading...</div>;
};

const Routes = [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('../components/Home'),
      modules: ['../components/Home'],
      webpack: () => [require.resolveWeak('../components/Home')],
      loading
    })
  },
  {
    path: '/about',
    component: Loadable({
      loader: () => import('../components/About'),
      modules: ['../components/About'],
      webpack: () => [require.resolveWeak('../components/About')],
      loading
    })
  },
  {
    path: '/posts/:id',
    component: Loadable({
      loader: () => import('../components/Posts'),
      modules: ['../components/Posts'],
      webpack: () => [require.resolveWeak('../components/Posts')],
      loading
    }),
    loadData: async path => await loadData(path)
  },
  {
    path: '/posts',
    component: Loadable({
      loader: () => import('../components/Posts'),
      modules: ['../components/Posts'],
      webpack: () => [require.resolveWeak('../components/Posts')],
      loading
    }),
    loadData: async path => await loadData(path)
  },
  {
    path: '/post',
    component: Loadable({
      loader: () => import('../components/Redirect'),
      modules: ['../components/Redirect'],
      webpack: () => [require.resolveWeak('../components/Redirect')],
      loading
    })
  },
  {
    path: '*',
    component: Loadable({
      loader: () => import('../components/NotFound'),
      modules: ['../components/NotFound'],
      webpack: () => [require.resolveWeak('../components/NotFound')],
      loading
    })
  }
];

export default Routes;
