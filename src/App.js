import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Landing from './Landing';
import Projects from './Projects';
import Honors from './Honors';
import { NavLink } from 'react-router-dom';
import { NavBar, Footer } from './Components';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App">
          <NavBar className="container-fluid"/>
          <div className="container-fluid Main" style={{padding: 0}}>
            <div className="content">
              <Route exact path="/" component={ Landing } />
              <Route path="/AboutMe" component={ AboutMe } />
              <Route path="/Projects" component={ Projects } />
              <Route path="/UHP" component={ Honors } />
            </div>
          </div>
          <Footer className="container-fluid"/>
        </div>
      </Router>
    );
  }
};

export default App;
