import React, { Component } from 'react';
import { Project, Cover } from './Components';
import { NavLink } from 'react-router-dom';
import me from './media/me2.jpg';
import bg from './media/IMG_4129-EFFECTS.jpg';
import cchmc from './media/icons/cchmc.jpg';
import bubble from './media/icons/bubble.png';
import tea from './media/icons/Tea_Tile.gif';
import './App.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <Cover image={bg} height="40vh" />

        <h1 className="text-center center-block col-lg-12">
          Projects
        </h1>

        <Project title="CCHMC Research" date="(May-Aug 2017)"
          link="/Projects/cchmc/" icon={cchmc} iconalt="CCHMC logo">
          I worked with Dr. Porollo over the summer in 2017 on multiple of
          his research projects.
        </Project>
        <Project title="Bubble Shooter JS" date="(April 2017)"
          link="/Projects/bubble" icon={bubble} iconalt="Game picture">
          For an independent project to learn how to use javascript (JS), I
          decided to make a bubble shooter game. It is a simple game where a
          player shoots bubbles in a browser JS game.
        </Project>
        <Project title="Medina" date="(Sep-Dec 2016)"
          link="/Projects/medina" icon={tea} iconalt="Tea tile">
          I attempeted to use neural networks to create an AI to play a board
          game, Medina. This project is implemented using python and default
          graphics libraries.
        </Project>

        <div className="row"/>
      </div>
    );
  }
}

export default Projects;
