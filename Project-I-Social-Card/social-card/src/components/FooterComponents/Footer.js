import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  state = {
    shares: 0,
    likes: 0
  };
  handleClick = e => {
    if (e.target.id === "shareBtn") {
      this.setState({
        shares: this.state.shares + 1
      });
    } else {
      this.setState({
        likes: this.state.likes + 1
      });
    }
  };
  render() {
    return (
      <div className="footer">
        <div className="comment">
          <i className="far fa-comment" />
        </div>
        <div className="share">
          <i className="fas fa-sync" id="shareBtn" onClick={this.handleClick} />
          {this.state.shares}
        </div>
        <div className="like">
          <i className="far fa-heart" id="likeBtn" onClick={this.handleClick} />
          {this.state.likes}
        </div>
        <div className="mail">
          <i className="far fa-envelope" />
        </div>
      </div>
    );
  }
}
