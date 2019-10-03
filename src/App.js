import  React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import chrisLogo from './chrispurnell.jpg'
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax'


import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';
import ChrisDoc from './containers/ChrisDoc';


const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/projects' exact component={Projects} />
      <Route path='/resume' exact component={ChrisDoc} />
      <Redirect to='/' />
    </Switch>
  )
}

export default App;
