import React, { Component } from 'react';
import { Project, Cover } from '../Components';
import { NavLink } from 'react-router-dom';
import '../App.css';
import bg from '../media/IMG_4129-EFFECTS.jpg';
import cchmc from '../media/icons/cchmc.jpg';
import bubble from '../media/icons/bubble.png';
import tea from '../media/icons/Tea_Tile.gif';
import midi from '../media/icons/midi.png';
import ret from '../media/icons/ret.png'
import pcm from '../media/icons/pcm.png'
import mc from '../media/icons/minecraft.jpg';
import java from '../media/icons/java.ico';

const List = function () {
  return (
    <div>
      <Cover image={bg} height="35vh" />

      <h1 className="text-center center-block col-lg-12">
        Projects
      </h1>

      <div className="row col-lg-12">
        <Project title="CCHMC Research" date="(May-Aug 2017)"
          link="/Projects/cchmc" icon={cchmc} iconalt="CCHMC logo">
          I worked with Dr. Porollo over the summer in 2017 on multiple of
          his research projects.
        </Project>
        <Project title="Bubble Shooter JS" date="(April 2017)"
          link="/bubble" icon={bubble} iconalt="Game picture">
          For an independent project to learn how to use javascript (JS), I
          decided to make a bubble shooter game. It is a simple game where a
          player shoots bubbles in a browser JS game.
        </Project>
      </div>
      <div className="row col-lg-12">
        <Project title="Medina" date="(Sep-Dec 2016)"
          link="/Projects/medina" icon={tea} iconalt="Tea tile">
          I attempeted to use neural networks to create an AI to play a board
          game, Medina. This project is implemented using python and default
          graphics libraries.
        </Project>
        <Project title="Midi Imprrovisor" date="(Oct 2016)"
          link="/Projects/midi" icon={midi} iconalt="Midi icon">
          As part of the Hackathon at UC in october 2016, I worked with Vuong
          Khuat, Wyatt French to create a program that would take a MIDI file
          and improvise. A MIDI file is a musical file that saves note sounds.
        </Project>
      </div>
      <div className="row col-lg-12">
        <Project title="RET Project" date="(Summer 2015, 2016)"
          link="/Projects/ret" icon={ret} iconalt="RET icon">
          Research Experience for Teacher (RET) projects done with Dr. Franco at
          the University of Cincinnati (UC). I helped develop coursework and
          perpare local high school teachers to teach cybersecurity the
          following years.
        </Project>
        <Project title="Player Count Message" date="(2014 to 2015)"
          link="/Projects/pcm" icon={pcm} iconalt="PCM icon">
          A software modification for minecraft servers to allow players the
          ability to modify the server's look in the load screen.
        </Project>
      </div>
      <div className="row col-lg-12">
        <Project title="Minecraft Playscape Project" date="(Summer 2014)"
          link="/Projects/playscape" icon={mc} iconalt="Minecraft icon">
          Minecraft Playscape at The University of Cincinnati
          (UC) Arlitt. I designed software to track kids" actions in the Video
          Game Minecraft and later interpret the data as part of a research
          project. This project was later presented at the 2014 IT@UC
          conference.
        </Project>
        <Project title="Java Projects" date="(2012 to 2014)"
          link="/Projects/java" icon={java} iconalt="Java icon">
          Some random projects of games I made using java to
          familiarize myself with the language.
        </Project>
      </div>

      <div className="row"/>
    </div>
  )
}

export default List;
