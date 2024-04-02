import React, { Component } from 'react';
import Counters from './Counters.jsx';

class counting extends Component {
  state = {
    counter: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ]
  };

  mapCounters() {
    return this.state.counter.map(counter =>(
      <Counters key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id} />
    ))}

  handleDelete = (counterId) => {
    console.log('Event handler called', counterId);
    const counter = this.state.counter.filter(c => c.id !== counterId);
    this.setState({counter});
  }
  render() { 
    return (
      <div>
        {this.mapCounters()}
      </div>
    );
  }
}
 
export default counting;