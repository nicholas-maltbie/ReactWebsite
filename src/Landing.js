import React from 'react';
import { NavLink } from 'react-router-dom';
import { HorizLinks, Cover } from './Components';

const Landing = () => (
  <div>
    <Cover image={require("./media/backgrounds/landing-1.jpg")} height="40vh">
      <div className="col-lg-3 col-xs-12">
        <img className="center-block Profile-image" src={require("./media/me.jpg")} alt="Me"/>
      </div>
    </Cover>

    <div className="row">
      <div className="intro center-block col-lg-6 col-xs-12">
        <h1 className="text-center">
          Nick Maltbie
        </h1>
        <div className="col-lg-12">
          <p>
            I am a computer science student at the University of
            Cincinnati with an expected graduation in Spring 2021.
            Currently, I am enrolled in the ACCEND program and am planning to
            get a Masters and Bachelors of Science in Computer Science.
          </p>
        </div>
      </div>
    </div>

    <Cover image={require("./media/backgrounds/landing-2.jpg")}
    height="60vh">
      <NavLink to="/AboutMe">
        <HorizLinks name="About Me" />
      </NavLink>
      <a href='https://drive.google.com/file/d/0B0gCZqueOMVIV1BMUnRtQXJ1RTQ/view'>
        <HorizLinks name="Resume" />
      </a>
      <NavLink to="/Projects">
        <HorizLinks name="Projects" />
      </NavLink>
    </Cover>
  </div>
);

export default Landing;
