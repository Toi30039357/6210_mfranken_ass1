import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import style from './style';
import SpeechSynthesis from './speechSynthesis';
import Button from './button';

export default class Speech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: this.props.styles !== undefined ? this.props.styles : style
    };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
    this.stop = this.stop.bind(this);
    this.onend = this.onend.bind(this);
    this.onerror = this.onerror.bind(this);
  }

  componentDidMount() {
    this.setButtonState('all', 'none', 'none', 'none');
  }

  setButtonState(play, stop, pause, resume) {
    var newState = update(this.state, {
      styles: {
        play: { button: { pointerEvents: { $set: play } } },
        stop: { button: { pointerEvents: { $set: stop } } },
        pause: { button: { pointerEvents: { $set: pause } } },
        resume: { button: { pointerEvents: { $set: resume } } }
      }
    });

    this.setState(newState);
  }

  setSpeechSynthesis() {
    this.speechSynthesis = new SpeechSynthesis(this.props);
    this.speechSynthesis.onend(this.onend);
    this.speechSynthesis.onerror(this.onerror);
  }

  play() {
    this.setSpeechSynthesis();
    this.speechSynthesis.speak();
    this.setButtonState('none', 'all', 'all', 'none');
  }

  pause() {
    this.speechSynthesis.pause();
    this.setButtonState('none', 'all', 'none', 'all');
  }

  resume() {
    this.speechSynthesis.resume();
    this.setButtonState('none', 'all', 'all', 'none');
  }

  stop() {
    this.speechSynthesis.cancel();
    this.setButtonState('all', 'none', 'none', 'none');
  }

  onend() {
    this.stop();
  }

  onerror() {
    this.stop();
  }

  render() {
    if (this.props.disabled || !SpeechSynthesis.supported()) {
      return (
        <span className="rs-container" style={this.state.styles.container}>
          <span className="rs-text" style={this.state.styles.text}>
            {this.props.text}
          </span>
        </span>
      );
    }

    var play;
    var stop;
    var pause;
    var resume;

    if (this.props.textAsButton) {
      play = (
        <Button
          className="rs-play"
          styles={this.state.styles.play}
          onClick={this.play}
        >
          <span className="rs-text" style={this.state.styles.text}>
            {this.props.displayText || this.props.text}
          </span>
        </Button>
      );
    } else {
      play = (
        <Button
          className="rs-play"
          styles={this.state.styles.play}
          onClick={this.play}
        >
        </Button>
      );
    }

    if (this.props.stop) {
      stop = (
        <Button
          className="rs-stop"
          styles={this.state.styles.stop}
          onClick={this.stop}
        >

        </Button>
      );
    }

    if (this.props.pause) {
      pause = (
        <Button>
        </Button>
      );
    }

    if (this.props.resume) {
      resume = (
        <Button>
        </Button>
      );
    }

    return (
        <div>
      <span style={this.state.styles.container}>
        {play} {stop} {pause} {resume}
      </span></div>
    );
  }
}

Speech.propTypes = {
  styles: PropTypes.object,
  text: PropTypes.string.isRequired,
  pitch: PropTypes.string,
  rate: PropTypes.string,
  volume: PropTypes.string,
  lang: PropTypes.string,
  voiceURI: PropTypes.string,
  voice: PropTypes.string,
  textAsButton: PropTypes.bool,
  displayText: PropTypes.string,
  disabled: PropTypes.bool,
  stop: PropTypes.bool,
  pause: PropTypes.bool,
  resume: PropTypes.bool
};
