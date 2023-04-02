import React, { Component } from "react";

class InputComponent extends Component {
  state = {};
  render() {
    return (
      <input
        style={{
          borderRadius: "3px",
          backgroundColor: "#c5c6d0",
          width: "30vw",
          border: "none",
          padding: "12px 16px",
          fontSize: "16px",
        }}
        className="form-control"
        type="text"
        placeholder="Search for a country..."
        // Placeholder="white"
        ref={(c) => (this.title = c)}
        aria-label="Search"
        onKeyDown={(event) => this.props.add(event, this.title.value)}
      />
    );
  }
}

export default InputComponent;
