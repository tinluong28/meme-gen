import React, { Component } from "react";

class MemeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }
  render() {
    return (
      <div
        className="meme-item"
        onMouseEnter={() => {
          this.setState({ hovered: true });
        }}
        onMouseLeave={() => {
          this.setState({ hovered: false });
        }}
      >
        <img
          className={this.state.hover ? "meme-img darken-img" : "meme-img"}
          src={this.props.meme.url}
          alt={this.props.meme.name}
        />
        <p className={this.state.hover ? "meme-text" : "no-text"}>
          {this.props.meme.name}
        </p>
      </div>
    );
  }
}

export default MemeItem;
