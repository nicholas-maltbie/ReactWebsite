import React, { Component } from 'react';
import { Project, Cover } from '../Components';
import { NavLink } from 'react-router-dom';
import '../App.css';
import acquire from "../media/projects/acquire.png";
import chess from "../media/projects/chess.png";
import duke from "../media/projects/duke.png";
import quirkle from "../media/projects/qwirkle.png";
import img from "../media/imagesky.jpg";

const Java = function () {
  return (
    <div>
      <Cover image={img} height="35vh"/>

      <h1 align='center'>Java Projects</h1>
      <h2 align='center'>(2012 to 2014)</h2>

      <div class='greybar'></div>

      <div class='narrow-content'>
        <p>
          Chess, Duke, Qwirkle and Acquire Games implemented in Java. Below are
          screenshots of the GUI's of these games being played. <a href="https://github.com/nicholas-maltbie/Acquire">Acqurie</a>
          is uploaded to my Github account. I completed these random projects to
          make board games as more of a hobby but it introduced me to programming
          and allowed me to solve some quite complicated graphical problems.
        </p>
      </div>

      <div class='greybar'></div>

      <div class='narrow-content'>
        <h3 align='center'>Acquire</h3>
        <img src={ acquire } class='centered-image' />
        <p>
          Acquire is a game made by Avalon Hill, for a full description of the
          project, go to it's <a href="https://github.com/nicholas-maltbie/Acquire">github page</a>.
        </p>
      </div>

      <div class='greybar'></div>

      <div class='narrow-content'>
        <h3 align='center'>Chess</h3>
        <img src={ chess } class='centered-image' />
        <p>
          This is simply a classic game of chess, nothing special.
        </p>
      </div>

      <div class='greybar'></div>

      <div class='narrow-content'>
        <h3 align='center'>Duke</h3>
        <img src={ duke } />
        <p>
          This is a game published by Catalyst Game Labs and is similar to
          chess but has varied pieces and turn options.
        </p>
      </div>

      <div class='greybar'></div>

      <div class='narrow-content'>
        <h3 align='center'>Qwirkle</h3>
        <img src={ quirkle } />
        <p>
          Qwirkle is a simple pattern matching game published by MindWare. I
          used this game as a project in one of my classes in high school and
          helped the teacher instruct the other students by building GUI elements
          while the other students coded sections of the game.
        </p>
      </div>

      <div className='row'/>
    </div>
  )
}

export default Java
