import  React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import chrisLogo from './chrispurnell.jpg'
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax'


import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';


const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/projects' exact component={Projects} />
      <Redirect to='/' />
    </Switch>
  )
}

export default App;
