import React from 'react';
import $ from 'jquery';
import { Grid, Row, Col } from 'react-bootstrap';

class Projects extends React.Component {
  render() {
    return (
      <div className="Projects">
        <div className="githubProjects">
          <Row>
            <Col sm={6}>
              <div className="project" id="analolics">
                <div className="aboutProject" id="aboutAnalolics">
                  <h3 id="projectName">
                    <a href="http://ana-lol-ics.xyz" target="_blank">Ana-lol-ics</a>
                  </h3>
                  <div className="imageHover">
                    <div className="techStack">
                      <h5>Tech stack:</h5>
                      html, css, jquery, d3, react, react-router, node, express, mongoose
                    </div>
                    <img className="projectImg" src="./../images/ana-lol-ics.png"></img>
                  </div>
                  <div className="projectDescription">
                    Ana-lol-ics takes the League of Legends username inputted in
                    the field and gets the corresponding match history.
                    Once a selection or two gets selected from the menu, game data
                    will be shown allowing users to see their general statistics.
                  </div>
                </div>
                <a href="https://github.com/thisKeeWord/Ana-LoL-ics">Github Link</a>
              </div>
            </Col>

            <Col sm={6}>
              <div className="project" id="boggle5">
                <div className="aboutProject" id="aboutBoggle5">
                  <h3 id="projectName">
                    <a href="http://boggle5.herokuapp.com" target="_blank">Boggle5</a>
                  </h3>
                  <div className="imageHover">
                    <div className="techStack">
                      <h5>Tech stack:</h5>
                      html, css, jquery, react, node, express, socketio
                    </div>
                    <img className="projectImg" src="./../images/boggle5.png"></img>
                  </div>
                  <div className="projectDescription">
                    Boggle5 is a web version of the classic boggle word game. 
                    It consists of a 5x5 grid of letters and also has a scoring 
                    system based on the length of the submitted word.
                  </div>
                </div>
                <a href="https://github.com/thisKeeWord/boggle5">Github Link</a>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={6}>
              <div className="project" id="voiceText">
                <div className="aboutProject" id="aboutVoiceText">
                  <h3 id="projectName">
                    <a href="https://chrome.google.com/webstore/detail/voice-text/aaioppfhljbjlidhkkehocbjjccoccmm" target="_blank">Voice Text</a>
                  </h3>
                  <div className="imageHover">
                    <div className="techStack">
                      <h5>Tech stack:</h5>
                      html, css, jquery
                    </div>
                    <img className="projectImg" src="./../images/voice-text.png"></img>
                  </div>
                  <div className="projectDescription">
                    Voice Text is an easy to use web application that transcribes your speech,
                    allowing you to easily copy and paste the results.
                  </div>
                </div>
                <a href="https://github.com/thisKeeWord/voiceText">Github Link</a>
              </div>
            </Col>

            <Col sm={6}>
              <div className="project" id="adviceGenerator">
                <div className="aboutProject" id="aboutAdviceGenerator">
                  <h3 id="projectName">
                    <a href="https://chrome.google.com/webstore/detail/advice-generator/hfepgagehaghifpbkbiiailfamafbjdi" target="_blank">Advice Generator</a>
                  </h3>
                  <div className="imageHover">
                    <div className="techStack">
                      <h5>Tech stack:</h5>
                      html, css, jquery
                    </div>
                    <img className="projectImg" src="./../images/advice-generator.png"></img>
                  </div>
                  <div className="projectDescription">
                    Advice Generator is a Chrome extension that takes a question 
                    and returns advice.
                  </div>
                </div>
                <a href="https://github.com/thisKeeWord/advice-generator">Github Link</a>
              </div>
            </Col>
          </Row>
  
        </div>
      </div>
    );
  }
};

module.exports = Projects;