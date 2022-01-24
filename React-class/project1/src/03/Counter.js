import React from "react";

class Counter extends React.Component {
  // Class 형
  constructor() {
    super();
    this.state = { count: 0 };
  }

  plusfnc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  minusfnc = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    const { name, name2, name3 } = this.props;

    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.plusfnc}>더하기 +1</button>
        <button onClick={this.minusfnc}>빼기 -1</button>
        <div>{name}</div>
        <div>{name2}</div>
        <div>{name3}</div>
      </div>
    );
  }
}

export default Counter;
