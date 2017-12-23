"use strict";

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var title = "Indecision App";
var subtitle = "Put your life in the hand of a computer";
var options = ['thing one', 'thing two'];

var Indecison = function (_React$Component) {
    _inherits(Indecison, _React$Component);

    function Indecison() {
        _classCallCheck(this, Indecison);

        return _possibleConstructorReturn(this, (Indecison.__proto__ || Object.getPrototypeOf(Indecison)).apply(this, arguments));
    }

    _createClass(Indecison, [{
        key: "render",
        value: function render() {
            return _ref;
        }
    }]);

    return Indecison;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {

            return _jsx("div", {}, void 0, _jsx("h1", {}, void 0, this.props.title), _jsx("h1", {}, void 0, this.props.subtitle));
        }
    }]);

    return Header;
}(React.Component);

var _ref2 = _jsx("div", {}, void 0, _jsx("button", {}, void 0, "What should i do?"));

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return _ref2;
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return _jsx("div", {}, void 0, this.props.options.map(function (option) {
                return _jsx("p", {
                    optiontext: option
                }, option);
            }));
        }
    }]);

    return Options;
}(React.Component);

var _ref3 = _jsx("div", {}, void 0);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return _ref3;
        }
    }]);

    return Option;
}(React.Component);

var _ref4 = _jsx("div", {}, void 0, _jsx("form", {}, void 0, _jsx("input", {
    type: "text",
    placeholder: "Enter your option here"
}), _jsx("button", {}, void 0, "Add Option")));

var Form = function (_React$Component6) {
    _inherits(Form, _React$Component6);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: "render",
        value: function render() {
            return _ref4;
        }
    }]);

    return Form;
}(React.Component);

var _ref = _jsx("div", {}, void 0, _jsx(Header, {
    title: title,
    subtitle: subtitle
}), _jsx(Action, {}), _jsx(Options, {
    option: option
}), _jsx(Option, {}), _jsx(Form, {}));

ReactDOM.render(_jsx(Indecison, {}), document.getElementById('app'));
