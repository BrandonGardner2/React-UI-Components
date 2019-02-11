import React, { Component } from "react";

export default class Footer extends Component {
  state = {
    shares: 0,
    likes: 0
  };
  handleClick(e) {
    console.log(e.target);
  }
  render() {
    return (
      <div className="footer">
        <i className="far fa-comment" />
        <div className="share">
          <i className="fas fa-sync" onClick={this.handleClick} />
        </div>
        <div className="like">
          <i className="far fa-heart" onClick={this.handleClick} />
        </div>
        <i className="far fa-envelope" />
      </div>
    );
  }
}
