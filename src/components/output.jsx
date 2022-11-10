import React, { Component } from "react";

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
          {this.writeList(this.props.actualList)}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return classes;
  }

  writeList(l) {
    const value = l.length;
    const fill = l.map((result) => (
      <li>
        {result.name} - {result.phone}{" "}
      </li>
    ));
    return value > 20 ? <p> . . . Zuviele Antworten</p> : fill;
  }
}

export default Output;
