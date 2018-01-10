import React, { Component } from 'react';
import FormItem from './FormItem';
import Input from '../../base/Input';

/**
 * 创建表单域
 * @param meta 模板json数据
 */
export function createForm(meta) {
	return meta.map((item, i) => {
		switch (item.type) {
			case 'input':
				return (
					<FormItem label={item.label} key={i}>
						{createItem.bind(this)(item.id, item.config)(<Input type={item.inputType} />)}
					</FormItem>
				);
			default:
				break;
		}
	});
}

/**
 * 创建表单项
 * @param id 控件的唯一标识
 * @param initialValue 初始值
 * @param valuePropName 代表组件值的属性，如Switch的是'checked'
 * @param trigger 收集子节点值的方法
 */
export function createItem(id, config = {}) {
	let {
		initialValue = '',
		valuePropName = 'value',
		changeTrigger = 'onChange',
		focusTrigger = 'onFocus',
		disabled = false
	} = config;
	if (!this.state.form.hasOwnProperty(id)) {
		//初始化
		this.state.form[id] = { value: initialValue, disabled };
	}
	return (Item) => {
		Item = {
			...Item,
			props: {
				...Item.props,
				[valuePropName]: this.state.form[id].value,
				[changeTrigger]: (value) => {
					this.state.form[id].value = value;
					this.setState(
						{
							form: this.state.form
						},
						() => {
							this.onAfterEvent(
								{ ...this.props, form: this.form, button: this.button, table: this.table },
								id,
								value
							);
						}
					);
				},
				disabled: this.state.form[id].disabled,
				show: this.state.form[id].show
			}
		};
		return Item;
	};
}
