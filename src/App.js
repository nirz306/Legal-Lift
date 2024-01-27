import "./App.css";
import Navbar from "./Navbar";
import Menu from "./components/Menu";


import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Blogs from "./helpers/Blogs";
import Home from "./Home";
 

function App() {
 
  return (

    <Router>
     <div className="App">
        <Navbar/>

        <div className="content">
          <Switch>
            <Route exact path="/Blogs">
                <Blogs />
            </Route>
            <Route exact path="/Let'splay">
              <Menu />
            </Route>
            <Route exact path="/Home">
              <Home />
            </Route>
          </Switch>
        </div>

      
     </div>

    </Router>
    
  );
}

export default App;
