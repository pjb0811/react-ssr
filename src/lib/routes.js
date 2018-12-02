import Home from '../components/Home';
import Posts from '../components/Posts';
import NotFound from '../components/NotFound';
import loadData from './loadData';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
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
    path: '*',
    component: NotFound
  }
];

export default Routes;
