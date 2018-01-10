import React, { Component } from 'react';
import { createPage } from '../../components';
import { afterEvent, buttonClick } from './events';

class IcApply extends Component {
	// react：构造函数
	constructor(props) {
		super(props);
		//表单meta信息
		this.meta1 = [
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
		];
		this.meta2 = [
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
		];
	}

	// react：界面渲染函数
	render() {
		let { form, button } = this.props;
		let { createForm } = form;
		let { createButton } = button;
		return (
			<div>
				{/* 创建表单 */}
				<div style={{ border: '1px solid #666', padding: '20px', marginBottom: '20px', marginTop: '20px' }}>
					{createForm(this.meta1)}
				</div>
				<div style={{ border: '1px solid #666', padding: '20px', marginBottom: '20px' }}>
					{createForm(this.meta2)}
				</div>
				{/* 创建按钮 */}
				{createButton('setValueButton', { name: '设值' })}
				{createButton('getValueButton', { name: '取值' })}
				{createButton('getDisabledTrue', { name: 'input禁用', disabled: true })}
				{createButton('getDisabledFalse', { name: 'input可用' })}
			</div>
		);
	}
}

export default createPage({
	// 编辑后事件
	onAfterEvent: afterEvent,
	// 按钮点击事件
	onButtonClick: buttonClick
})(IcApply);
