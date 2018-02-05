import React, { Component } from 'react';
import { Project, Cover } from './Components';
import { NavLink } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import bg from './media/IMG_4169-EFFECTS.jpg';
import lamp from './media/icons/treachery.png';
import stair from './media/icons/stairIcon.png';
import bearcat from './media/icons/bearcatCoders.png';
import uhp from './media/icons/UHP.png';
import './App.css';
import Treacery from './firstyear/Treachery'
import BCat from './firstyear/BearcatCoders'
import Gateway from './firstyear/Gateway'
import YearOneReview from './firstyear/yearinreview'
import Knee from './secondyear/Knee'

class Honors extends Component {
  render() {
    return (
      <div>
        <Route exact path="/UHP" component = { List } />
        <Route path="/UHP/treachery" component = { Treacery }/>
        <Route path="/UHP/knee" component = { Knee }/>
        <Route path="/UHP/BearcatCoders" component = { BCat }/>
        <Route path="/UHP/intro" component = { Gateway }/>
        <Route path="/UHP/FirstReview" component = { YearOneReview }/>
      </div>
    );
  }
}

const List = function ({}) {
  const rowstyle = {
    padding: '0',
  }
  return (
    <div>
    <Cover image={bg} height="35vh" />

    <h1 className="text-center center-block col-lg-12">
      Honors
    </h1>

    <h2 className="text-center center-block col-lg-12">
      Second Year
    </h2>
    
    <div className="col-lg-12" style={rowstyle}>
      <Project title="Accessibility Project" date="(Fall/Spring 2017,2018)"
        link="/UHP/Knee" icon={stair} iconalt="Treachery Lamp Icon">
        In fall of last year, I tore my meniscus doing everyday activities
        and needed to get surgery to repair the injury. This experinece is me 
        reflecting upon the experience and the effect it has had on me. 
      </Project>
      
    </div>

    <h2 className="text-center center-block col-lg-12">
      First Year
    </h2>

    <NavLink to="/UHP/FirstReview"><h2 className="text-left col-lg-offset-1 col-lg-11">
      First Year In Review
    </h2></NavLink>

    <div className="col-lg-12" style={rowstyle}>
      <Project title="Treachery" date="(Spring/Summer 2017)"
        link="/UHP/treachery" icon={lamp} iconalt="Treachery Lamp Icon">
        For my second honors experience, I worked with some of my fellow
        students to create a video game based on the board game Betrayal at
        House on the Hill.
      </Project>
      <Project title="Bearcat Coders" date="(Fall 2016 Spring 2017)"
        link="/UHP/BearcatCoders" icon={bearcat} iconalt="Bearcat Coders Icon">
      For my first Honors Experience, I decided to take a larger involvement
      in the Association for Computing Machinery, Women's Chapter (ACM-W) and
      their program to help teach coding to local high school students at Hughes
      STEM High School.
      </Project>
    </div>
    <div className="col-lg-12" style={rowstyle}>
      <Project title="Gateway to University Honors" date="(Fall 2016)"
        link="/UHP/intro" icon={uhp} iconalt="UHP Icon">
        As part of the honors curriculum, I had to take the gateway to
        honors course. This is the introductory course to University Honors
        Program at UC. To read more about my experience, click the link above.
      </Project>
    </div>

    <div className="row"/>
    </div>
  )
}

export default Honors;
