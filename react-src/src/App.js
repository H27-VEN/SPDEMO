import React, { Component } from 'react';
import './App.css';
import PostHistoryTable from './components/PostHistoryTable.js';
import PostContentGraph from './components/PostContentGraph.js';
import axios from 'axios';

class App extends Component {
  
  constructor(props) {
    super(props);
    const state = {post: [], profile: []};
  }
  
  render() {
    return (
      <div className="container text-center ">
          <div className="row">
            <div className="cols-4 ml-1">
              <PostHistoryTable />
            </div>
            <div className="cols-4 ml-1">
              <PostContentGraph />
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

export default App;
