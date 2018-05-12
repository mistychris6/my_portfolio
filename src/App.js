import React, { Component } from 'react';
import './App.css';
import me from './Images/me.JPG'



import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './Views/Home'
import Work from './Views/Work'
import Contact from './Views/Contact'
import About from './Views/About'
import Projects from './Views/Projects'
import NotFound from './Views/NotFound'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={me} className="App-logo" alt="logo" />
          <h1 className="App-title">MistySue Christiansen</h1>
          <section className="pageLinks">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/work">Work</a>
            <a href="/contact">Contact</a>
          </section>
        </header>
        <div className="App-intro">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/work" component={Work} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
