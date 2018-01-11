import React, { Component } from 'react';
import { createPage, Tab, TabPane } from '../../components';
import { afterEvent, buttonClick } from './events';

class IcApply extends Component {
	// react：构造函数
	constructor(props) {
		super(props);
	}

	//react: 生命周期，可做初始化操作，相当于init
	componentDidMount() {
		this.props.form.setValue('head', {
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
				<div className="header">
					{/* 创建按钮 */}
					{createButton('btnSave', { name: '保存' })}
					{createButton('btnCancel', { name: '取消' })}
				</div>
				<div className="container">
					{/* 创建表单 */}
					<div style={{ width: '50%' }}>{createForm('head')}</div>
					{/* 创建表格 */}
					<div style={{ width: '50%' }}>
						<Tab>
							<TabPane name="还款计划">{createTable('plan')}</TabPane>
							<TabPane name="银团贷款">{createTable('bank')}</TabPane>
						</Tab>
					</div>
				</div>
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

// 模板001返回json结构示例
// {
//     'head': {...},
// }
// 模板002返回json结构示例
// {
//     'plan': {...},
// }
// ...
// 模板100返回json结构示例
// {
//     'head': {...},
//     'plan': {...},
//     'bank': {...}
// }
