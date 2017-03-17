"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InlineTex = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _katex = require('katex');

var _katex2 = _interopRequireDefault(_katex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InlineTex = function (_Component) {
    _inherits(InlineTex, _Component);

    function InlineTex() {
        _classCallCheck(this, InlineTex);

        return _possibleConstructorReturn(this, (InlineTex.__proto__ || Object.getPrototypeOf(InlineTex)).apply(this, arguments));
    }

    _createClass(InlineTex, [{
        key: 'render',
        value: function () {
            function render() {
                var _props = this.props,
                    texContent = _props.texContent,
                    texSeperator = _props.texSeperator;

                var pattern = new RegExp("\\" + texSeperator + "(.*?)\\" + texSeperator, "g");
                var html = texContent.replace(pattern, function (x) {
                    var string = x.split(new RegExp("\\" + texSeperator))[1];
                    return string ? _katex2['default'].renderToString(string, { "throwOnError": false }) : "";
                });
                return _react2['default'].createElement('span', { dangerouslySetInnerHTML: { __html: html } });
            }

            return render;
        }()
    }]);

    return InlineTex;
}(_react.Component);

InlineTex.defaultProps = {
    "texContent": '',
    "texSeperator": '${2}'
};

exports.InlineTex = InlineTex;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tex = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _katex = require('katex');

var _katex2 = _interopRequireDefault(_katex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tex = exports.Tex = function (_Component) {
    _inherits(Tex, _Component);

    function Tex() {
        _classCallCheck(this, Tex);

        return _possibleConstructorReturn(this, (Tex.__proto__ || Object.getPrototypeOf(Tex)).apply(this, arguments));
    }

    _createClass(Tex, [{
        key: 'render',
        value: function () {
            function render() {
                var texContent = this.props.texContent;

                var katexString = _katex2['default'].renderToString(texContent, { "throwOnError": false });
                return _react2['default'].createElement('span', { dangerouslySetInnerHTML: { __html: katexString } });
            }

            return render;
        }()
    }]);

    return Tex;
}(_react.Component);
