import React, {Component} from "react";
import {Route, NavLink} from "react-router-dom";
import index_scp002 from "../images/index_menu/index_scp002.png"
import index_scp003 from "../images/index_menu/index_scp003.png"
import index_scp004 from "../images/index_menu/index_scp004.png"
import index_scp005 from "../images/index_menu/index_scp005.png"
import index_scp006 from "../images/index_menu/index_scp006.png"
import breakervid from "../images/breaker.webm";


const breakercode = <video autoPlay loop muted className="videoBreak">
<source src={breakervid} type="video/webm" />
</video>
;

class Pg_select extends Component
{
    render()
    {
        return(
            <div>
                <Route>
                <br></br>
                <br></br>
                <h1>Welcome to the SCP Foundation</h1>
                {breakercode}
                <br></br>
                <br></br>

                    <div className="imageMenuContain">
                    <NavLink to="/pg_scp002">
                        <img src={index_scp002} className="hover-index cursor" alt="scp002"></img>
                        </NavLink>
                    </div>

                    <div className="imageMenuContain">
                    <NavLink to="/pg_scp003">
                        <img src={index_scp003} className="hover-index cursor" alt="scp003"></img>
                        </NavLink>
                    </div>

                    <div className="imageMenuContain">
                    <NavLink to="/pg_scp004">
                        <img src={index_scp004} className="hover-index cursor" alt="scp002"></img>
                        </NavLink>
                    </div>

                    <div className="imageMenuContain">
                    <NavLink to="/pg_scp005">
                        <img src={index_scp005} className="hover-index cursor" alt="scp002"></img>
                        </NavLink>
                    </div>

                    <div className="imageMenuContain">
                    <NavLink to="/pg_scp006">
                        <img src={index_scp006} className="hover-index cursor" alt="scp002"></img>
                        </NavLink>
                    </div>
                    <br></br>
                    <br></br>
                </Route>     
                       
            </div>
            
        );
    }
}

export default Pg_select;