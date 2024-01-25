//arrow functions
import Menu from "./components/Menu";
const Navbar = () => {
    return(
        <nav className="navbar">
            <h1> Hey Welcome </h1>
            <div className="links">
            {/* ithe pan dynamically value apan change karu shakto */}
                <a href="/Home" >Home </a> 
                <a href="/Blogs">Blogs</a>
                <a href="">About Us</a>
                <a href="/Quiz">Let's Play</a>
            </div>
        </nav>
    );
}

export default Navbar;