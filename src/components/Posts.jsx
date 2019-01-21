import React, { Component } from 'react';
import withLayout from './withLayout';
import loadData from '../lib/loadData';
// import queryString from 'query-string';

class Posts extends Component {
  constructor(props) {
    super(props);
    const { staticContext } = this.props;
    this.state = {
      data: staticContext ? staticContext.data : {},
    };
  }

  async componentDidMount() {
    const { url } = this.props.match;
    let data;

    if (window.__ROUTE_DATA__) {
      data = window.__ROUTE_DATA__;
      window.__ROUTE_DATA__ = null;
    } else {
      data = await loadData(url);
    }
    this.setState({
      data,
    });
  }

  render() {
    const { data } = this.state;
    // const { location, match } = this.props;

    return (
      <div>
        {/* <div>{JSON.stringify(match)}</div>
        <div>{JSON.stringify(queryString.parse(location.search))}</div> */}
        <div>{JSON.stringify(data)}</div>
      </div>
    );
  }
}

export default withLayout(Posts);
