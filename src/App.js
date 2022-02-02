import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/navbar4";
import Counters from "./components/counters4";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 5 },
    ],
  };

  // we need to pass props to both constructor and super
  // or else it would be undefined
  // Order of execution:
  // 1. constructor, 2. render(), 3. componentDidMount()
  constructor() {
    super();
    console.log("App - Constructor");
  }

  //good for getting data from server with ajax calls
  componentDidMount() {
    //Ajax call
    //this.setState({});
    console.log("App - Mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <Navbar
          totalcount={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
