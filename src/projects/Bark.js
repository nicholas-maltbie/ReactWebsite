import React from 'react';
import { Cover, EmptyPadding } from '../Components';
import '../App.css';

const Bark = function () {
  return (
    <div>
      <Cover image={require("../media/backgrounds/bark.jpg")} height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <h1 align='center'>Bark Bark</h1>
          <h2 align='center'>(May-Aug 2018)</h2>

          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <p>
              A location based social media app developed for software
              engineering class summer 2018. This project is hosted on the
              domain <a href="https://bark.fyi">https://bark.fyi</a>
            </p>
            <p>
              Bark Bark is a web application intended to be a local event finder
              where you can see what events people are barking at and bark at 
              local events yourself. This social media app helps locate trending
              events, restaurants and other entertainment while providing
              additional information with embedded links (e.g. Google Maps,
              Snapchat).
            </p>
            <p>
            <img src={require("../media/projects/bark-1.png")} className='Image-content' alt="Acquire Game"/>
            </p>
            <p>
              A link to the <a href="https://docs.google.com/presentation/d/1alDmvK6u2IvxGtTcBxFbrq5mE7ZqOtKxIFAXz4VXVgM/edit?usp=sharing">final presentation</a> describing the project.
              The project is hosted on a <a href="https://github.com/nicholas-maltbie/BarkBark">github page</a> and is open source. 
              The live version of the project can be found at <a href="https://bark.fyi">https://bark.fyi</a>
            </p>
            <p>
              This project was developed over the course of a few months with 
              four other classmates and uses Google Maps, React, Google Firebase
              as well as a few other technologies. 
            </p>
          </div>
        </div>
          
        <EmptyPadding height='15vh'/>
      </Cover>
    </div>
  )
}

export default Bark
