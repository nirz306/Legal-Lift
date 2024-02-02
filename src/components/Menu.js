import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { useState } from "react";
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";
 
function Menu() {
  // Three state variables are declared using the useState hook: gameState, userName, and score.
  // gameState is initialized with an empty string (""), userName is initialized as an empty string, and score is initialized with the value 0.
  const [gameState, setGameState] = useState("");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
 
  return (

    <div className="Menu">
      <label  style={{color: 'black', fontSize:40}}>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Eg. Ali Baba"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      
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
    
  </GameStateContext.Provider>

      <button id="startquiz"
        onClick={() => {
          setGameState("playing");
        }}
      >Start Quiz
      </button>
      {/* {gameState === "Home" && <Home />} */}
    {gameState === "menu" && <Menu />}
    {gameState === "playing" && <Quiz />}
    {gameState === "finished" && <EndScreen />}
    </div>

    
    
  );
}

export default Menu; 