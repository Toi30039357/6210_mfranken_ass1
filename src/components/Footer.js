import React, {Component} from "react";
import footerimage from "../images/scp_foundation_emblem.png";
import {Route, NavLink} from "react-router-dom";



class Footer extends Component
{
    render()
    {
        return(
            <div>
                <Route>
                <div className="footer">
                <NavLink to="/">
                <img className="imageFooter" src={footerimage} alt="Logo" />
                
                        </NavLink>
                        <h6>© 2020 M. FRANKEN. ALL RIGHTS RESERVED. SCP FOUNDATION. </h6>
                        </div>
                </Route>
                
            </div>           
        )
    }
}
export default Footer;