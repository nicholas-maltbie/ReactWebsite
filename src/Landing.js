import React from 'react';
import { HorizLinks, Cover } from './Components';
import { CardList } from './DataList';

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
            I am a Computer Science student at the University of
            Cincinnati with an expected graduation in Spring 2021.
            Currently, I am in the ACCEND program and plan to
            get a Masters and Bachelors of Science in Computer Science.
          </p>
        </div>
      </div>
    </div>
    
    <h3 className="text-center">
      Contact Me
    </h3>
    <div className="landingtable">
      <ul className="landinglinks">
        <li>
          <span title="nick.dmalt@gmail.com">
            <a href="mailto:nick.dmalt@gmail.com"><img src={require('./media/icons/gmail-icon.png')} className="iconstyle" alt="gmail icon"/></a>
          </span>
        </li>
        <li>
          <span title="linked in profile">
            <a href="https://www.linkedin.com/in/nicholas-maltbie-b543a8137/"><img src={require('./media/icons/in-logo.png')} className="iconstyle" alt="linkedin icon"/></a>
          </span>
        </li>
        <li>
          <span title="My twitter profile">
            <a href="https://twitter.com/NicholasMaltbie"><img src={require('./media/icons/twitter-icon.png')} className="iconstyle" alt="twitter icon"/></a>
          </span>
        </li>
        <li>
          <span title="My facebook profile">
            <a href="https://www.facebook.com/nicholas.maltbie"><img src={require('./media/icons/fb-icon.png')} className="iconstyle" alt="facebook icon"/></a>
          </span>
        </li>
        <li>
          <span title="My github profile">
            <a href="https://github.com/nicholas-maltbie"><img src={require('./media/icons/github-icon.png')} className="iconstyle" alt="github icon"/></a>
          </span>
        </li>
      </ul>
    </div>
        

    <Cover image={require("./media/backgrounds/landing-2.jpg")}>
      <HorizLinks name="About Me" link="/#/AboutMe"/>
      <HorizLinks name="Resume" link='https://drive.google.com/file/d/0B0gCZqueOMVIV1BMUnRtQXJ1RTQ/view'/>
      <HorizLinks name="Projects" link="/#/Projects"/>
      <HorizLinks name="Blog" link="/#/Blog"/>
    </Cover>
    
    
    <p>
      <h1 className="text-center">
        Activity Feed
      </h1>
      
      <CardList numElems={3}/>
    </p>
    
    <Cover image={require("./media/backgrounds/landing-3.jpg")} height="40vh"/>
    
  </div>
);

export default Landing;
