import React, { Component } from "react";

class Input extends Component {
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2"></span>
        <form onSubmit={this.handleSubmit}>
          {" "}
          <label>
            Bitte Vorname und Name eingeben:{"\n"}
            <input
              type="text"
              onChange={(evt) => this.props.onChange(evt.target.value)}
            />{" "}
          </label>
        </form>
      </div>
    );
  }
}

export default Input;
