import React, { Component } from 'react';

export function createButton(id, config = {}) {
	let { disabled = false, name = '' } = config;
	if (!this.state.button.hasOwnProperty(id)) {
		//初始化
		this.state.button[id] = { disabled };
	}
	return (
		<button
			disabled={this.state.button[id].disabled}
			onClick={this.onButtonClick.bind(
				this,
				{ ...this.props, form: this.form, button: this.button, table: this.table },
				id
			)}
		>
			{name}
		</button>
	);
}
