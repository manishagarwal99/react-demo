import React, { Component } from "react";
import Counter from "./counter4";

class Counters extends Component {
  //other than passing every attribute of the state separately like value and id
  // we can send the counter object itself which will contain all the details

  // we use object destructuring on this.props to get the required methods only and
  // use then directly without suffix this.props
  render() {
    console.log("Counters- rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-secondary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
          >
            <h3>Counter #{counter.id}</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
