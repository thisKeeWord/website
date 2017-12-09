import React from 'react';
// import Navigate from './Navigate';
// import Footers from './Footers';


class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <div className="contactMe">
          <h1 className="emailMe">Contact Me</h1>
          <a href="mailto:leonardwkee@gmail.com" target="_blank">
            <i className="fa fa-envelope-o fa-2x"></i>
          </a>
        </div>
      </div>
    )
  }
}


module.exports = Contact;