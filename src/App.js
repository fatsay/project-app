import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';

const App =()=> {
  return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/features" component={Features}/>
        </div>
      </Router>
  );
};

export default App;

