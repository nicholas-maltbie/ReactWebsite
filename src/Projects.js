import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import List from './projects/List'
import Java from './projects/Java'
import Bark from './projects/Bark'
import Playscape from './projects/Playscape'
import PlayerCount from './projects/BukkitPlugin'
import ret from "./projects/Ret"
import Midi from "./projects/Midi"
import Medina from "./projects/Medina"
import BubbleRep from "./projects/Bubblereport"
import Cchmc from "./projects/Cchmc"
import './App.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <Route exact path="/Projects" component = { List } />
        <Route path="/Projects/cchmc" component = { Cchmc }/>
        <Route path="/Projects/bubble" component = { BubbleRep }/>
        <Route path="/Projects/medina" component = { Medina }/>
        <Route path="/Projects/midi" component = { Midi }/>
        <Route path="/Projects/ret" component = { ret }/>
        <Route path="/Projects/pcm" component = { PlayerCount }/>
        <Route path="/Projects/playscape" component = { Playscape } />
        <Route path="/Projects/java" component = { Java }/>
        <Route path="/Projects/bark" component = { Bark }/>
      </div>
    );
  }
}

export default Projects;
