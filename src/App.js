import "./App.css";
import Navbar from "./navbar/Navbar";
import Menu from "./components/legal trivia/Menu";
import Quiz from "./components/legal trivia/Quiz";
import EndScreen from "./components/legal trivia/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
import Home from "./components/Home/Home";

import Kidztube from "./components/Kidztube/Kidztube";
import NotFound from "./NotFound";

// import Home from "./Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import aboutus from "./components/aboutus";
import squests from "./components/S_quests/squests";
import rule from "./components/legal trivia/Rules/rule";
import Login from "./components/Login/Login";
import Road_acc from "./components/S_quests/Road_acc";
import Sexualharras from "./components/S_quests/Sexualharras";
import Rasicm from "./components/Kidztube/Rasicm";
import Consumer from "./components/Kidztube/Consumer";
import Lostphone from "./components/S_quests/Lostphone/Lostphone";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/kidztube" component={Kidztube} />
          <Route path="/play" component={Quiz} />
          {/* <Route path="/aboutus" component={aboutus} /> */}
          <Route path="/squests" component={squests} />
          <Route path="/rule" component={rule} />
          <Route path="/finish" component={EndScreen} />
          <Route path="/Road Accident" component={Road_acc} />
          <Route path="/Sexual harresment" component={Sexualharras} />
          <Route path="/login" component={Login} />
          <Route path="/rasicm" component={Rasicm} />
          <Route path="/consumer_rights" component={Consumer} />
          <Route path="/Lost phone" component={Lostphone} />

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>

   
    </Router>
  );
}
