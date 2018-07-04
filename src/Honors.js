import React, { Component } from 'react';
import { Project, Cover } from './Components';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Treacery from './firstyear/Treachery'
import BCat from './firstyear/BearcatCoders'
import Gateway from './firstyear/Gateway'
import YearOneReview from './firstyear/yearinreview'
import Knee from './secondyear/Knee'
import Japan from './secondyear/Japan'
import YearTwoReview from './secondyear/SecondYearReview'
import './App.css';

class Honors extends Component {
  render() {
    return (
      <div>
        <Route exact path="/UHP" component = { List } />
        <Route path="/UHP/Japan" component = { Japan }/>
        <Route path="/UHP/treachery" component = { Treacery }/>
        <Route path="/UHP/knee" component = { Knee }/>
        <Route path="/UHP/BearcatCoders" component = { BCat }/>
        <Route path="/UHP/intro" component = { Gateway }/>
        <Route path="/UHP/FirstReview" component = { YearOneReview }/>
        <Route path="/UHP/SecondReview" component = { YearTwoReview }/>
      </div>
    );
  }
}

const List = function () {
  const rowstyle = {
    padding: '0',
  }
  return (
    <div>
    <Cover image='https://drive.google.com/uc?id=1aKqU76aMOqlocJa4U29SVXeaRbfZUJ2z' height="35vh" />

    <h1 className="text-center center-block col-lg-12">
      Honors
    </h1>

    <h2 className="text-center center-block col-lg-12">
      Second Year
    </h2>

    <NavLink to="/UHP/SecondReview"><h2 className="text-left col-lg-offset-1 col-lg-11">
      Second Year In Review
    </h2></NavLink>
    
    <div className="col-lg-12" style={rowstyle}>
      <Project title="Japan Trip" date="(Spring 2018)"
        link="/UHP/Japan" icon='https://drive.google.com/uc?id=1H7-B2_M2fPkrDg5snuNw3qr3phEFySRC' iconalt="Japan Icon">
        After my coop at Infinera, I traveled to Japan for a study tour with 
        other UC students for two weeks. I had fully recovered from my injury 
        and was ready for a new experience. 
      </Project>
      <Project title="Accessibility Project" date="(Fall/Spring 2017,2018)"
        link="/UHP/Knee" icon='https://drive.google.com/uc?id=1vJ_P7yPLpi_T7q54zbgWhSJrnAO7zzfh' iconalt="Stair Icon">
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
        link="/UHP/treachery" icon='https://drive.google.com/uc?id=1E8bHv4s-mPAwWsaIUvkwq8x7yvUfMWG6' iconalt="Treachery Lamp Icon">
        For my second honors experience, I worked with some of my fellow
        students to create a video game based on the board game Betrayal at
        House on the Hill.
      </Project>
      <Project title="Bearcat Coders" date="(Fall 2016 Spring 2017)"
        link="/UHP/BearcatCoders" icon='https://drive.google.com/uc?id=1oBdFSB8Cz23kQ-iEDOIzeta7genChoV9' iconalt="Bearcat Coders Icon">
      For my first Honors Experience, I decided to take a larger involvement
      in the Association for Computing Machinery, Women's Chapter (ACM-W) and
      their program to help teach coding to local high school students at Hughes
      STEM High School.
      </Project>
    </div>
    <div className="col-lg-12" style={rowstyle}>
      <Project title="Gateway to University Honors" date="(Fall 2016)"
        link="/UHP/intro" icon='https://drive.google.com/uc?id=1XX-v0Ng7HnHUIsNpJ2kWlrsLSzxBWyZ3' iconalt="UHP Icon">
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
