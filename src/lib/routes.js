import Home from '../components/Home';
import About from '../components/About';
import Posts from '../components/Posts';
import Redirect from '../components/Redirect';
import NotFound from '../components/NotFound';
import loadData from './loadData';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: Posts,
    loadData: async path => await loadData(path)
  },
  {
    path: '/posts',
    component: Posts,
    loadData: async path => await loadData(path)
  },
  {
    path: '/post',
    component: Redirect
  },
  {
    path: '*',
    component: NotFound
  }
];

export default Routes;
