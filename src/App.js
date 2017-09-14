import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import bg from './media/bg.jpg';
import me from './media/me.jpg';
import './App.css';

const HorizLinks = React.createClass({
  render(props) {
    var w = '100vw'
    if(window.innerWidth > 1000) {
      w = '40vw'
    }
    else if(window.innerWidth > 450) {
      w = '60vw'
    }
    this.state.style = {
      width: w
    }
    return (
      <div className="Horiz-link" style={this.state.style}>
          <h1>{this.props.name}</h1>
      </div>
    );
  },
  componentWillMount: function() {
      this.updateDimensions();
  },
  componentDidMount: function() {
      window.addEventListener("resize", this.updateDimensions);
  },
  componentWillUnmount: function() {
      window.removeEventListener("resize", this.updateDimensions);
  },
  updateDimensions() {
    var w = '100vw'
    if(window.innerWidth > 1000) {
      w = '40vw'
    }
    else if(window.innerWidth > 450) {
      w = '60vw'
    }
    this.setState({style: {width: w}});
  }
});

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
            <HorizLinks name="About Me" />
            <HorizLinks name="Resume" />
            <HorizLinks name="Projects" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
