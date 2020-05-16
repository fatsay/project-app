import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';

const App =()=> {
  return (
      <Router basename={window.location.pathname || ''}>
          <Route exact path="/" component={Home}/>
          <Route exact path="/features" component={Features}/>
      </Router>
  );
};

export default App;

