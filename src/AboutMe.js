import React, { Component } from 'react';
import { HorizLinks, Cover } from './Components';
import me from './media/me.jpg';
import bg from './media/aboutme.jpg';
import './App.css';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Cover image={bg} height="40vh">
          <div className="col-lg-3 col-md-offset-1 col-md-4 col-sm-4 col-xs-12">
            <img className="center-block Profile-image" src={me}/>
          </div>
        </Cover>

        <div className="row">
          <div className="intro center-block col-lg-6 col-md-6 col-sm-7 col-xs-12">
            <h1 className="text-center">
              Nick Maltbie
            </h1>
            <p>
              About Me YASSS!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
