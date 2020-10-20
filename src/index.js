// Component Import
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './index.css';

// Pages Import
import Home from './Pages/Home';
import About from './Pages/About';
import PageNotFound from './Pages/PageNotFound';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Router exact path="/"><Home /></Router>
        <Router exact path="/about"><About /></Router>
        <Router path="*"><PageNotFound /></Router>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// TODO: add a component (PageNotFound) for 404 pages in hash routes
// TODO: Load assets before starting the website