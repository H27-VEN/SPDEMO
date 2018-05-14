import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PostHistoryTable from '../components/PostHistoryTable.js';
import PostContentGraph from '../components/PostContentGraph.js';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    console.log("App props: ", props);
  }
  
  render() {
      console.log("tableData: ", this.props.tabledata);
      console.log("GraphData: ", this.props.postdata);
      if(!Array.isArray(this.props.tabledata.data) || !Array.isArray(this.props.postdata.data)) {
          return (<div className="text-center">...Loading</div>);
      }
      else { 
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
  componentDidMount() {
      this.props.fetchPostData();
      this.props.fetchProfileData();
  }

}  

const mapStateToProps = (state) => {
    return {
      tabledata: state.profile,
      postdata: state.posts
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchProfileData: () => {
        console.log("in fetch profiles");
        dispatch(dispatch => {
          axios.get('http://localhost:8000/data/profiles')
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
        console.log("in fetch posts");
        dispatch(dispatch => {
          axios.get('http://localhost:8000/data/posts')
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

