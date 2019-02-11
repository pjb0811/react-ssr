import { observable, action, computed, toJS } from 'mobx';
import loadData from '../lib/loadData';

class Post {
  @observable
  state = {
    loading: false,
    error: false,
    data: [],
  };

  constructor(props) {
    this.state = props.post ? props.post.state : this.state;
  }

  @action
  getPost = async path => {
    this.state = {
      ...this.state,
      loading: true,
      data: [],
    };

    try {
      const data = await loadData(path);
      this.state.loading = false;
      this.state.data = Array.isArray(data) ? data : [data];
    } catch (e) {
      this.state.error = true;
    }
  };

  @computed
  get data() {
    return toJS(this.state.data);
  }
}

export default Post;
