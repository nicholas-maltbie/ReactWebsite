import React, { Component } from 'react';
import { HorizLinks, Cover } from './Components';
import { NavLink } from 'react-router-dom';
import './App.css';
import Script from 'react-load-script'

class Bubble extends Component {
  render() {
    return (
      <div>
        <div className="row"/>
        <h1 className="col-lg-12 text-center" style = {{marginTop:'50px', marginBottom:'25px'}}>
          Bubble Shooter
        </h1>

        <div>
          <link rel="stylesheet" type="text/css"
            href="https://rawgit.com/nicholas-maltbie/BubbleShooterJS/master/bubblestyle.css"/>
          <canvas id="game-canvas" style={{maring:'0 auto', background: '#eee', maxWidth:'100%', maxHeight:'100%'}}></canvas>
          <Script url="https://rawgit.com/nicholas-maltbie/BubbleShooterJS/master/grid.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
            />
          <Script url="https://rawgit.com/nicholas-maltbie/BubbleShooterJS/master/ball.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
            />
          <Script url="https://rawgit.com/nicholas-maltbie/BubbleShooterJS/master/shooter.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
            />
          <Script url="https://rawgit.com/nicholas-maltbie/BubbleShooterJS/master/manager.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
            />
          <Script url="https://rawgit.com/nicholas-maltbie/BubbleShooterJS/master/bubbles.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
            />
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-6 col-md-offset-3" style= {{marginTop: '25px', marginBottom: '25px'}}>
            <p>
              Refresh the page if the game doesn't load right away.
            </p>
            <p>
              This project is hosted on <a href='https://github.com/nicholas-maltbie/BubbleShooterJS/'>github</a>. 
              There is also a <NavLink to="projects/bubble">report </NavLink> that explains the project.
            </p>
          </div>
        </div>
      </div>
    );
  }
  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }

  handleScriptError() {
    this.setState({ scriptError: true })
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: false })
  }
}

export default Bubble;
