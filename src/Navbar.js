
import './Navbar.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer"
import './index.css';
import Pg_select from "./components/Pg_select";
import Pg_scp002 from "./components/Pg_scp002";
import Pg_scp003 from "./components/Pg_scp003";
import Pg_scp004 from "./components/Pg_scp004";
import Pg_scp005 from "./components/Pg_scp005";
import Pg_scp006 from "./components/Pg_scp006";

import Navbarmenu from './components/menu/Navbarmenu';

function Navbar() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Navbarmenu />
      <div className="siteContainer">
        <Switch>
          
        <Route exact path="/" component={Pg_select}/>
        <Route exact path="/." component={Pg_select}/>
        <Route exact path="/pg_scp002" component={Pg_scp002}/>
        <Route exact path="/pg_scp003" component={Pg_scp003}/>
        <Route exact path="/pg_scp004" component={Pg_scp004}/>
        <Route exact path="/pg_scp005" component={Pg_scp005}/>
        <Route exact path="/pg_scp006" component={Pg_scp006}/>
          
        </Switch>
      </div>
      <Footer />
    </Router>
     
    </div>
  );
}

export default Navbar;
