import React, { Component } from 'react';
import { Project, Cover, EmptyPadding } from '../Components';
import { NavLink } from 'react-router-dom';
import '../App.css';
import img from "../media/IMG_0627.PNG";
import poster from "../media/projects/playscape.png"

const Playscape = function () {
  return (
    <div>
      <Cover image={img} height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <h1 align='center'>Minecraft Playscape Project</h1>
          <h2 align='center'>(Summer 2014)</h2>

          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <p>
              Minecraft Playscape at UC Artlitt. I designed software to track
              kids' actions in the Video Game Minecraft and later interpret the
              data as part of a research project. Below is the poster presented
              at the IT@UC 2014 conference.
            </p>
          <span title = "click for full pdf">
            <a href='https://drive.google.com/file/d/0B0gCZqueOMVIWnMzUmtxQXB2dGs'><img src={poster} className='Image-content'/></a>
          </span>
          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row'/>
      </Cover>

    </div>

  )
}

export default Playscape
