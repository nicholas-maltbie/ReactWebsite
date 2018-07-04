import React from 'react';
import { Project, Cover } from '../Components';
import '../App.css';

const List = function () {
  const rowstyle = {
    padding: '0',
  }
  return (
    <div>
      <Cover image='https://drive.google.com/uc?export=view&id=1DUV0EWayDCufXGdy47oSXXEsGoIed3qi' height="35vh" />

      <h1 className="text-center center-block col-lg-12">
        Projects
      </h1>

      <div className="row">
        <div className="col-lg-12" style={rowstyle}>
          <Project title="CCHMC Research" date="(May-Aug 2017)"
            link="/Projects/cchmc" icon='https://drive.google.com/uc?export=view&id=1h0dbpUR433I__1zCkFmsQGJi7Jknt4cA' iconalt="CCHMC logo">
            I worked with Dr. Porollo over the summer in 2017 on multiple of
            his research projects.
          </Project>
          <Project title="Bubble Shooter JS" date="(April 2017)"
            link="/bubble" icon='https://drive.google.com/uc?export=view&id=1w3nIKmuxL5_tsFhFpFGAzZilD9DWf6lH' iconalt="Game picture">
            For an independent project to learn how to use javascript (JS), I
            decided to make a bubble shooter game. It is a simple game where a
            player shoots bubbles in a browser JS game.
          </Project>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12" style={rowstyle}>
          <Project title="Medina" date="(Sep-Dec 2016)"
            link="/Projects/medina" icon='https://drive.google.com/uc?export=view&id=1yL91fS5bVujdVrM6J8K9zE2NaSy1rxr9' iconalt="Tea tile">
            I attempeted to use neural networks to create an AI to play a board
            game, Medina. This project is implemented using python and default
            graphics libraries.
          </Project>
          <Project title="Midi Imprrovisor" date="(Oct 2016)"
            link="/Projects/midi" icon='https://drive.google.com/uc?export=view&id=1XWFM-PHUZ-Gl9FlwzgFK7vOzJLRIeXwt' iconalt="Midi icon">
            As part of the Hackathon at UC in october 2016, I worked with Vuong
            Khuat, Wyatt French to create a program that would take a MIDI file
            and improvise. A MIDI file is a musical file that saves note sounds.
          </Project>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12" style={rowstyle}>
          <Project title="RET Project" date="(Summer 2015, 2016)"
            link="/Projects/ret" icon='https://drive.google.com/uc?export=view&id=1VqG4q0sLnZNNc2bQ3dkOgGK50RUub1Es' iconalt="RET icon">
            Research Experience for Teacher (RET) projects done with Dr. Franco at
            the University of Cincinnati (UC). I helped develop coursework and
            perpare local high school teachers to teach cybersecurity the
            following years.
          </Project>
          <Project title="Player Count Message" date="(2014 to 2015)"
            link="/Projects/pcm" icon='https://drive.google.com/uc?export=view&id=16hhPQ0OEyQo6nrPleh32kwqKZwcvJpV-' iconalt="PCM icon">
            A software modification for minecraft servers to allow players the
            ability to modify the server's look in the load screen.
          </Project>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12" style={rowstyle}>
          <Project title="Minecraft Playscape Project" date="(Summer 2014)"
            link="/Projects/playscape" icon='https://drive.google.com/uc?export=view&id=1WMjrbNqC_abFGoWKEJiWdTiqJ8wjcv_r' iconalt="Minecraft icon">
            Minecraft Playscape at The University of Cincinnati
            (UC) Arlitt. I designed software to track kids" actions in the Video
            Game Minecraft and later interpret the data as part of a research
            project. This project was later presented at the 2014 IT@UC
            conference.
          </Project>
          <Project title="Java Projects" date="(2012 to 2014)"
            link="/Projects/java" icon='https://drive.google.com/uc?export=view&id=112Tt5rMZAi9lPt3H1ZhKXkov_V-SxOdL' iconalt="Java icon">
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
