import React, {Component} from "react";
import headervideo from "../images/header.webm"


class Header extends Component
{
    render()
    {
        return(
            
            <video autoPlay loop muted className="imageHeader">
<source src={headervideo} type="video/webm" /></video>
            
        )
    }
}
export default Header;
