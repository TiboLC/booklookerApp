import React, { Component } from "react";
import { listName } from "../telefonbuch633bf1";

class Output extends Component {
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2"></span>
        <ul onChange={() => this.props.onChange}>
          {this.props.actualList.map((result) => (
            <li>
              {result.name} - {result.phone}{" "}
            </li>
          ))}
          {/* {this.writeList()} */}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += this.props.counter === 0 ? "warning" : "primary";
    return classes;
  }

  /*   writeList() {
    const { value } = this.props.actualList.length;
    const { fill } = this.props.actualList.map((result) => (
      <li>
        {result.name} - {result.phone}{" "}
      </li>
    ));
    console.log("value", value);
    console.log(fill);
    return value === 0 ? "" : fill;
  } */

  /*   formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h4>Zero</h4> : value;
  } */
}

export default Output;
