import React from 'react';
import { Cover, EmptyPadding } from '../Components';
import '../App.css';

const Java = function () {
  return (
    <div>
      <Cover image={require("../media/backgrounds/java.jpg")} height="100%">

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
          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 align='center'>Acquire</h2>
            <img src={require("../media/projects/java-1.png")} className='Image-content' alt="Acquire Game"/>
            <p>
              Acquire is a game made by Avalon Hill, for a full description of the
              project, go to its <a href="https://github.com/nicholas-maltbie/Acquire">github page</a>.
            </p>
          </div>
          
          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 align='center'>Chess</h2>
            <img src={require("../media/projects/java-2.png")} className='Image-content' alt="Chess Game"/>
            <p>
              This is simply a classic game of chess, nothing special.
            </p>
          </div>
          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <h2 align='center'>Duke</h2>
            <img src={require("../media/projects/java-3.png")} className='Image-content' alt="Duke Game"/>
            <p>
              This is a game published by Catalyst Game Labs and is similar to
              chess but has varied pieces and turn options.
            </p>
            <h2 align='center'>Qwirkle</h2>
            <img src={require("../media/projects/java-4.png")} className='Image-content' alt="Quirkle Game"/>
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
