import React, { Component } from 'react';

class counters extends Component {
  state = {
    count: 0
  }

  formatCount() {
    const {count} = this.state
    return count === 0 ? 'Zero' : count
  }

  handleIncrement = (product) => {
    this.setState({ count: this.state.count +1 })

  };

  dohandleIncrement = () => {
    this.handleIncrement({id: 1})
  };

  notify() {
    if (this.state.count >  0 ) return <p>Count has been increased {this.state.count} {this.pluralise()}</p>
  }
  pluralise() {
    return this.state.count > 1 ? 'times' : 'time'
  }

  render() { 
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button onClick={this.dohandleIncrement}>Increment</button>
        {this.notify()}
      </div>
    );
  }
}
 
export default counters;