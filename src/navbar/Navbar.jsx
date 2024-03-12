
import { Link } from "react-router-dom";
import "./navbar.css"
import pink from "../components/assets/pink_header.png"

const Navbar = () => {
    return(
         <>
         <div className="waves">
             <img src={pink} alt="waves background" />
             <div className="navbar-links">
                 <Link to="/">HOME</Link>
                 <Link to="/kidztube">KIDZTUBE</Link>
                 <Link to="/rule">LEGAL TRIVIA</Link>
                 {/* <Link to="/aboutus">ABOUT US</Link> */}
                 <Link to="/squests">SCENARIO QUESTS</Link>
                 {/* <Link classname="login" to="/login">LOGIN</Link> */}
             </div>
         </div>
         <div className="logo">
             {/* <img src={LOGO} alt="logo" /> */}
         </div>
         </>
    );
}

export default Navbar;
