import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import PostHistoryTable from '../components/PostHistoryTable';
import PostContentGraph from '../components/PostContentGraph';
import networkError from '../images/network_error.png';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchPostData();
    this.props.fetchProfileData();
  }

  render() {
    // console.log('props: ', this.props);
    // console.log('tableData: ', this.props.tabledata);
    // console.log('GraphData: ', this.props.postdata);
    if ((this.props.tabledata.data.length === 0 || this.props.postdata.data.length === 0) &&
    (this.props.tabledata.error === null && this.props.postdata.error === null)) {
      return (<div className="text-center">...Loading</div>);
    } else if (this.props.tabledata.error !== null || this.props.postdata.error !== null) {
      return (
        <div className="text-center">
          <img src={networkError} alt="network_error_icon" />
          <p>OOPs Now thats a bummer We have a network error!!</p>
          <p>have you checked whether you have <strong>started the server</strong></p>
          <p>just <code>cd</code> into the root directory of the project and
             run <code>npm start</code>
          </p>
        </div>
      );
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
        .catch((error) => {
          // console.log(typeof error);
          dispatch({
            type: 'FETCH_POSTS_ERROR',
            payload: error,
          });
          return dispatch;
        });
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
        .catch((error) => {
          // console.log(typeof error);
          dispatch({
            type: 'FETCH_POSTS_ERROR',
            payload: error,
          });
          return dispatch;
        });
    });
  },
});

App.propTypes = {
  fetchPostData: PropTypes.func,
  fetchProfileData: PropTypes.func,
  tabledata: PropTypes.shape({ data: PropTypes.array, error: PropTypes.object }),
  postdata: PropTypes.shape({ data: PropTypes.array, error: PropTypes.object }),
};

App.defaultProps = {
  fetchPostData: {},
  fetchProfileData: {},
  tabledata: { data: [], error: null },
  postdata: { data: [], error: null },
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

