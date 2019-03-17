import React, { Component } from "react";
import { connect } from "react-redux";
import MemeItem from "./MemeItem";
import "../index.css";

import { Form, FormGroup, FormControl, FormLabel, Col } from "react-bootstrap";
class App extends Component {
  constructor() {
    super();
    this.state = {
      memeLimit: 10,
      text0: "",
      text1: ""
    };
  }
  render() {
    return (
      <div>
        <h2 className="mb-5">
          <u>Welcome to the Meme Generator!</u>
        </h2>

        <Form inline>
          <Col md="auto">
            <FormGroup>
              <FormLabel className="pr-3">
                <strong>Top</strong>
              </FormLabel>
              <FormControl
                type="text"
                onChange={e => this.setState({ text0: e.target.value })}
                placeholder="Write some text..."
              />
            </FormGroup>
          </Col>{" "}
          <Col md="auto">
            <FormGroup>
              <FormLabel className="pr-3">
                <strong>Bottom</strong>
              </FormLabel>
              <FormControl
                type="text"
                onChange={e => this.setState({ text1: e.target.value })}
                placeholder="Write some text..."
              />
            </FormGroup>
          </Col>
        </Form>
        {this.props.meme.slice(0, this.state.memeLimit).map(meme => (
          <MemeItem key={meme.id} meme={meme} />
        ))}
        <p
          className="LoadMore"
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
