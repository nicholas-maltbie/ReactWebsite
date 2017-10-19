import React, { Component } from 'react';
import { Project, Cover } from './Components';
import { NavLink } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import List from './projects/List'
import Java from './projects/Java'
import Playscape from './projects/Playscape'
import PlayerCount from './projects/BukkitPlugin'
import ret from "./projects/Ret"
import Midi from "./projects/Midi"
import Medina from "./projects/Medina"
import BubbleRep from "./projects/Bubblereport"
import './App.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <Route exact path="/Projects" component = { List } />
        <Route path="/Projects/cchmc" />
        <Route path="/Projects/bubble" component = { BubbleRep }/>
        <Route path="/Projects/medina" component = { Medina }/>
        <Route path="/Projects/midi" component = { Midi }/>
        <Route path="/Projects/ret" component = { ret }/>
        <Route path="/Projects/pcm" component = { PlayerCount }/>
        <Route path="/Projects/playscape" component = { Playscape } />
        <Route path="/Projects/java" component = { Java }/>
      </div>
    );
  }
}

export default Projects;
