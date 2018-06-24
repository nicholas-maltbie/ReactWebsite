import React, { Component } from 'react';
import { Project, Cover, EmptyPadding } from '../Components';
import { NavLink } from 'react-router-dom';
import '../App.css';
import img from "../media/UC.jpg";
import modinverse from "../media/projects/modinverse.png"
import game from "../media/projects/GameOfCodes.png"
import cipher from "../media/projects/cipherapplet.png"

const ret = function () {
  return (
    <div>
      <Cover image={img} height="100%">

        <EmptyPadding height='20vh'/>

        <div className='row center-block White-box'>
          <h1 align='center'>Research Experience for Teachers Projects</h1>
          <h2 align='center'>(Summer 2015, 2016)</h2>

          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <p>
              I worked with a professor at UC over the 2015 and 2016 summer with
              local high school professors to create a curriculum to teach the
              math and ethics of Cybersecurity to high school students. I created
              applets in Java and python to display concepts and allow students to
              train. In 2015, I focused on learning encryption and cryptography
              while in 2016, I was able to teach cryptography to the high school
              teachers. In addition, I made a project with the Graduate Research
              Assistant on the project and the source code of this project is on
              github: A-Game-Of-Codes. Below are some pictures of some
              applications parts of the project.
            </p>
          </div>
          
          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <h1 align='center'>Modular Inverse Calculator</h1>
            <img src={modinverse} className="Image-content"/>
            <p>
              Applet designed to demonstrate how to find a modular inverse of a
              number. This was used by the teachers to help instruct students
              in modular arithmetic.
            </p>
          </div>
          
          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <h1 align='center'>Cipher Applet</h1>
            <img src={cipher} className="Image-content"/>
            <p>
              The <a href="https://en.wikipedia.org/wiki/Hill_cipher">Hill Cipher</a> is
              a cipher that was used to encrypt information using matrix math. This
              applet was used by instructors to help students learn matrix multiplication
              and introduce the idea of ciphers and encryption. Additionally, the applet
              is meant to provide a challenge and can generate problems for students
              to practice on. The math is rather difficult though so it was not
              expected for students to be able to complete it during the course.
            </p>
          </div>
          
          <div className='col-lg-offset-3 col-lg-6 col-xs-12'>
            <h1 align='center'>Game of Codes Applet</h1>
            <img src={game} className="Image-content"/>
            <p>
              This applet will generate a peer to peer network that allows
              students to play a game and send encoded messages to each other.
              These messages can be stolen and encrypted. The game is moderated
              by a server and the server watches score and helps to moderate
              the game. It turns out that the game was a bit too advanced for
              the students with only a year of coding experience but it still
              provided a good way to introduce python and encryption to new students. 
            </p>
          </div>
        </div>

        <EmptyPadding height='15vh'/>

        <div className='row'/>
      </Cover>

    </div>

  )
}

export default ret
