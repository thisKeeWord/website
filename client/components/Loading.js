import React from 'react';

class Loading extends React.Component {
  render() {
    let loadingIcon = null;
    if (this.props.isActive) {
      loadingIcon = (
        <div className="whileLoading">
          Loading...<br/>
          Here's something cute to see in the meantime :)
          <div className="loadingIcon"></div>
        </div>
      )
    }
    return (
      <div className="Loading">
      {loadingIcon}
      </div>
    )
  }
};

module.exports = Loading;


