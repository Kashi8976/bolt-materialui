import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import  Dashboard from './Dashboard'
import SignIn from "./UserLogin/SignIn";

function App() {
  return (
      <Router>
          <div>
              <Route exact path="/" component={SignIn} />
              <Route path="/dashboard" component={Dashboard} />
          </div>
      </Router>
  );
}

export default App;
