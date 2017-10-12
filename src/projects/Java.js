import React, { Component } from 'react';
import { Project, Cover, EmptyPadding } from '../Components';
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
      <Cover image={img} height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <h1 align='center'>Java Projects</h1>
          <h2 align='center'>(2012 to 2014)</h2>

          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <p>
              Chess, Duke, Qwirkle and Acquire Games implemented in Java. Below are
              screenshots of the GUIs of these games being played. <a href="https://github.com/nicholas-maltbie/Acquire">Acqurie </a>
              is uploaded to my Github account. I completed these random projects to
              make board games as more of a hobby but it introduced me to programming
              and allowed me to solve some quite complicated graphical problems.
            </p>
          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row center-block White-box'>
          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 align='center'>Acquire</h2>
            <img src={ acquire } className='Image-content' />
            <p>
              Acquire is a game made by Avalon Hill, for a full description of the
              project, go to its <a href="https://github.com/nicholas-maltbie/Acquire">github page</a>.
            </p>
          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row center-block White-box'>
          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 align='center'>Chess</h2>
            <img src={ chess } className='Image-content' />
            <p>
              This is simply a classic game of chess, nothing special.
            </p>
          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row center-block White-box'>
          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 align='center'>Duke</h2>
            <img src={ duke } className='Image-content' />
            <p>
              This is a game published by Catalyst Game Labs and is similar to
              chess but has varied pieces and turn options.
            </p>
          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row center-block White-box'>
          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 align='center'>Qwirkle</h2>
            <img src={ quirkle } className='Image-content' />
            <p>
              Qwirkle is a simple pattern matching game published by MindWare. I
              used this game as a project in one of my classes in high school and
              helped the teacher instruct the other students by building GUI elements
              while the other students coded sections of the game.
            </p>
          </div>
        </div>

        <EmptyPadding height='15vh'/>
      </Cover>
    </div>
  )
}

export default Java
