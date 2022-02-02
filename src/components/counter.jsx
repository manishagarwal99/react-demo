import React, { Component } from "react";

class Counter extends Component {
  //state is used to set values of properties used in this
  //component
  state = {
    count: 0,
    url: "https://picsum.photos/400",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 5,
    fontWeight: "bold",
  };

  // (1) if we use 'this' without object binding it would return undefined
  // we need a constructor where we can bind this and this function would
  // contain this which would always point to this classes object

  // constructor(){
  //    super();
  //    this.handleIncrement = this.handleIncrement.bind(this);
  //}

  //handleIncrement(){
  //    console.log("Increment Clicked",this);
  //}

  // (2) or we can convert handleIncrement to arrow function
  // we cant increment the value of count using this.state.count++
  // React isn't aware of this change, so we use a setState method from base class

  //this setState method tells react that the state of this component is going to
  // change. Rect will then schedule a call to render function. It may be called anytime asynchronously
  // this method returns a new virtual dom and compare it with old virtual dom
  // then it would make change to real virtual dom only at the place of modifiction
  // here only the span element is changing
  handleIncrement = () => {
    //console.log("Increment Clicked");
    //this.state.count++;
    this.setState({ count: this.state.count + 1 });
  };

  renderTag() {
    if (this.state.tags.length === 0)
      return <p>The list is empty using function</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleId(prod) {
    console.log(prod);
  }

  //1. we can dynamically use any valid javascript command inside {}.
  //2. <React.Fragment> is used instead of <div> to reduce the number
  //of unused div inside the rendered HTML code
  //3. Can't use attribute 'class' as it is reserved in JS
  //instead we use 'className' in JSX
  //4. inline style used in button
  //5. dynamic styling is used if we want different styles for
  //different outcomes
  //6. We want to render list dynamically and print an error message
  //if list is empty. We can do this inline or using a function(renderTags).
  //Inline - (true && "hi") returns "hi". (true && "hi" && 1) returns 1.
  //This returns the last true value
  //7. In the button, we pass a reference of the handleInc..
  // function to the onClick event instead of calling the function.
  //8. Now we want to pass an argument in onClick function
  //we can either refer to another function which will in turn call
  //actual function with arguments or use an arrow function inline

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          style={{ fontSize: 30 }}
          className="btn btn-secondary btn-sm m-3"
        >
          ABC1
        </button>
        <button
          onClick={() => this.handleId({ id: 1 })}
          style={{ fontSize: 30 }}
          className="btn btn-secondary btn-sm"
        >
          ABC2
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {this.state.tags.length === 0 && "The list is empty using inline"}
        {this.renderTag()}
      </React.Fragment>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state; //object destructor
    var x = "Zero";
    x = <h1>Zero</h1>; //We can use any x
    return count === 0 ? x : count;
  }
}

export default Counter;
