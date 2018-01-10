import React, { Component } from 'react';
import {
	createForm,
	createItem,
	getAllFormValue,
	getFormValue,
	setFormValue,
	getFormDisabled,
	setFormDisabled,
	formShow,
	formHide
} from './Form';
import { createButton, setButtonDisabled, getButtonDisabled } from './Button';

export default ({ onAfterEvent, onButtonClick }) => (App) => {
	class Form extends Component {
		constructor(props) {
			super(props);
			this.state = {
				form: {},
				button: {}
			};
			this.onAfterEvent = onAfterEvent;
			this.onButtonClick = onButtonClick;
			this.form = {
				createForm: createForm.bind(this),
				createItem: createItem.bind(this),
				getAllValue: getAllFormValue.bind(this),
				getValue: getFormValue.bind(this),
				setValue: setFormValue.bind(this),
				setDisabled: setFormDisabled.bind(this),
				getDisabled: getFormDisabled.bind(this),
				show: formShow.bind(this),
				hide: formHide.bind(this)
			};
			this.button = {
				createButton: createButton.bind(this),
				setDisabled: setButtonDisabled.bind(this),
				getDisabled: getButtonDisabled.bind(this)
			};
			this.table = {};
		}

		render() {
			return <App {...this.props} form={this.form} button={this.button} table={this.table} />;
		}
	}
	return Form;
};
