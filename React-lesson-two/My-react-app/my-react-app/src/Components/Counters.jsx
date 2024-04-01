import React, { Component } from 'react';

class counters extends Component {
  state = {
    vaule: this.props.value
  }

  formatCount() {
    const {vaule} = this.state
    return vaule === 0 ? 'Zero' : vaule
  }

  handleIncrement = () => {
    this.setState({ vaule: this.state.vaule +1 })

  };

  notify() {
    if (this.state.vaule >  0 ) return <p>Count has been increased {this.state.vaule} {this.pluralise()}</p>
  }
  pluralise() {
    return this.state.vaule > 1 ? 'times' : 'time'
  }

  render() { 
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button onClick={this.handleIncrement}>Increment</button>
        {this.notify()}
      </div>
    );
  }
}
 
export default counters;