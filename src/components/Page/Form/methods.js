// 获取所有表单数据
export function getAllFormValue() {
	let { state } = this;
	return state.form;
}

// 获取表单中某个字段的值
export function getFormValue(id) {
	let { state } = this;
	return state.form[id].value;
}

// 设置表单中某个字段的值
export function setFormValue(values) {
	for (let key of Object.keys(values)) {
		if (key) {
			this.state.form[key].value = values[key];
		}
	}
	this.setState({ form: this.state.form });
}

// 获取表单编辑性
export function getFormDisabled(id) {
	return this.state.form[id].disabled;
}

// 设置表单编辑性
export function setFormDisabled(values) {
	for (let key of Object.keys(values)) {
		if (key) {
			this.state.form[key].disabled = values[key];
		}
	}
	this.setState({ form: this.state.form });
}

// 设置表单可见
export function formShow(id) {
	// if (typeof id === 'string') {
	// 	this.state.form[id].show = true;
	// 	this.setState({ form: this.state.form });
	// } else if (id instanceof Array) {
	// 	id.map((e, i) => {
	// 		this.state.form[e].show = true;
	// 	});
	// 	this.setState({ form: this.state.form });
	// } else {
	// 	return;
	// }
}

// 设置表单隐藏
export function formHide(id) {
	// if (typeof id === 'string') {
	// 	this.state.form[id].show = false;
	// 	this.setState({ form: this.state.form });
	// } else if (id instanceof Array) {
	// 	id.map((e, i) => {
	// 		this.state.form[e].show = false;
	// 	});
	// 	this.setState({ form: this.state.form });
	// } else {
	// 	return;
	// }
}
