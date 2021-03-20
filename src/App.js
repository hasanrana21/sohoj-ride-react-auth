import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <Header></Header>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <PrivateRoute path="/destinate">
                <Destinate/>
              </PrivateRoute>
              <Route path="/login">
                <Login/>
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
