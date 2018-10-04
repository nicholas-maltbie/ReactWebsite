import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Cover } from './Components';
import { DataList } from './DataList'
import './App.css';
import GHC18 from './blog/GHC18'

class List extends Component {
  render() {
    
    return (
      <div>
        <Cover image={require("./media/backgrounds/blog.jpg")} height="35vh"/>

        <h1 className="text-center center-block col-lg-12">
          Nick Maltbie's Blog
        </h1>
        
        <DataList reqTag="Blog"/>
      </div>
    )
  }
}

class Blog extends Component {
  render() {
    return (
      <div>
        <Route exact path="/Blog" component = { List } />
        <Route path="/Blog/GHC18" component = { GHC18 } />
      </div>
    );
  }
}

export default Blog;
