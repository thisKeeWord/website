import React from 'react';
import $ from 'jquery';
import PostForm from './Form.js'

class Projects extends React.Component {
  render() {
    return (
      <div className="Projects">
        <div className="githubProjects">
          <div className="analolics">
            <div className="aboutAnalolics">
              <h3 id="projectName">Ana-lol-ics</h3>
              <h4 id="projectLink">ana-lol-ics.xyz</h4>
              <div className="imageHover">
                <img className="analolicsImg" src="./../images/ana-lol-ics.png"></img>
                  <div className="techStack">
                  <h5>Tech stack:</h5>
                  html, css, jquery, d3, react, react-router, node, express, mongoose
                </div>
              </div>
              <div className="projectDescription">
                Ana-lol-ics takes the League of Legends username inputted in
                the field and gets the corresponding match history.
                Once a selection or two gets selected from the menu, game data
                will be shown allowing users to see their general statistics.
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
};

module.exports = Projects;