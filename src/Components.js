import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = function ({ page }) {
  const divstyle = {
    height: '10vh',
    backgroundColor: '#CCC',
  }
  const headerstyle = {
    float: 'left',
    paddingLeft: '3vw',
  }
  return (
    <div style={divstyle}>
      <h5 style={headerstyle}>Want to see the <a href='https://github.com/nicholas-maltbie/ReactWebsite'>source code</a> of this website?</h5>
    </div>
  )
}

const NavBar = function ({ page }) {
  const divstyle={
    height:'10vh',
    paddingTop: '0.5vh',
    backgroundColor: '#CCC',
  }
  const hstyle = {
    paddingLeft: '3vw',
    textDecoration: 'none',
    textDecorationStyle: 'none',
    float: 'left',
    color: '#444',
  }
  const linkstyle = {
    paddingLeft: '3vw',
    textDecoration: 'none',
    textDecorationStyle: 'none',
    float: 'right',
    color: '#444',
  };
  const navstyle = {
    textDecoration: 'none',
  }
  const liststyle = {
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
  const linkstyle = {
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

const HorizLinks = function ({ name }) {
  const divstyle = {
    padding: 0,
    margin: 0,
  }
  return (
    <div className="row" style={divstyle}>
      <div className="Horiz-link col-xs-12 col-sm-8 col-md-6 col-lg-5">
          <h1>{name}</h1>
      </div>
    </div>
  )
};

const EmptyPadding = function ({ height }) {
  const paddingStyle = {
    height: `${height}`,
  }
  return (
    <div style={paddingStyle}/>
  )
}

const CoverVideo = function ({ children, url}) {
  const divstyle = {

  }
  return (
    <video className='CoverStyle' poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" playsinline autoplay muted loop>
      <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm"/>
      <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4"/>
      { children }
    </video>
  )
}

const Cover = function ({ children, image, height }) {
  const divstyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className='CoverStyle' style={divstyle}>
      { children }
    </div>
  )
}

const Project = function ({ title, date, link, icon, iconalt, children }) {
  const titleStyle = {
    margin: 0,
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'left',
    float: 'left',
    diaplsy: 'block',
  }
  const dateStyle = {
    fontSize: 'large',
    textAlign: 'left',
    diaplsy: 'block',
  }
  const descriptionStyle = {
    marginLeft:'45px',
    marginBottom:'50px',
    paddingRight:'10px',
    display: 'block',
    textAlign: 'left',
    fontSize: '1.5em',
    float: 'left',
  }
  const imageStyle = {
    display: 'inline-block',
    width: '75px',
    float:'right',
    marginBottom: '10px',
    borderRadius: '10px',
    marginRight: '30px',
    verticalAlign: 'top',
  }
  const contentElem = {
    display: 'inline-block',
    float: 'left',
  }
  const divstyle = {
    paddingLeft: '5vw',
    paddingRight: '5vw',
    marginTop: '2vh',
    display: 'block',
    float: 'left',
    minHeight: '30vh',
  }
  return (
    <div style={divstyle} className="col-sm-12 col-md-6">
      <div style={contentElem}>
        <NavLink style={titleStyle} to={link}> {title} </NavLink>
        <div style={dateStyle}>{date}</div>
      </div>
      <img style={imageStyle} src={icon} alt={iconalt}/>
      <div style={descriptionStyle}> {children}</div>
    </div>
  )
}

export { CoverVideo, Footer, NavBar, Cover, HorizLinks, Project, EmptyPadding }
