import React from 'react';
// import 

class Footers extends React.Component {
	render() {
		return (
			<div className="footer">
	         	<div id="myName">&copy; 2017 LEONARD KEE | Developer | Powerbuilder | Blogger</div>
	         	<div className="footerIcons">
              <a href="https://www.linkedin.com/in/thiskeeword" target="_blank">
                <i className="fa fa-linkedin fa-2x" id="iconLink"></i>
              </a>
              <a href="https://www.github.com/thisKeeWord" target="_blank">
                <i className="fa fa-github fa-2x" id="iconLink"></i>
              </a>
              <a href="https://instagram.com/whatintheleo" target="_blank">
                <i className="fa fa-instagram fa-2x" id="iconLink"></i>
              </a>
          </div>
      </div>
		)
	}
}

module.exports = Footers;