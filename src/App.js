import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import bg from './media/bg.jpg';
import me from './media/me.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <div className="row">
          <div className="Cover">
            <div className="col-xl-2 col-lg-3 col-md-offset-1 col-md-4 col-sm-4 col-xs-12">
              <img className="center-block Profile-image" src={me}/>
            </div>
          </div>
          <div className="intro col-xl-8 col-lg-6 col-md-6 col-sm-8 col-xs-12">
            <div className="center-block">
              <h1 className="text-center">
                Nick Maltbie
              </h1>
              <p>
                I am a computer science student at the University of
                Cincinnati with an expected graduation in Spring 2021.
                Currently, I am enrolled in the ACCEND program and am planning to
                get a Masters and Bachelors of Science in Computer Science.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="Cover2">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
