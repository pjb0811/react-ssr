import Counter from './Counter';
import Post from './Post';

class Store {
  constructor(props) {
    this.counter = new Counter();
    this.post = new Post(props);
  }
}

export function initStore(initState = {}) {
  return new Store(initState);
}
