import React, { Component } from "react";
import { listName } from "../telefonbuch633bf1";

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
              // value={this.state.value}
              onChange={(evt) => this.props.onChange(evt.target.value)}
            />{" "}
          </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    /* classes += this.props.counter === 0 ? "warning" : "primary";
    return classes; */
  }

  /*  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h4>Zero</h4> : value;
  } */
}

export default Input;
