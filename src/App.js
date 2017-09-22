import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Landing from './Landing';
import { NavLink } from 'react-router-dom';
import { NavBar, Footer } from './Components';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App">
          <NavBar className="container-fluid"/>
          <div className="container-fluid" style={{backgroundColor: '#EEE', paddingBottom: '5vh'}}>
            <div className="content">
              <Route exact path="/" component={ Landing } />
              <Route path="/AboutMe" component={ AboutMe } />
            </div>
          </div>
          <Footer className="container-fluid"/>
        </div>
      </Router>
    );
  }
};

export default App;
