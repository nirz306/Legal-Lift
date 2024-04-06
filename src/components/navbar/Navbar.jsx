//arrow functions
 
import { Link } from "react-router-dom";
import "./navbar.css"
 

const Navbar = () => {
    return(
         <>
        <div className="navbar">
                <div><Link className="link" to="/blogs">Blogs</Link></div>
                <div> <Link className="link" to="/aboutus">About us</Link></div>
                <div><Link className="link" to="/">Home</Link></div>     
        </div>
        
        
         </>
        
       
        
       
    );
}

export default Navbar;