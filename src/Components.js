import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from 'react-motion-drawer';
import MediaQuery from 'react-responsive';

const Footer = function ({ page }) {
  return (
    <div className="footerstyle">
      <h5 className='foottext'>Want to see the <a href='https://github.com/nicholas-maltbie/ReactWebsite'>source code</a> of this website?</h5>
      <ul className="footlinks">
        <li>
          <span title="nick.dmalt@gmail.com">
            <a href="mailto:nick.dmalt@gmail.com"><img src={require("./media/icons/gmail-icon.png")} className="iconstyle"/></a>
          </span>
        </li>
        <li>
          <span title="linked in profile">
            <a href="https://www.linkedin.com/in/nicholas-maltbie-b543a8137/"><img src={require("./media/icons/in-logo.png")} className="iconstyle"/></a>
          </span>
        </li>
        <li>
          <span title="My twitter profile">
            <a href="https://twitter.com/flyguy23ndm"><img src={require("./media/icons/twitter-icon.png")} className="iconstyle"/></a>
          </span>
        </li>
        <li>
          <span title="My facebook profile">
            <a href="https://www.facebook.com/nicholas.maltbie"><img src={require("./media/icons/fb-icon.png")} className="iconstyle"/></a>
          </span>
        </li>
        <li>
          <span title="My github profile">
            <a href="https://github.com/nicholas-maltbie"><img src={require("./media/icons/github-icon.png")} className="iconstyle"/></a>
          </span>
        </li>
      </ul>
    </div>
  )
}

class NavBar extends Component {
  state = {
    openLeft: false,
    openRight: false,
    relativeWidth: false,
    width: 300
  };
  render() {

    const divstyle={
      height:'10vh',
      paddingTop: '0.5vh',
      backgroundColor: '#CCC',
    }
    const fullstyle={
      textAlign: 'center',
      textDecoration: 'none',
    }
    const hstyle = {
      width: '100%',
      left: 0,
      position: 'fixed',
      paddingLeft: '3vw',
      textDecoration: 'none',
      textDecorationStyle: 'none',
      color: '#444',
    }
    const hstyle2 = {
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
      height: '100%',
      width: '100%',
      textDecoration: 'none',
    }
    const liststyle = {
      float: 'right',
      paddingRight: '3vw',
    }

    const { openRight, openLeft, drawerProps, image } = this.state;
    return (
      <div>
        {!openRight &&
        <Drawer
            {...drawerProps}
            fadeOut={true}
            open={openLeft}
            onChange={open => this.setState({ openLeft: open })}
          >
            <div style={{ padding: "2em", backgroundColor: 'white', height: '100vh', width: '100%'}}>
              <h3>Nick Maltbie</h3>
              <CenterLink name="Home" link="/" fn={open => this.setState({ openLeft: !openLeft })}/>
              <CenterLink name="About Me" link="/AboutMe" fn={open => this.setState({ openLeft: !openLeft })}/>
              <CenterLink name="UHP" link="/UHP" fn={open => this.setState({ openLeft: !openLeft })}/>
              <CenterLink name="Projects" link="/Projects" fn={open => this.setState({ openLeft: !openLeft })}/>
            </div>
          </Drawer>}
        {!openLeft &&
          <Drawer
            right={true}
            width={this.state.width}
            {...drawerProps}
            open={openRight}
            onChange={open => this.setState({ openRight: open })}
          >
            {val => {
              var per = val / 300;
              return (
                <div
                  style={{
                    backgroundColor: `rgba(0, 184, 212, ${per})`,
                    width: "100%",
                    height: "100%"
                  }}
                />
              );
            }}
          </Drawer>}
        <div className="navbar-fixed" style={{position: "fixed",
          backgroundColor: "#CCC", width:"100%", zIndex: 100, height:'10vh', verticalAlign: 'middle'}}>
          <nav>
          <MediaQuery query="(min-width: 1224px)">
            <div className="row">
              <NavLink to="/" style={navstyle}>
                <h1 className='col-xs-12 col-sm-6 col-md-4 col-lg-3' style={hstyle2}> Nick Maltbie</h1>
              </NavLink>
              <RightLink className="col-lg-2" name="Projects" link="/Projects" />
              <RightLink className="col-lg-2" name="UHP" link="/UHP" />
              <RightLink className="col-lg-2" name="About Me" link="/AboutMe" />
              <RightLink className="col-lg-2" name="Home" link="/" />
            </div>
          </MediaQuery>
          <MediaQuery query="(max-width: 1224px)">
            <div className="nav-wrapper cyan accent-4" style= {{margin: '1vh'}}>
              <h2 style={hstyle}>
                <NavLink to="/" style={fullstyle}> Nick Maltbie </NavLink>
              </h2>
              <a
                style={{ padding: 15, float: "left", height:'8vh', width: '8vh', zIndex: 250}}
                className="glyphicons"
                onClick={() =>
                  this.setState({ openLeft: !openLeft, openRight: false })}
              >
                <span className="glyphicon glyphicon-menu-hamburger" style={{padding: 0, fontSize: '4vh', color: '#333', marginTop: 'auto'}}/>
              </a>
            </div>
          </MediaQuery>
          </nav>
        </div>
      </div>
    );
  }
}

const CenterLink = function ({name, link, fn}) {
  const linkstyle = {
    textDecoration: 'none',
    textDecorationStyle: 'none',
    display: 'block',
    width: '100%',
    color: '#444',
  };
  return (
    <NavLink to={link} onClick={fn}>
      <h3 style={linkstyle}>{name}</h3>
    </NavLink>
  )
}

const RightLink = function ({ name, link, fn }) {
  const linkstyle = {
    textDecoration: 'none',
    textDecorationStyle: 'none',
    display: 'inline-block',
    height: '100%',
    verticalAlign: 'middle',
    float: 'right',
    paddingRight: '5vw',
    color: '#444',
  };
  return (
    <NavLink to={link} onClick={fn}>
      <h3 style={linkstyle}>{name}</h3>
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
      height: `${height}`,
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
    width: 'calc(100% - 2vw - 75px)',
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'left',
    float: 'left',
    diaplsy: 'block',
    marginRight: '0',
    zIndex: '10',
  }
  const dateStyle = {
    fontSize: 'large',
    textAlign: 'left',
    marginBottom: '20px',
    width: 'calc(100% - 2vw - 75px)',
    diaplsy: 'block',
    marginRight: '0',
  }
  const imageStyle = {
    display: 'inline-flex',
    width: '75px',
    float:'right',
    borderRadius: '10px',
    marginLeft: '2vw',
    marginTop: '0px',
    marginRight: '0px',
    marginBottom: '30px',
    verticalAlign: 'top',
  }
  const divstyle = {
    paddingLeft: '5vw',
    paddingRight: '5vw',
    marginTop: '2vh',
    display: 'block',
    float: 'left',
  }
  return (
    <div style={divstyle} className="col-sm-12 col-md-6">
      <img style={imageStyle} src={icon} alt={iconalt}/>
      <NavLink className="col-lg-12" style={titleStyle} to={link}> <h3> {title} </h3> </NavLink>
      <div className="col-lg-12" style={dateStyle}>{date}</div>
      <div className="col-lg-12">
        <div className='Description-style'> <p>{children}</p> </div>
      </div>
    </div>
  )
}

export { CoverVideo, Footer, NavBar, Cover, HorizLinks, Project, EmptyPadding }
