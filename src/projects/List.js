import React from 'react';
import { Project, Cover } from '../Components';
import '../App.css';

const List = function () {
  const rowstyle = {
    padding: '0',
  }
  return (
    <div>
      <Cover image={require("../media/backgrounds/projects.jpg")} height="35vh" />

      <h1 className="text-center center-block col-lg-12">
        Projects
      </h1>
      
      <div className="row">
        <div className="col-lg-12" style={rowstyle}>
          <Project title="Bark Bark" date="(May-Aug 2018)"
            link="/Projects/bark" icon={require("../media/icons/bark.jpg")}  iconalt="Bark Bark logo">
            A location based social media app developed for software
            engineering class during summer 2018. This project is hosted on the
            domain <a href="https://bark.fyi">https://bark.fyi</a>
          </Project>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12" style={rowstyle}>
          <Project title="CCHMC Research" date="(May-Aug 2017)"
            link="/Projects/cchmc" icon={require("../media/icons/cchmc.jpg")}  iconalt="CCHMC logo">
            I worked with Dr. Porollo over the summer in 2017 on multiple research projects.
          </Project>
          <Project title="Bubble Shooter JS" date="(April 2017)"
            link="/bubble" icon={require("../media/icons/bubble.png")} iconalt="Game picture">
            For an independent project to learn how to use javascript (JS), I
            decided to make a bubble shooter game. It is a simple game where a
            player shoots bubbles in a browser JS game.
          </Project>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12" style={rowstyle}>
          <Project title="Medina" date="(Sep-Dec 2016)"
            link="/Projects/medina" icon={require("../media/icons/Tea_Tile.gif")} iconalt="Tea tile">
            I attempeted to use neural networks to create an AI to play a board
            game, Medina. This project is implemented using python and default
            graphics libraries.
          </Project>
          <Project title="Midi Improvisor" date="(Oct 2016)"
            link="/Projects/midi" icon={require("../media/icons/midi.png")} iconalt="Midi icon">
            As part of the Hackathon at UC in october 2016, I worked with Vuong
            Khuat, Wyatt French to create a program that would take a MIDI file
            and improvise. A MIDI file is a musical file that saves note sounds.
          </Project>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12" style={rowstyle}>
          <Project title="RET Project" date="(Summer 2015, 2016)"
            link="/Projects/ret" icon={require("../media/icons/ret.png")} iconalt="RET icon">
            Research Experience for Teacher (RET) projects done with Dr. Franco at
            the University of Cincinnati (UC). I helped develop coursework and
            perpare local high school teachers to teach cybersecurity the
            following years.
          </Project>
          <Project title="Player Count Message" date="(2014 to 2015)"
            link="/Projects/pcm" icon={require("../media/icons/pcm.png")} iconalt="PCM icon">
            A software modification for minecraft servers to allow players the
            ability to modify the server's look in the load screen.
          </Project>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12" style={rowstyle}>
          <Project title="Minecraft Playscape Project" date="(Summer 2014)"
            link="/Projects/playscape" icon={require("../media/icons/minecraft.jpg")} iconalt="Minecraft icon">
            Minecraft Playscape at The University of Cincinnati
            (UC) Arlitt. I designed software to track kids" actions in the Video
            Game Minecraft and later interpret the data as part of a research
            project. This project was later presented at the 2014 IT@UC
            conference.
          </Project>
          <Project title="Java Projects" date="(2012 to 2014)"
            link="/Projects/java" icon={require("../media/icons/java.ico")} iconalt="Java icon">
            Some random projects of games I made using java to
            familiarize myself with the language.
          </Project>
        </div>
      </div>

      <div className="row"/>
    </div>
  )
}

export default List;
