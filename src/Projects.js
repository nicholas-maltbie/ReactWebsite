import React, { Component } from 'react';
import { Project, Cover } from './Components';
import { NavLink } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import List from './projects/List'
import Java from './projects/Java'
import Playscape from './projects/Playscape'
import PlayerCount from './projects/BukkitPlugin'
import './App.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <Route exact path="/Projects/cchmc" />
        <Route exact path="/Projects/bubble" />
        <Route exact path="/Projects/medina" />
        <Route exact path="/Projects/midi" />
        <Route exact path="/Projects/ret" />
        <Route exact path="/Projects/pcm" component = { PlayerCount }/>
        <Route exact path="/Projects/playscape" component = { Playscape } />
        <Route exact path="/Projects/java" component = { Java }/>
        <Route exact path="/Projects" component = { List } />

      </div>
    );
  }
}

export default Projects;
