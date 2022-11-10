import React, { Component } from "react";
import Input from "./components/input";
import Output from "./components/output";
import NavBar from "./components/navbar";
import "./App.css";
import { listName } from "./telefonbuch633bf1";

class App extends Component {
  state = {
    /*   counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ], */
    actualList: listName,
    check: 0,
  };

  handleChange = (val) => {
    const newList = listName.filter(
      (aL) => aL.name.slice(0, val.length).toUpperCase() === val.toUpperCase()
    );
    const upCheck = newList.length > 20 ? 0 : 1;
    this.setState({ actualList: newList, check: upCheck });
    console.log("upCheck", upCheck);
    // return val.length === 0 ? "" : newList;
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
        // totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Input
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onChange={this.handleChange}
          />
          <Output
            actualList={this.state.actualList}
            check={this.state.check}
            onChange={this.handleChange}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
