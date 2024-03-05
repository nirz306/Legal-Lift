import "./App.css";
import Navbar from "./navbar/Navbar";
import Menu from "./components/legal trivia/Menu";
import Quiz from "./components/legal trivia/Quiz";
import EndScreen from "./components/legal trivia/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
import Home from "./components/Home/Home";
 
import Kidztube from "./components/Kidztube/Kidztube";
import NotFound from './NotFound';

// import Home from "./Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import aboutus from "./components/aboutus";
import squests from "./components/S_quests/squests";
import rule from "./components/legal trivia/Rules/rule";
import SignupForm from "./components/signup/signup";
import LoginForm from "./components/login/login";
 import Road_acc from "./components/S_quests/Road_acc"; 
import Sexualharras from "./components/S_quests/Sexualharras";
import Rasicm from "./components/Kidztube/Rasicm";
import Consumer from "./components/Kidztube/Consumer";

export default function App() {
  return (
    <Router>
       <div className="App">
        <Navbar />
        <Switch>
  <Route exact path="/" component={Home} />
  {/* <Route path="/login" component={LoginForm} /> */}
  <Route path="/kidztube" component={Kidztube} />
  <Route path="/play" component={Quiz} />
  {/* ... other routes ... */}
  <Route path="/finish" component={EndScreen} />
  <Route path="/Road Accident" component={Road_acc} />
  <Route path="/Sexual harresment" component={Sexualharras} />
  <Route path="/rasicm" component={Rasicm} />
  <Route path="/consumer_rights" component={Consumer} />
  <Route path="/home" component={Home} />
  <Route path="*">
    <NotFound />
  </Route>
</Switch>

       </div>
       
     </Router>
   
  );
}


 
 