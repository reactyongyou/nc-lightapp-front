(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["nc-lightapp-front"] = factory(require("react"));
	else
		root["nc-lightapp-front"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Form = __webpack_require__(7);

var _Button = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (_ref) {
	var moduleId = _ref.moduleId,
	    onAfterEvent = _ref.onAfterEvent,
	    onButtonClick = _ref.onButtonClick;
	return function (App) {
		var Form = function (_Component) {
			_inherits(Form, _Component);

			function Form(props) {
				_classCallCheck(this, Form);

				var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

				_this.state = {
					meta: {},
					form: {},
					button: {},
					table: {}
				};
				_this.onAfterEvent = onAfterEvent;
				_this.onButtonClick = onButtonClick;
				_this.form = {
					createForm: _Form.createForm.bind(_this),
					createItem: _Form.createItem.bind(_this),
					getAllValue: _Form.getAllFormValue.bind(_this),
					getValue: _Form.getFormValue.bind(_this),
					setValue: _Form.setFormValue.bind(_this),
					setDisabled: _Form.setFormDisabled.bind(_this),
					getDisabled: _Form.getFormDisabled.bind(_this),
					show: _Form.formShow.bind(_this),
					hide: _Form.formHide.bind(_this)
				};
				_this.button = {
					createButton: _Button.createButton.bind(_this),
					setDisabled: _Button.setButtonDisabled.bind(_this),
					getDisabled: _Button.getButtonDisabled.bind(_this)
				};
				_this.table = {};

				//模拟ajax请求，通过moduleId查询meta信息
				setTimeout(function () {
					_this.setState({
						meta: {
							form1: [{
								label: '用户名',
								id: 'userName',
								config: {
									initialValue: 'lyx',
									disabled: true
								},
								type: 'input',
								inputType: 'text'
							}, {
								label: '密码',
								id: 'passWord',
								type: 'input',
								inputType: 'password'
							}],
							form2: [{
								label: '邮箱',
								id: 'email',
								type: 'input',
								inputType: 'text'
							}, {
								label: '手机',
								id: 'teliphone',
								type: 'input',
								inputType: 'text'
							}]
						}
					});
				}, 100);
				return _this;
			}

			_createClass(Form, [{
				key: 'render',
				value: function render() {
					return _react2.default.createElement(App, _extends({}, this.props, { form: this.form, button: this.button, table: this.table }));
				}
			}]);

			return Form;
		}(_react.Component);

		return Form;
	};
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createButton = createButton;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createButton(id) {
	var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	var _config$disabled = config.disabled,
	    disabled = _config$disabled === undefined ? false : _config$disabled,
	    _config$name = config.name,
	    name = _config$name === undefined ? '' : _config$name;

	if (!this.state.button.hasOwnProperty(id)) {
		//初始化
		this.state.button[id] = { disabled: disabled };
	}
	return _react2.default.createElement(
		'button',
		{
			disabled: this.state.button[id].disabled,
			onClick: this.onButtonClick.bind(this, _extends({}, this.props, { form: this.form, button: this.button, table: this.table }), id)
		},
		name
	);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__(2);

Object.defineProperty(exports, 'createButton', {
  enumerable: true,
  get: function get() {
    return _create.createButton;
  }
});

var _methods = __webpack_require__(4);

Object.defineProperty(exports, 'setButtonDisabled', {
  enumerable: true,
  get: function get() {
    return _methods.setButtonDisabled;
  }
});
Object.defineProperty(exports, 'getButtonDisabled', {
  enumerable: true,
  get: function get() {
    return _methods.getButtonDisabled;
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setButtonDisabled = setButtonDisabled;
exports.getButtonDisabled = getButtonDisabled;
// 设置按钮可用性
function setButtonDisabled(values) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.keys(values)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var key = _step.value;

			if (key) {
				this.state.button[key].disabled = values[key];
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	this.setState({ button: this.state.button });
}

// 获取按钮可用性
function getButtonDisabled(id) {
	return this.state.button[id].disabled;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = function (_Component) {
	_inherits(FormItem, _Component);

	function FormItem(props) {
		_classCallCheck(this, FormItem);

		return _possibleConstructorReturn(this, (FormItem.__proto__ || Object.getPrototypeOf(FormItem)).call(this, props));
	}

	_createClass(FormItem, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			return nextProps.children.props.value !== this.props.children.props.value || nextProps.children.props.disabled !== this.props.children.props.disabled;
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			// console.log(this.props.label, ': updated');
		}
	}, {
		key: 'render',
		value: function render() {
			var children = this.props.children;
			if (this.props.children instanceof Array) {
				children = [].concat(_toConsumableArray(this.props.children));
			}
			return _react2.default.createElement(
				'div',
				{ style: { display: this.props.show === false ? 'none' : 'block' } },
				_react2.default.createElement(
					'span',
					{ style: { display: 'inline-block', width: '80px' } },
					this.props.label + '\uFF1A'
				),
				children
			);
		}
	}]);

	return FormItem;
}(_react.Component);

exports.default = FormItem;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createForm = createForm;
exports.createItem = createItem;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FormItem = __webpack_require__(5);

var _FormItem2 = _interopRequireDefault(_FormItem);

var _Input = __webpack_require__(9);

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 创建表单域
 * @param meta 模板json数据
 */
function createForm(moduleId) {
	var _this = this;

	var meta = this.state.meta[moduleId];
	if (!this.state.form.hasOwnProperty(moduleId)) {
		//初始化
		this.state.form[moduleId] = {};
	}
	return meta ? meta.map(function (item, i) {
		switch (item.type) {
			case 'input':
				return _react2.default.createElement(
					_FormItem2.default,
					{ label: item.label, key: i },
					createItem.bind(_this)(moduleId, item.id, item.config)(_react2.default.createElement(_Input2.default, { type: item.inputType }))
				);
			default:
				break;
		}
	}) : null;
}

/**
 * 创建表单项
 * @param id 控件的唯一标识
 * @param initialValue 初始值
 * @param valuePropName 代表组件值的属性，如Switch的是'checked'
 * @param trigger 收集子节点值的方法
 */
function createItem() {
	var moduleId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	var _this2 = this;

	var itemId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	var _config$initialValue = config.initialValue,
	    initialValue = _config$initialValue === undefined ? '' : _config$initialValue,
	    _config$valuePropName = config.valuePropName,
	    valuePropName = _config$valuePropName === undefined ? 'value' : _config$valuePropName,
	    _config$changeTrigger = config.changeTrigger,
	    changeTrigger = _config$changeTrigger === undefined ? 'onChange' : _config$changeTrigger,
	    _config$focusTrigger = config.focusTrigger,
	    focusTrigger = _config$focusTrigger === undefined ? 'onFocus' : _config$focusTrigger,
	    _config$disabled = config.disabled,
	    disabled = _config$disabled === undefined ? false : _config$disabled;
	// if (!this.state.form[moduleId].hasOwnProperty(itemId)) {
	// 	//初始化
	// 	this.state.form[moduleId][itemId] = { value: initialValue, disabled };
	// }

	this.state.form[moduleId][itemId] = _extends({ value: initialValue, disabled: disabled }, this.state.form[moduleId][itemId]);
	return function (Item) {
		var _extends2;

		Item = _extends({}, Item, {
			props: _extends({}, Item.props, (_extends2 = {}, _defineProperty(_extends2, valuePropName, _this2.state.form[moduleId][itemId].value), _defineProperty(_extends2, changeTrigger, function (value) {
				_this2.state.form[moduleId][itemId].value = value;
				_this2.setState({
					form: _this2.state.form
				}, function () {
					_this2.onAfterEvent(_extends({}, _this2.props, { form: _this2.form, button: _this2.button, table: _this2.table }), moduleId, itemId, value);
				});
			}), _defineProperty(_extends2, 'disabled', _this2.state.form[moduleId][itemId].disabled), _defineProperty(_extends2, 'show', _this2.state.form[moduleId][itemId].show), _extends2))
		});
		return Item;
	};
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _create = __webpack_require__(6);

Object.defineProperty(exports, 'createForm', {
	enumerable: true,
	get: function get() {
		return _create.createForm;
	}
});
Object.defineProperty(exports, 'createItem', {
	enumerable: true,
	get: function get() {
		return _create.createItem;
	}
});

var _methods = __webpack_require__(8);

Object.defineProperty(exports, 'getAllFormValue', {
	enumerable: true,
	get: function get() {
		return _methods.getAllFormValue;
	}
});
Object.defineProperty(exports, 'getFormValue', {
	enumerable: true,
	get: function get() {
		return _methods.getFormValue;
	}
});
Object.defineProperty(exports, 'setFormValue', {
	enumerable: true,
	get: function get() {
		return _methods.setFormValue;
	}
});
Object.defineProperty(exports, 'getFormDisabled', {
	enumerable: true,
	get: function get() {
		return _methods.getFormDisabled;
	}
});
Object.defineProperty(exports, 'setFormDisabled', {
	enumerable: true,
	get: function get() {
		return _methods.setFormDisabled;
	}
});
Object.defineProperty(exports, 'formShow', {
	enumerable: true,
	get: function get() {
		return _methods.formShow;
	}
});
Object.defineProperty(exports, 'formHide', {
	enumerable: true,
	get: function get() {
		return _methods.formHide;
	}
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getAllFormValue = getAllFormValue;
exports.getFormValue = getFormValue;
exports.setFormValue = setFormValue;
exports.getFormDisabled = getFormDisabled;
exports.setFormDisabled = setFormDisabled;
exports.formShow = formShow;
exports.formHide = formHide;
// 获取所有表单数据
function getAllFormValue() {
	var state = this.state;

	return state.form;
}

// 获取表单中某个字段的值
function getFormValue(moduleId, itemId) {
	this.state.form[moduleId][key] = this.state.form[moduleId][key] || {};
	var state = this.state;

	return state.form[moduleId][itemId].value;
}

// 设置表单中某个字段的值
function setFormValue(moduleId, values) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.keys(values)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _key = _step.value;

			if (_key) {
				this.state.form[moduleId][_key] = this.state.form[moduleId][_key] || {};
				this.state.form[moduleId][_key].value = values[_key];
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	this.setState({ form: this.state.form });
}

// 获取表单编辑性
function getFormDisabled(moduleId, id) {
	this.state.form[moduleId][key] = this.state.form[moduleId][key] || {};
	return !!this.state.form[moduleId][id].disabled;
}

// 设置表单编辑性
function setFormDisabled(moduleId, values) {
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = Object.keys(values)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var _key2 = _step2.value;

			if (_key2) {
				this.state.form[moduleId][_key2] = this.state.form[moduleId][_key2] || {};
				this.state.form[moduleId][_key2].disabled = values[_key2];
			}
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	this.setState({ form: this.state.form });
}

// 设置表单可见
function formShow(id) {}
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


// 设置表单隐藏
function formHide(id) {
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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
	_inherits(Input, _Component);

	function Input() {
		_classCallCheck(this, Input);

		return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
	}

	_createClass(Input, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    value = _props.value,
			    onChange = _props.onChange,
			    others = _objectWithoutProperties(_props, ['value', 'onChange']);

			return _react2.default.createElement('input', _extends({ value: this.props.value, onChange: function onChange(e) {
					return void _this2.props.onChange(e.target.value);
				} }, others));
		}
	}]);

	return Input;
}(_react.Component);

exports.default = Input;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPage = undefined;

var _Page = __webpack_require__(1);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createPage = _Page2.default;

/***/ })
/******/ ]);
});