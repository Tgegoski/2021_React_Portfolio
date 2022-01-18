import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import "tailwindcss/tailwind.css";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={About} path='/pages/about' />
        <Route component={Projects} path='/pages/projects' />
        <Route component={Home} path='/' exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
