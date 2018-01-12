import React, { Component } from 'react';
import { createPage } from 'build';
// import { createPage } from 'src';
import { afterEvent, buttonClick } from './events';

class IcApply extends Component {
	// react：构造函数
	constructor(props) {
		super(props);
	}

	// react: 生命周期，可做初始化操作，相当于init
	componentDidMount() {
		this.props.form.setValue('form1', {
			userName: 'liyxt@yonyou.com',
			passWord: 'yonyou.com@1988'
		});
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
					{createForm('form1')}
				</div>
				<div className style={{ border: '1px solid #666', padding: '20px', marginBottom: '20px' }}>
					{createForm('form2')}
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
	//模板id
	moduleId: '100', //或者 [ '001', '002', '003' ]
	// 编辑后事件
	onAfterEvent: afterEvent,
	// 按钮点击事件
	onButtonClick: buttonClick
})(IcApply);
