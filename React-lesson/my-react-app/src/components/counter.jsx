import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  }

  renderTags() {
    // Using conditional statements
    if (this.state.tags.length === 0) return <p>There are no tags!</p>
    return <ul>
            {/* using the map method. NOTE: Each of the tags must have a unique key */}
            {this.state.tags.map(tags => <li key={tags}>{ tags }</li>)}
      </ul>
  }

  // Event handler
  // Best with arrow functions
  handleIncrement = () => {
    console.log('Increament clicked', this);
  }
  render() { 
    return (
      <div>
        <p>{this.formatCount()}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        {/* if the condition is true, it renders the truthy value which is after && */}
        {this.state.tags.length === 0 && 'Please create a new tag!'}
        {/* call the renderTags method in here */}
        {this.renderTags()}
      </div>
    );
  }

  formatCount() {
    // 
    const {count} = this.state;
    return count === 0 ? '0' : count;
  }
}
 
export default Counter;
