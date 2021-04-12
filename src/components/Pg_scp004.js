import React, {Component} from "react";
import scpData from "../json/scpobjects.json"
import scp_image from "../images/scp_images/scp_004_keys.png"
import scp_image2 from "../images/scp_images/scp_004_door.jpg"
import Speech from "../speech/speech.js"
import breakervid from "../images/breaker.webm";

const breakercode = <div><div><video autoPlay loop muted className="videoBreak">
<source src={breakervid} type="video/webm" />
</video></div><br></br></div>
;

const scpSubject = 2;
class Pg_scp004 extends Component
{
    render()
    {
        return(
            <div>
                <br></br><br></br>
                <h1>Item #: {scpData[scpSubject].item}</h1>
                <h2>Object Class: {scpData[scpSubject].class}</h2>

                {breakercode}  
                <img className="imageContain" src={scp_image} alt={scpData[scpSubject].item}></img>
                {breakercode}

                <h3>Special Containment Procedures:</h3>
                <br></br>
                <Speech text={scpData[scpSubject].containment}></Speech>
                <p className="display-linebreak">{scpData[scpSubject].containment}</p>
                {breakercode}
                <h3>Description:</h3>
                <p className="display-linebreak">{scpData[scpSubject].description}</p>
                <img className="imageContain" src={scp_image2} alt={scpData[scpSubject].item}></img>
                {breakercode}

                <h3>Reference:</h3>
                <p className="display-linebreak">{scpData[scpSubject].extra}</p>
                <br></br>                     
            </div>
        );
    }
}

export default Pg_scp004;
