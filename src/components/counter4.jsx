import React, { Component } from "react";

class Counter extends Component {
  //this method is called after  commponent is updated and we hve new state & props
  // we can compare these new ones with old ones and if there is a change we can
  // make an ajax request to get new data from server

  componentDidUpdate(prevprops, prevstate) {
    console.log("Prev - props", prevprops);
    console.log("Prev - state", prevstate);
    // we can get data based on change in props object like..
    //if(prevprops.counter.value != this.props.counter.value){
    //Ajax call and get new data from server
    //}
  }

  // called just before a component is removed from the dom
  // when we delete the first counter, we see the unmount message
  // as the state of App is changed so entire component is re-rendered and
  // we get render message of 3 counter component as well. React compres
  // this virtual dom with the old one. Gets the changes and calls componentWillUnmount
  // before removing this counter from dom. This gives us time to cleanup the listners and timers
  // which may lead to memory leak
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  //props -include data that you give to a component.
  //And it is read only
  //state- includes data private to that component

  //   state = {
  //     value: this.props.counter.value,
  //   };

  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  //1. inspecting the rendered html we see that props has an attribute children which
  // contains the h4 tag generated in the other component
  //2. The component owning the state should be the one to change it.so, Counters
  // should perform delete op on the object and not this componenet.

  //3. Now we get rid of this.handleIncre.. and replace it.
  // we remove the state attribute and make this component a single source of truth.
  // We call everything from the Counters component
  render() {
    console.log("Counter- rendered");
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    var x = <h1>Zero</h1>;
    return value === 0 ? x : value;
  }
}

export default Counter;
