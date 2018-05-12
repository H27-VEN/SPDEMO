import React, { Component } from 'react';
import axios from 'axios';
import PostHistoryTable from './components/PostHistoryTable.js';
import PostContentGraph from './components/PostContentGraph.js';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    const state = {post: [], profile: []};
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

export default App;
