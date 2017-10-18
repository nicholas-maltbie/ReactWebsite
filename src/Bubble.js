import React, { Component } from 'react';
import { HorizLinks, Cover } from './Components';
import { NavLink } from 'react-router-dom';
import './App.css';

class Bubble extends Component {
  render() {
    return (
      <div>
        <div className="intro center-block col-lg-12">
          <h1 className="text-center">
            Bubble Shooter
          </h1>

          <div className='col-lg-12'>
            <link rel="stylesheet" type="text/css"
              href="https://rawgit.com/nicholas-maltbie/BubbleShooterJS/master/bubblestyle.css"></link>
            <canvas id="game-canvas" style={{maring:'0 auto', background: '#eee', width:480, height:320}}></canvas>
            <script type='text/javascript'
              src="https://rawgit.com/nicholas-maltbie/BubbleShooterJS/master/grid.js">
            </script>
            <script type='text/javascript'
              src="https://rawgit.com/nicholas-maltbie/BubbleShooterJS/master/ball.js">
            </script>
            <script type='text/javascript'
              src="https://rawgit.com/nicholas-maltbie/BubbleShooterJS/master/shooter.js">
            </script>
            <script type='text/javascript'
              src="https://rawgit.com/nicholas-maltbie/BubbleShooterJS/master/manager.js">
            </script>
            <script type='text/javascript'
              src="https://rawgit.com/nicholas-maltbie/BubbleShooterJS/master/bubbles.js">
            </script>
          </div>
        </div>

      </div>
    );
  }
}

export default Bubble;
