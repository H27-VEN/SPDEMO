import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import PostHistoryTable from '../components/PostHistoryTable';
import PostContentGraph from '../components/PostContentGraph';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchPostData();
    this.props.fetchProfileData();
  }

  render() {
    // console.log("tableData: ", this.props.tabledata);
    // console.log("GraphData: ", this.props.postdata);
    if (!Array.isArray(this.props.tabledata.data) || !Array.isArray(this.props.postdata.data)) {
      return (<div className="text-center">...Loading</div>);
    }
    return (
      <div className="container">
        <div className="row border-between">
          <div className="col-sm-5">
            <PostHistoryTable data={this.props.tabledata.data} />
          </div>
          <div className="col-sm-7">
            <PostContentGraph data={this.props.postdata.data} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tabledata: state.profile,
  postdata: state.posts,
});

const mapDispatchToProps = dispatch => ({
  fetchProfileData: () => {
    // console.log('in fetch profiles');
    dispatch(() => {
      axios.get('http://localhost:8000/data/profiles')
        .then((response) => {
          // console.log('response: ', response);
          if (Array.isArray(response.data)) {
            dispatch({
              type: 'FETCH_PROFILES_SUCCESS',
              payload: response.data,
            });
          }
          return dispatch;
        })
        .catch(error => dispatch({
          type: 'FETCH_PROFILES_ERROR',
          payload: error,
        }));
    });
  },
  fetchPostData: () => {
    // console.log('in fetch posts');
    dispatch(() => {
      axios.get('http://localhost:8000/data/posts')
        .then((response) => {
          // console.log('response: ', response);
          if (Array.isArray(response.data)) {
            dispatch({
              type: 'FETCH_POSTS_SUCCESS',
              payload: response.data,
            });
          }
          return dispatch;
        })
        .catch(error => dispatch({
          type: 'FETCH_POSTS_ERROR',
          payload: error,
        }));
    });
  },
});

App.propTypes = {
  fetchPostData: PropTypes.func,
  fetchProfileData: PropTypes.func,
  tabledata: PropTypes.objectOf,
  postdata: PropTypes.objectOf,
};

App.defaultProps = {
  fetchPostData: {},
  fetchProfileData: {},
  tabledata: {},
  postdata: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

