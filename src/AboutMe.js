import React, { Component } from 'react';
import { HorizLinks, Cover } from './Components';
import me from './media/me2.jpg';
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
              I am a determined student and have taken on many individual
              projects. One example is this website, hosted by github pages and
              I coded the website from scratch. I am currently studying
              Computer Science at UC and expect to graduate in 2021.
            </p>
            <p>
              To view my resume, click <a href='https://drive.google.com/file/d/0B0gCZqueOMVIV1BMUnRtQXJ1RTQ/view'>here</a>.

            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
