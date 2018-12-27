import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  state = {
    value: this.props.value
  };
 /* constructor(){
      super();
     this.handleIncrement= this.handleIncrement.bind(this);
  }*/
  handleIncrement=product=>{

      this.setState({value:this.state.value+1});
  }

  render() {
    return (
      <div>
          {this.props.children}
        <span>{this.state.value}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
