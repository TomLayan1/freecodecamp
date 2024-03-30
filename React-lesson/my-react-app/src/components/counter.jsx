import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  }
  render() { 
    return (
      <div>
        <p>{this.formatCount()}</p>
        <button>Increment</button>
        <un>
          {this.state.tags.map(tags => <li>{ tags }</li>)}
        </un>
      </div>
    );
  }

  formatCount() {
    const {count} = this.state;
    return count === 0 ? '0' : count;
  }
}
 
export default Counter;