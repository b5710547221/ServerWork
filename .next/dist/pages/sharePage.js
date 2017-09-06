'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _data_page = require('../components/data_page1');

var _data_page2 = _interopRequireDefault(_data_page);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tbap/Desktop/desktop/serverExtWork/pages/sharePage.js?entry';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'tc', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement('meta', { content: 'text/html; charset=UTF-8', 'http-equiv': 'content-type', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }), _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, 'labdoor'), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/tachyons/css/tachyons.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'http://npmcdn.com/tachyons-skins@4.0.0/css/tachyons-skins.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }), _react2.default.createElement('style', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }), _react2.default.createElement('div', { className: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement('nav', { className: 'pa3  tc  pa4-ns', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement('a', { className: 'link dim black   f6 f5-ns dib mr3', href: '#', title: 'Home', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, 'labdoor'), _react2.default.createElement('a', { className: 'link dim gray   f6 f5-ns dib mr3', href: '#', title: 'about', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, 'About'), _react2.default.createElement('a', { className: 'link dim gray   f6 f5-ns dib mr3', href: '#', title: 'rank', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, 'Rankings'), _react2.default.createElement('a', { className: 'link dim gray   f6 f5-ns dib mr3', href: '#', title: 'Mag', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, 'Magazines'), _react2.default.createElement('a', { className: 'link dim gray   f6 f5-ns dib mr3', href: '#', title: 'logIn', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, 'log in'), _react2.default.createElement('a', { className: 'link dim gray   f6 f5-ns dib mr3', href: '#', title: 'sign', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'sign'), _react2.default.createElement('a', { className: 'link dim gray   f6 f5-ns dib mr3', href: '#', title: 'cart', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, 'cart'), _react2.default.createElement('a', { className: 'link dim gray   f6 f5-ns dib mr3', href: '#', title: 'search', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'search')), _react2.default.createElement('header', { className: 'tc', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, ' TOP 10 PROBIOTICS SUPPLEMENT '), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'See our xx product reports.'))), _react2.default.createElement('div', { className: 'ph3 tc', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('a', { className: 'tc f6 link dim br2 ph3 pv2 mb2 dib white bg-near-black', href: '#0', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Quality'), _react2.default.createElement('a', { className: 'tc f6 link dim br2 ph3 pv2 mb2 dib white bg-near-black', href: '#0', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Value')), _react2.default.createElement('form', { className: ' mw4 center  ', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('fieldset', { id: 'search', className: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('div', { className: 'tc dib', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('input', { className: 'mr2', type: 'checkbox', id: 'all', value: 'all', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }), _react2.default.createElement('label', { 'for': 'all', className: 'lh-copy', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'All Products')), _react2.default.createElement('div', { className: 'tc dib', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('input', { className: 'mr2', type: 'checkbox', id: 'Bacillus', value: 'Bacillus', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), _react2.default.createElement('label', { 'for': 'Bacillus', className: 'lh-copy', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Bacillus')), _react2.default.createElement('div', { className: 'tc dib', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('input', { className: 'mr2', type: 'checkbox', id: 'Bifidobacterium', value: 'Bifidobacterium', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }), _react2.default.createElement('label', { 'for': 'Bifidobacterium', className: 'lh-copy', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Bifidobacterium')), _react2.default.createElement('div', { className: 'tc dib', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('input', { className: 'mr2', type: 'checkbox', id: 'Enterococcus', value: 'Enterococcus', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }), _react2.default.createElement('label', { 'for': 'Enterococcus', className: 'lh-copy', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Enterococcus')), _react2.default.createElement('div', { className: 'tc dib', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('input', { className: 'mr2', type: 'checkbox', id: 'Lactobacillus', value: 'Lactobacillus', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }), _react2.default.createElement('label', { 'for': 'Lactobacillus', className: 'lh-copy', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Lactobacillus')), _react2.default.createElement('div', { className: 'tc dib', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement('input', { className: 'mr2', type: 'checkbox', id: 'Lectococcus', value: 'Lectococcus', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }), _react2.default.createElement('label', { 'for': 'Lectococcus', className: 'lh-copy', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Lectococcus')), _react2.default.createElement('div', { className: 'tc dib', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('input', { className: 'mr2', type: 'checkbox', id: 'Saccharomyces', value: 'Saccharomyces', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }), _react2.default.createElement('label', { 'for': 'Saccharomyces', className: 'lh-copy', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, 'Saccharomyces')), _react2.default.createElement('div', { className: 'tc dib', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('input', { className: 'mr2', type: 'checkbox', id: 'Streptococcus', value: 'Streptococcus', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }), _react2.default.createElement('label', { 'for': 'Streptococcus', className: 'lh-copy', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, 'Streptococcus')))), _react2.default.createElement('main', { className: 'mw6 center tc', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement(_data_page2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            })));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;