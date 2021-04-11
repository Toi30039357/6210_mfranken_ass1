import React, { Component } from 'react';
import '../index.css';
import play from "../images/play_button_small.png"

export default class Button extends Component {

  render() {

    return (
        <div>
            <img className="smallButton" src={play} {...this.props} alt="Play"></img>
        </div>
    );
  }
}
