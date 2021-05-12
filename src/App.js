import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Welcome from "./components/welcome.component";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Home from "./components/home.component";
import ItemDetails from './components/item_details.component';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>AppVision</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/search"}>Buscar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/perfil"}>Perfil</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div> */}
        {/* <div> */}
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/home" component={Home} />
            <Route path="/item" component={ItemDetails} />
          </Switch>
        {/* </div> */}
      {/* </div> */}

      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-bottom">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/search"}>Buscar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/perfil"}>Perfil</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div></Router>
  );
}

export default App;