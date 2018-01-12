// 获取所有表单数据
export function getAllFormValue() {
	let { state } = this;
	return state.form;
}

// 获取表单中某个字段的值
export function getFormValue(moduleId, itemId) {
	this.state.form[moduleId][key] = this.state.form[moduleId][key] || {};
	let { state } = this;
	return state.form[moduleId][itemId].value;
}

// 设置表单中某个字段的值
export function setFormValue(moduleId, values) {
	for (let key of Object.keys(values)) {
		if (key) {
			this.state.form[moduleId][key] = this.state.form[moduleId][key] || {};
			this.state.form[moduleId][key].value = values[key];
		}
	}
	this.setState({ form: this.state.form });
}

// 获取表单编辑性
export function getFormDisabled(moduleId, id) {
	this.state.form[moduleId][key] = this.state.form[moduleId][key] || {};
	return !!this.state.form[moduleId][id].disabled;
}

// 设置表单编辑性
export function setFormDisabled(moduleId, values) {
	for (let key of Object.keys(values)) {
		if (key) {
			this.state.form[moduleId][key] = this.state.form[moduleId][key] || {};
			this.state.form[moduleId][key].disabled = values[key];
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
