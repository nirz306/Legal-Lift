import "./App.css";
import Navbar from "./navbar/Navbar";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
// import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Blogs from "./helpers/Blogs";
import NotFound from './NotFound';

// import Home from "./Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import aboutus from "./components/aboutus";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/play" component={Quiz} />
          <Route path="/aboutus" component={aboutus} />
          <Route path="*">
              <NotFound/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home page</h1>;
}
 

// function App() 
// {
//   const [gameState, setGameState] = useState("menu");
//   const [userName, setUserName] = useState("");
//   const [score, setScore] = useState(0);

//   return (
//     // <Router>
//     <div className="App">
//         <Navbar/>
//        <GameStateContext.Provider
//         value={{
//           gameState,
//           setGameState,
//           userName,
//           setUserName,
//           score,
//           setScore,
//         }}
//       >
//         {gameState === "Home" && <Home />}
//         {gameState === "menu" && <Menu />}
//         {gameState === "playing" && <Quiz />}
//         {gameState === "finished" && <EndScreen />}
//       </GameStateContext.Provider>
//      </div>

//     //  </Router>
//   );
// }

// export default App;