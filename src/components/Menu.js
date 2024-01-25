import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );
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
      <button id="startquiz"
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;