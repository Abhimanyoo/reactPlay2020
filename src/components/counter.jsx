import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0,
	};
	render() {
		return (
			//React.Fragment
			<>
				<span>{this.formatCount()}</span>
				<button>Increment</button>
			</>
		);
	}

	formatCount() {
		const { count } = this.state;
		const x = <h2>Zero</h2>;
		return count === 0 ? x : count;
	}
}

export default Counter;
