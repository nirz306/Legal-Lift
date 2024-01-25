import "./App.css";
import Navbar from "./Navbar";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Blogs from "./helpers/Blogs";
import Home from "./Home";
// import Create from './Create';
// ['menu', 'playing', 'finished']

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    // {<Router>
    <div className="App">
        <Navbar/>
       <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "Home" && <Home />}
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
     </div>

    // </Router>
  );
}

export default App;