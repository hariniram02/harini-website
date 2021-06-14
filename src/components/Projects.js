import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";

class Projects extends React.Component {
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
    const projects = {
      "Global Consumption Data Visualization": {
        desc:
          "A program that depicts ​histograms and bar graphs​ of the energy consumption (electricity and natural gas), industrial usage consumption, and residential usage consumption for ​44 countries​ through the span of ​26 years.",
        techStack: "Python (NumPy, Matplotlib)",
        link: "https://github.com/hariniram02/Global-Consumption-Data-Visualization",
      },
      "Snowcus Focus": {
        desc:
          "A game designed to help children with ADHD develop important skills like visual-spatial reasoning and hand-eye coordination. Recieved award for \"Best Hack\" at the 2021 UT Austin WiCS Hackathon.",
        techStack: "Javascript, HTML / CSS, React",
        link: "https://github.com/m4cy/m4cy.github.io",
      },
      Calculator: {
        desc:
          "A GUI-based application built from scratch that allows users to add, subtract, multiply, and divide numbers.",
        techStack: "Python (TKinter)",
        link: "https://github.com/hariniram02/Calculator",
        
      },
      "Scheduled Text Generator": {
        desc:
          "A script that automates texting by sending text messages to a certain person at scheduled times.",
        techStack: "Python (Twilio API)",
        link: "https://github.com/hariniram02/Scheduled-Text-Generator",
        
      },
      "Spotify Playlist Generator": {
        desc:
          "A script that takes your liked videos on Youtube and generates a Spotify playlist.",
        techStack: "Python (Spotify API, YouTube API)",
        link: "https://github.com/hariniram02/Spotify-Playlist-Generator",
        
      },
      "Locals": {
        desc:
          "A community-based application to help support small business across the world. Recieved award for \"Most Interdisciplinary\" at 2021 SCU Hack for Humanity.",
        techStack: "JavaScript, HTML / CSS, React",
        link: "https://github.com/ananyapg/Locals",
        
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-projects</span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <span className="external-links">
                      <a className="github-icon" href={projects[key]["link"]}>
                        <GitHubIcon
                          style={{
                            fontSize: 20,
                            color: "var(--lightest-slate)"
                          }}
                        ></GitHubIcon>
                      </a>
                      {projects[key]["open"] && (
                        <a className="open-icon" href={projects[key]["open"]}>
                          <OpenInBrowserIcon
                            style={{
                              fontSize: 25,
                              color: "var(--lightest-slate)"
                            }}
                          ></OpenInBrowserIcon>
                        </a>
                      )}
                    </span>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
