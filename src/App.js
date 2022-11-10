import React, { Component } from "react";
import Input from "./components/input";
import Output from "./components/output";
import NavBar from "./components/navbar";
import "./App.css";
import { listName } from "./telefonbuch633bf1";

class App extends Component {
  state = {
    actualList: listName,
  };

  handleChange = (val) => {
    const newList = listName.filter(
      (aL) => aL.name.slice(0, val.length).toUpperCase() === val.toUpperCase()
    );
    this.setState({ actualList: newList });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Input onChange={this.handleChange} />
          <Output
            actualList={this.state.actualList}
            onChange={this.handleChange}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
