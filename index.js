"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineTex = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _katex = _interopRequireDefault(require("katex"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var InlineTex = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(InlineTex, _Component);

  var _super = _createSuper(InlineTex);

  function InlineTex() {
    (0, _classCallCheck2["default"])(this, InlineTex);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(InlineTex, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          texContent = _this$props.texContent,
          texSeperator = _this$props.texSeperator;
      var pattern = new RegExp("\\" + texSeperator + "(.*?)\\" + texSeperator, "g");
      var html = texContent.replace(pattern, function (x) {
        var string = x.split(new RegExp("\\" + texSeperator))[1];
        return string ? _katex["default"].renderToString(string, {
          "throwOnError": false
        }) : "";
      });
      return /*#__PURE__*/_react["default"].createElement("span", {
        dangerouslySetInnerHTML: {
          __html: html
        }
      });
    }
  }]);
  return InlineTex;
}(_react.Component);

exports.InlineTex = InlineTex;
InlineTex.defaultProps = {
  "texContent": '',
  "texSeperator": '${2}'
};
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tex = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _katex = _interopRequireDefault(require("katex"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Tex = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Tex, _Component);

  var _super = _createSuper(Tex);

  function Tex() {
    (0, _classCallCheck2["default"])(this, Tex);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Tex, [{
    key: "render",
    value: function render() {
      var texContent = this.props.texContent;

      var katexString = _katex["default"].renderToString(texContent, {
        "throwOnError": false
      });

      return /*#__PURE__*/_react["default"].createElement("span", {
        dangerouslySetInnerHTML: {
          __html: katexString
        }
      });
    }
  }]);
  return Tex;
}(_react.Component);

exports.Tex = Tex;
