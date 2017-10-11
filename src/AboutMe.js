import React, { Component } from 'react';
import { HorizLinks, Cover } from './Components';
import { NavLink } from 'react-router-dom';
import me from './media/me2.jpg';
import bg from './media/aboutme.jpg';
import bg2 from './media/IMG_3840.JPG';
import bg3 from './media/IMG_3931.JPG';
import bg4 from './media/fountain.jpg';
import './App.css';

class AboutMe extends Component {
  render() {
    const boxstyle = {
      minHeight: '35vh',
      paddingTop: '3vh',
      paddingBottom: '3vh',
    }
    return (
      <div>
        <Cover image={bg} height="40vh">
          <div className="col-lg-3 col-md-offset-1 col-md-4 col-sm-4 col-xs-12">
            <img className="center-block Profile-image" src={me}/>
          </div>
        </Cover>

        <div className="row">
          <div className="intro center-block col-lg-6 col-md-6 col-sm-7 col-xs-12">
            <h1 className="text-center">
              Nick Maltbie
            </h1>
            <p>
              I am a determined student and have taken on many individual
              projects. One example is this website, hosted by github pages and
              I coded the website from scratch. I am currently studying
              Computer Science at UC and expect to graduate in 2021.
            </p>
            <p>
              To view my resume, click <a href='https://drive.google.com/file/d/0B0gCZqueOMVIV1BMUnRtQXJ1RTQ/view'>here</a>.
            </p>
          </div>
        </div>

        <Cover image={bg2} height="30vh"/>

        <div className="row">
          <div style={boxstyle} className="col-lg-12">
            <h1 className="text-center col-lg-12">
              Introduction
            </h1>
            <p className="col-lg-4 text-left col-lg-offset-2 col-xs-12">
              While volunteering at Hughes High School, when I walked into class one
              day, the instructor I assist and a student I was working with both looked
              up in disbelief; I did not know this at the time, but the student had
              just asked the teacher, "How does Nick go about solving these problems",
              then I appeared in the room. I am dedicated to my work and have participated
              in many projects over the last few years. These activities have ranged from
              independent work, to research projects, to volunteering at local high
              schools. I aspire to better myself and those around me through the use
              of technology and education. My strengths allow me to focus and work
              independently. However, I realize the benefits of group work and have
              been trying to adapt and improve my ability to work in a group. To
              accomplish this, I have been attempting to document and collaborate
              more while working.
            </p>
            <p className="text-left col-lg-4 col-xs-12">
              My strengths also allow me to better reflect on work I have done. Now
              that I have started using Github to document and track my projects, I
              can much more easily review previous projects and see the benefits of my
              work. My passion to help others and learn about computer science have
              become more and more integrated in the past years. I will in the future
              try to explore this opportunity and am looking forward to helping the
              students at Hughes High School. Many of my other projects have also been
              geared toward helping other people and improving education. It is not my
              goal in life to be an educator, but I have a passion for learning and
              teaching, just as I have a passion for computer science and hope to use
              college, cooperative education, and international experiences as an
              opportunity to explore these interests.
            </p>
          </div>
        </div>

        <Cover image={bg3} height="30vh"/>

        <div className="row">
          <div style={boxstyle} className="col-lg-12">
            <h1 className="text-center col-lg-12">
              Interests
            </h1>
            <p className="text-left col-lg-6 col-lg-offset-3 col-xs-12">
              My interests include piano, baking, programming and education.
              Many of the project I work on reflect my interests and I have made an
              entire page on this website dedicated to this, the <NavLink to="/Projects">projects</NavLink> page.
              This website shows my interests and exemplifies what I have
              been able to do over the past few years.
            </p>
          </div>
        </div>

        <Cover image={bg4} height="30vh"/>

        <div className="row">
          <div style={boxstyle} className="col-lg-12">
            <h1 className="text-center col-lg-12">
              Personality
            </h1>
            <div className="text-center col-xs-12 col-lg-3 col-lg-offset-2">
              <span title="My Myers Briggs Personality type"><a href="https://www.16personalities.com/intp-personality">
              <img src="https://s-media-cache-ak0.pinimg.com/originals/71/26/53/712653dc0993813a427914a4e84c188e.jpg" className='Image-content'/>
              </a></span>
            </div>
            <p className="text-left col-xs-12 col-lg-5 col-lg-offset-1">
              Click <a href="https://www.16personalities.com/intp-personality">here</a> or
              on the kitten for more info about my personality type. I am an INTP
              personality type according to the Myers-Briggs Type Indicator&reg. I
              find this to be fairly accurate and see myself as an introverted person
              who focuses on my creativity and solving problems. Such as designing
              this website or any of my other projects on my <a href="https://github.com/nicholas-maltbie?tab=repositories">github page</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
