import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am studying <b>Mathematics on the Data Science Track</b> at{" "}
        <b> UT Austin </b>. I'm also pursuing a certificate
        of Computer Science and a Minor in Business. I'm currently looking
        for interships for Summer 2023.
      </p>
    );
    const two = (
      <p>
        I'm capitivated by <b>machine learning</b>, <b>human-computer interactions</b> and{" "}
        <b>frontend development</b>. However, I love indulging in the humanities, specifically
        visual arts and political theory. In the future, I hope to leverage my passion and knowledge 
        of computer science to solve political problems. In my free time, I love to read and watch Marvel movies.
      </p>
    );
    
    const desc_items = [one, two];

    const tech_stack = [
      "Python",
      "React.js",
      "Java",
      "C++",
      "SQL",
      "HTML & CSS",
      "Javascript ES6+"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);
    var image = require("./assets/me.jpg");

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items}
              {"Here are some languages I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
            </div>
            <div className="about-image">
              <img src={image} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
