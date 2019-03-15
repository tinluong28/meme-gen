import React, { Component } from "react";
import { connect } from "react-redux";
import MemeItem from "./MemeItem";
import "../index.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      memeLimit: 10
    };
  }
  render() {
    return (
      <div>
        <h2>Welcome to the Meme Generator!</h2>
        {this.props.meme.slice(0, this.state.memeLimit).map(meme => (
          <MemeItem key={meme.id} meme={meme} />
        ))}
        <p
          onClick={() => {
            this.setState({ memeLimit: this.state.memeLimit + 10 });
          }}
        >
          Load 10 more memes...
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  null
)(App);
