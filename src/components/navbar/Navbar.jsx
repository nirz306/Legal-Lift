//arrow functions
import Menu from "../legal trivia/Menu";
import { Link } from "react-router-dom";
import "./navbar.css"
import {LOGO} from "../../utilites/constants";

const Navbar = () => {
    return(
         <>
        <div className="navbar">
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/kidztube">KIDZTUBE</Link>
                <Link to="/rule">LEGAL TRIVIA</Link>
                <Link to="/squests">SCENARIO QUESTS</Link>
                {/* <Link classname="login" to="/login">LOGIN</Link> */}
            </div>
        </div>
        <div className="logo">
                {/* <img src= {LOGO} alt="hi" /> */}
            </div>
         </>
        
       
        
       
    );
}

export default Navbar;