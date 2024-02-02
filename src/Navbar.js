//arrow functions
import Menu from "./components/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1> Hey Welcome </h1>
            <div className="links">
            <Link to="/">Home</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/play">Let's Play</Link>
            </div>
        </nav>
    );
}

export default Navbar;