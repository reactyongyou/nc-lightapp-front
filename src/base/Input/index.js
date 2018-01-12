import React, { Component } from 'react';

export default class Input extends Component {
	render() {
		let { value, onChange, ...others } = this.props;
		return (
			<input value={this.props.value} onChange={(e) => void this.props.onChange(e.target.value)} {...others} />
		);
	}
}
