import React, { Component } from 'react';
import logo from '../App/Images/logo.svg';
import './App.css';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Profile from './Screens/Profile/Profile';
import Temp from './Screens/Temp/Temp';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/profile" component={Profile} />
        <Route path="/temp" component={Temp} />
      </Switch>
    );
  }
}

export default App;
