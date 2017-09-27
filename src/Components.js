import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = function ({ page }) {
  var divstyle = {
    height: '10vh',
    backgroundColor: '#CCC',
  }
  var headerstyle = {
    float: 'left',
    paddingLeft: '3vw',
  }
  return (
    <div style={divstyle}>
      <h3 style={headerstyle}>Want to see the <a href='https://github.com/nicholas-maltbie/ReactWebsite'>source code</a> of this website?</h3>
    </div>
  )
}

const NavBar = function ({ page }) {
  var divstyle={
    height:'10vh',
    paddingTop: '0.5vh',
    backgroundColor: '#CCC',
  }
  var hstyle = {
    paddingLeft: '3vw',
    textDecoration: 'none',
    textDecorationStyle: 'none',
    float: 'left',
    color: '#444',
  }
  var linkstyle = {
    paddingLeft: '3vw',
    textDecoration: 'none',
    textDecorationStyle: 'none',
    float: 'right',
    color: '#444',
  };
  var navstyle = {
    textDecoration: 'none',
  }
  var liststyle = {
    float: 'right',
    paddingRight: '3vw',
  }
  return (
    <div style={divstyle}>
      <NavLink to="/" style={navstyle}>
        <h1 className='col-xs-12 col-sm-6 col-md-4 col-lg-3' style={hstyle}> Nick Maltbie</h1>
      </NavLink>
      <ul style={liststyle}>
        <RightLink name="About Me" link="/AboutMe" />
        <RightLink name="Projects" link="/Projects" />
        <RightLink name="UHP" link="/UHP" />
        <RightLink name="Home" link="/" />
      </ul>
    </div>
  )
}

const RightLink = function ({ name, link }) {
  var linkstyle = {
    paddingLeft: '3vw',
    textDecoration: 'none',
    textDecorationStyle: 'none',
    float: 'right',
    color: '#444',
  };
  return (
    <NavLink to={link}>
      <h3 style={linkstyle} className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>{name}</h3>
    </NavLink>
  )
}

const HorizLinks = ({ name }) => (
  <div className="row">
    <div className="Horiz-link col-xs-12 col-sm-8 col-md-6 col-lg-5">
        <h1>{name}</h1>
    </div>
  </div>
);

const Cover = function ({ children, image, height }) {
  var divstyle = {
    backgroundImage: `url(${image})`,
    height: `${height}`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '100px',
    backgroundColor: '#FFF',
    marginTop: '3vh',
  };
  return (
    <div style={divstyle}>
      { children }
    </div>
  )
}

export { Footer, NavBar, Cover, HorizLinks }
