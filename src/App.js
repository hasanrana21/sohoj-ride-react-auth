import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Destinate from './Components/Destinate/Destinate';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/destinate">
              <Destinate/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
