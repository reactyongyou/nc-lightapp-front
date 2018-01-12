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

export default ({ moduleId, onAfterEvent, onButtonClick }) => (App) => {
	class Form extends Component {
		constructor(props) {
			super(props);
			this.state = {
				meta: {},
				form: {},
				button: {},
				table: {}
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

			//模拟ajax请求，通过moduleId查询meta信息
			setTimeout(() => {
				this.setState({
					meta: {
						form1: [
							{
								label: '用户名',
								id: 'userName',
								config: {
									initialValue: 'lyx',
									disabled: true
								},
								type: 'input',
								inputType: 'text'
							},
							{
								label: '密码',
								id: 'passWord',
								type: 'input',
								inputType: 'password'
							}
						],
						form2: [
							{
								label: '邮箱',
								id: 'email',
								type: 'input',
								inputType: 'text'
							},
							{
								label: '手机',
								id: 'teliphone',
								type: 'input',
								inputType: 'text'
							}
						]
					}
				});
			}, 100);
		}

		render() {
			return <App {...this.props} form={this.form} button={this.button} table={this.table} />;
		}
	}
	return Form;
};
