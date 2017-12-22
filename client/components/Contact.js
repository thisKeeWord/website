import React from 'react';
// import Navigate from './Navigate';
// import Footers from './Footers';


class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <div className="contactMe">
          <h3 className="inquiries">
            For business inquiries, send an email by clicking <a href="mailto:leonardwkee@gmail.com" target="_blank"> here</a>.
          </h3>
        </div>
      </div>
    )
  }
}


module.exports = Contact;