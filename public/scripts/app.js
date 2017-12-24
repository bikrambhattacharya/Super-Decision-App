'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecison = function (_React$Component) {
    _inherits(Indecison, _React$Component);

    function Indecison(props) {
        _classCallCheck(this, Indecison);

        var _this = _possibleConstructorReturn(this, (Indecison.__proto__ || Object.getPrototypeOf(Indecison)).call(this, props));

        _this.handleDeleteAll = _this.handleDeleteAll.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteoption = _this.handleDeleteoption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(Indecison, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }

                console.log("did mount");
            } catch (e) {
                //do nothing
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
                console.log('Saving Data');
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('will unmount');
        }
    }, {
        key: 'handleDeleteAll',
        value: function handleDeleteAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteoption',
        value: function handleDeleteoption(optiontoRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optiontoRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            } else {
                this.setState(function (prevState) {
                    return { options: prevState.options.concat(option) };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            // const title = "Indecision App";
            var subtitle = "Put your life in the hand of a computer";
            return _jsx('div', {}, void 0, _jsx(Header, {
                subtitle: subtitle
            }), _jsx(Action, {
                hasOptions: this.state.options.length > 0,
                pick: this.handlePick
            }), _jsx(Options, {
                options: this.state.options,
                handleDeleteOptions: this.handleDeleteAll,
                handleDeleteoption: this.handleDeleteoption
            }), _jsx(Form, {
                handleAddOption: this.handleAddOption
            }));
        }
    }]);

    return Indecison;
}(React.Component);

Indecison.defaultProps = {
    options: []
};
var Header = function Header(props) {
    return _jsx('div', {}, void 0, _jsx('h1', {}, void 0, props.title), props.subtitle && _jsx('h2', {}, void 0, props.subtitle));
};
Header.defaultProps = {
    title: "Indecision"
};
var Action = function Action(props) {
    return _jsx('div', {}, void 0, _jsx('button', {
        onClick: props.pick,
        disabled: !props.hasOptions
    }, void 0, 'What should i do?'));
};

var _ref = _jsx('p', {}, void 0, 'Please add an option to get started');

var Options = function Options(props) {
    return _jsx('div', {}, void 0, _jsx('button', {
        onClick: props.handleDeleteOptions
    }, void 0, 'Remove All'), props.options.length === 0 && _ref, props.options.map(function (option) {
        return _jsx(Option, {
            optiontext: option,
            handleDeleteoption: props.handleDeleteoption
        }, option);
    }));
};
var Option = function Option(props) {
    return _jsx('div', {}, void 0, 'option:', props.optiontext, _jsx('button', {
        onClick: function onClick(e) {
            props.handleDeleteoption(props.optiontext);
        }
    }, void 0, 'Remove'));
};

var _ref2 = _jsx('input', {
    type: 'text',
    placeholder: 'Enter your option here',
    name: 'option'
});

var _ref3 = _jsx('button', {}, void 0, 'Add Option');

var Form = function (_React$Component2) {
    _inherits(Form, _React$Component2);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this2 = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this2.addOption = _this2.addOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(Form, [{
        key: 'addOption',
        value: function addOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });
            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, this.state.error && _jsx('p', {}, void 0, this.state.error), _jsx('form', {
                onSubmit: this.addOption
            }, void 0, _ref2, _ref3));
        }
    }]);

    return Form;
}(React.Component);

ReactDOM.render(_jsx(Indecison, {}), document.getElementById('app'));
