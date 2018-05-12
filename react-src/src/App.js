import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PostHistoryTable from './components/PostHistoryTable.js';
import PostContentGraph from './components/PostContentGraph.js';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    //const state = {post: [], profile: []};
  }
  
  render() {
    return (
      <div className="container">
          < div className="row border-between">
              <div className="col-sm">
                <PostHistoryTable data={this.props.tableData} />
              </div>
              <div className="col-sm">
                <PostContentGraph data={this.props.PostData} />
              </div>
          </div>
      </div>
    );
  }

  componentDidMount() {
      this.fetchPostData();
      this.fetchProfileData();
  }

  fetchPostData() {
    
    axios.get('http://localhost:5000/data/posts')
    .then(function (response) {
      console.log("Post Data: ",response);
    })
    
    .catch(function (error) {
      console.log("Post Data Error: ", error);
    }); 
  }

  fetchProfileData() {
    axios.get('http://localhost:5000/data/profiles')
    .then(function (response) {
      console.log("Profile Data: ",response);
    })
    
    .catch(function (error) {
      console.log("Profile Data: ", error);
    }); 
  }
}

const mapStateToProps = (state) => {
    return {
      tableData: state.profile,
      PostDate: state.posts
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchProfileData: () => {
        console.log("in fetch products");
        dispatch(dispatch => {
          axios.get('http://localhost:5000/data/profiles')
            .then((response) => {
              console.log("response: ", response);
              if (Array.isArray(response.data)) {
                return dispatch({
                  type: "FETCH_PROFILES_SUCCESS",
                  payload: response.data
                });
              }
            })
            .catch((error) => {
              return dispatch({
                type: "FETCH_PROFILES_ERROR",
                payload: error
              });
            });
        });
      },
      fetchPostData: () => {
        console.log("in fetch products");
        dispatch(dispatch => {
          axios.get('http://localhost:5000/data/profiles')
            .then((response) => {
              console.log("response: ", response);
              if (Array.isArray(response.data)) {
                return dispatch({
                  type: "FETCH_POSTS_SUCCESS",
                  payload: response.data
                });
              }
            })
            .catch((error) => {
              return dispatch({
                type: "FETCH_POSTS_ERROR",
                payload: error
              });
            });
        });
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
