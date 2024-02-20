//arrow functions
import Menu from "../components/legal trivia/Menu";
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    return(
        <div className="title">
            Legal Hub
        <div className="navbar">
            <div className="links">
            <Link to="/">HOME</Link>
            <Link to="/kidztube">KIDZTUBE</Link>
            <Link to="/rule">LEGAL TRIVIA</Link>
            <Link to="/aboutus">ABOUT US</Link>
            <Link to="/squests">SCENARIO QUESTS</Link>
            </div>
        </div>
        </div>
       
    );
}

export default Navbar;