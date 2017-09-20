import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Landing from './Landing';
import { NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid" style={{backgroundColor: '#EEE'}}>
          <div className="App">
            <Route exact path="/" component={ Landing } />
            <Route path="/AboutMe" component={ AboutMe } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
