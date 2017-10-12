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
        <Route exact path="/Projects" component = { List } />
        <Route path="/Projects/cchmc" />
        <Route path="/Projects/bubble" />
        <Route path="/Projects/medina" />
        <Route path="/Projects/midi" />
        <Route path="/Projects/ret" />
        <Route path="/Projects/pcm" component = { PlayerCount }/>
        <Route path="/Projects/playscape" component = { Playscape } />
        <Route path="/Projects/java" component = { Java }/>
      </div>
    );
  }
}

export default Projects;
