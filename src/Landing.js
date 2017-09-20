import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { HorizLinks, Cover } from './Components';
import me from './media/me.jpg';
import bg from './media/bg.jpg';
import bg2 from './media/bg2.jpg';

const Landing = () => (
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
          I am a computer science student at the University of
          Cincinnati with an expected graduation in Spring 2021.
          Currently, I am enrolled in the ACCEND program and am planning to
          get a Masters and Bachelors of Science in Computer Science.
        </p>
      </div>
    </div>

    <Cover image={bg2} height="60vh">
      <NavLink to="/AboutMe">
        <HorizLinks name="About Me" />
        </NavLink>
      <HorizLinks name="Resume" />
      <HorizLinks name="Projects" />
    </Cover>
  </div>
);

export default Landing;
