import React, { Component } from "react";
import Counter2 from "./counter2";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  //1. using this.props in
  // Counter2 component will give the 'value' and 'selected' attribute
  //

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter2 key={counter.id} value={counter.value} />
        ))}
      </div>
    );
  }
}

export default Counters;
