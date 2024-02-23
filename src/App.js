import "./App.css";
import Navbar from "./navbar/Navbar";
import Menu from "./components/legal trivia/Menu";
import Quiz from "./components/legal trivia/Quiz";
import EndScreen from "./components/legal trivia/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
import Home from "./components/Home/Home";
 
import Kidztube from "./helpers/Kidztube";
import NotFound from './NotFound';

// import Home from "./Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import aboutus from "./components/aboutus";
import squests from "./components/S_quests/squests";
import rule from "./components/legal trivia/Rules/rule";
import Login from "./components/Login/Login";

export default function App() {
  return (
    <Router>
       <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
           <Route path="/kidztube" component={Kidztube} />
           <Route path="/play" component={Quiz} />
          <Route path="/aboutus" component={aboutus} />
           <Route path="/squests" component={squests} />
          <Route path="/rule" component={rule} />
          <Route path="/finish" component={EndScreen} />
         <Route path="*">
            <NotFound/>
           </Route> 
         </Switch>
         {/* <Login/> */}
       </div>
       
     </Router>
   
  );
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