import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import HariniModel from "./HariniModel";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <div id="harini-model">
          <HariniModel></HariniModel>
        </div>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, it's "}
            <span className="intro-name">{"harini"}</span>
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I love to create.</div>
          <div className="intro-desc">
            I'm a junior at The University of Texas at Austin. I have profound 
            interest in machine learning, frontend development, computational 
            politics, and pretty much anything else you can think of :)
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
