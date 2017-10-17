import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'

import Home from './pages/Home'
import Work from './pages/Work'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Router>
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route exact path = "/work" component = {Work} />
              <Route exact path = "/contact" component = {Contact} />
              <Route component = {NotFound} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
