
          window.__NEXT_REGISTER_PAGE('/sharePage', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _graphqlTools = __webpack_require__(905);

var _mongoConector = __webpack_require__(999);

var _mongoConector2 = _interopRequireDefault(_mongoConector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var prepare = function prepare(o) {
  o._id = o._id.toString();
  return o;
};
var typeDefs = ['\ntype data_1 {\n   id: ID!     \n   idNo: String \n   image: String          # "!" denotes a required field\n   name: String\n   score: String\n}\n# This type specifies the entry points into our API. In this case\n# there is only one - "channels" - which returns a list of channels.\ntype Query {\n  data : [data_1]    # "[]" means this is a list of channels\n}\n'];
var resolvers = {
  Query: {
    data: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(root, _ref) {
        var id = _ref.id;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = prepare;
                _context.next = 3;
                return _mongoConector2.default.findOne(ObjectId(id));

              case 3:
                _context.t1 = _context.sent;
                return _context.abrupt('return', (0, _context.t0)(_context.t1));

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      function data(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return data;
    }()
  },
  data_1: {}
};
exports.default = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs, resolvers: resolvers });

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/tbap/Desktop/desktop/serverExtWork/pages/schema.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/tbap/Desktop/desktop/serverExtWork/pages/schema.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/schema")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 1077:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1078:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1079:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1080:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1081:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1082:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(800);


/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(998);

var _link2 = _interopRequireDefault(_link);

var _data_page = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../components/data_page1\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _data_page2 = _interopRequireDefault(_data_page);

var _schema = __webpack_require__(1000);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/tbap/Desktop/desktop/serverExtWork/pages/sharePage.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/tbap/Desktop/desktop/serverExtWork/pages/sharePage.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/sharePage")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongodb = __webpack_require__(988);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

// 1
var MONGO_URL = 'mongodb://localhost:27017/labdoor';

// 2
module.exports = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  var db;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _mongodb.MongoClient.connect(MONGO_URL);

        case 2:
          db = _context.sent;
          return _context.abrupt('return', { list_1: db.collection('list_1') });

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this);
}));

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/tbap/Desktop/desktop/serverExtWork/pages/mongo-conector.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/tbap/Desktop/desktop/serverExtWork/pages/mongo-conector.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/mongo-conector")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

},[1082]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9zaGFyZVBhZ2UuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zY2hlbWEuanM/ODQ0MWU1ZiIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKT84NDQxZTVmIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT9iY2I3Iiwid2VicGFjazovLy92ZXJ0eCAoaWdub3JlZCk/ODQ0MWU1ZiIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/YzhkMiIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/ODQ0MWU1ZiIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zaGFyZVBhZ2UuanM/ODQ0MWU1ZiIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tb25nby1jb25lY3Rvci5qcz84NDQxZTVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSAnZ3JhcGhxbC10b29scyc7XG5pbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gJy4vbW9uZ28tY29uZWN0b3InXG5jb25zdCBwcmVwYXJlID0gKG8pID0+IHtcbiAgby5faWQgPSBvLl9pZC50b1N0cmluZygpXG4gIHJldHVybiBvXG59XG5jb25zdCB0eXBlRGVmcyA9WyBgXG50eXBlIGRhdGFfMSB7XG4gICBpZDogSUQhICAgICBcbiAgIGlkTm86IFN0cmluZyBcbiAgIGltYWdlOiBTdHJpbmcgICAgICAgICAgIyBcIiFcIiBkZW5vdGVzIGEgcmVxdWlyZWQgZmllbGRcbiAgIG5hbWU6IFN0cmluZ1xuICAgc2NvcmU6IFN0cmluZ1xufVxuIyBUaGlzIHR5cGUgc3BlY2lmaWVzIHRoZSBlbnRyeSBwb2ludHMgaW50byBvdXIgQVBJLiBJbiB0aGlzIGNhc2VcbiMgdGhlcmUgaXMgb25seSBvbmUgLSBcImNoYW5uZWxzXCIgLSB3aGljaCByZXR1cm5zIGEgbGlzdCBvZiBjaGFubmVscy5cbnR5cGUgUXVlcnkge1xuICBkYXRhIDogW2RhdGFfMV0gICAgIyBcIltdXCIgbWVhbnMgdGhpcyBpcyBhIGxpc3Qgb2YgY2hhbm5lbHNcbn1cbmBdOyAgXG5jb25zdCByZXNvbHZlcnMgPXtcbiAgICBRdWVyeTp7XG4gICAgICBkYXRhOiBhc3luYyhyb290LHtpZH0pID0+IHtcbiAgICAgICAgcmV0dXJuIHByZXBhcmUoYXdhaXQgY29ubmVjdE1vbmdvLmZpbmRPbmUoT2JqZWN0SWQoaWQpKSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGRhdGFfMTp7XG5cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBtYWtlRXhlY3V0YWJsZVNjaGVtYSh7IHR5cGVEZWZzICxyZXNvbHZlcnN9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3NjaGVtYS5qcyIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGNyeXB0byAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDEwNzdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLyogKGlnbm9yZWQpICovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gdXRpbCAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDEwNzhcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLyogKGlnbm9yZWQpICovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gdmVydHggKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSAxMDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIHV0aWwgKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSAxMDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIHV0aWwgKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSAxMDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBEYXRhQ29tIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0YV9wYWdlMSdcbmltcG9ydCBzY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5cbiBcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGNcIj5cbiAgICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD1VVEYtOFwiIGh0dHAtZXF1aXY9XCJjb250ZW50LXR5cGVcIi8+XG4gICAgICAgICAgICAgICAgIDx0aXRsZT5sYWJkb29yPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxuICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3RhY2h5b25zL2Nzcy90YWNoeW9ucy5taW4uY3NzXCIvPlxuICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHA6Ly9ucG1jZG4uY29tL3RhY2h5b25zLXNraW5zQDQuMC4wL2Nzcy90YWNoeW9ucy1za2lucy5taW4uY3NzXCIgLz5cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWUgPVwicGEzICB0YyAgcGE0LW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rIGRpbSBibGFjayAgIGY2IGY1LW5zIGRpYiBtcjNcIiBocmVmPVwiI1wiIHRpdGxlPVwiSG9tZVwiPmxhYmRvb3I8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rIGRpbSBncmF5ICAgZjYgZjUtbnMgZGliIG1yM1wiIGhyZWY9XCIjXCIgdGl0bGU9XCJhYm91dFwiPkFib3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluayBkaW0gZ3JheSAgIGY2IGY1LW5zIGRpYiBtcjNcIiBocmVmPVwiI1wiIHRpdGxlPVwicmFua1wiPlJhbmtpbmdzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluayBkaW0gZ3JheSAgIGY2IGY1LW5zIGRpYiBtcjNcIiBocmVmPVwiI1wiIHRpdGxlPVwiTWFnXCI+TWFnYXppbmVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluayBkaW0gZ3JheSAgIGY2IGY1LW5zIGRpYiBtcjNcIiBocmVmPVwiI1wiIHRpdGxlPVwibG9nSW5cIj5sb2cgaW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rIGRpbSBncmF5ICAgZjYgZjUtbnMgZGliIG1yM1wiIGhyZWY9XCIjXCIgdGl0bGU9XCJzaWduXCI+c2lnbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmsgZGltIGdyYXkgICBmNiBmNS1ucyBkaWIgbXIzXCIgaHJlZj1cIiNcIiB0aXRsZT1cImNhcnRcIj5jYXJ0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluayBkaW0gZ3JheSAgIGY2IGY1LW5zIGRpYiBtcjNcIiBocmVmPVwiI1wiIHRpdGxlPVwic2VhcmNoXCI+c2VhcmNoPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWUgPVwidGNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4gVE9QIDEwIFBST0JJT1RJQ1MgU1VQUExFTUVOVCA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VlIG91ciB4eCBwcm9kdWN0IHJlcG9ydHMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBoMyB0Y1wiPlxuICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRjIGY2IGxpbmsgZGltIGJyMiBwaDMgcHYyIG1iMiBkaWIgd2hpdGUgYmctbmVhci1ibGFja1wiIGhyZWY9XCIjMFwiPlF1YWxpdHk8L2E+XG4gICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGMgZjYgbGluayBkaW0gYnIyIHBoMyBwdjIgbWIyIGRpYiB3aGl0ZSBiZy1uZWFyLWJsYWNrXCIgaHJlZj1cIiMwXCI+VmFsdWU8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICBcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiIG13NCBjZW50ZXIgIFwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZmllbGRzZXQgaWQ9XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YyBkaWJcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtcjJcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImFsbFwiIHZhbHVlPVwiYWxsXCIvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFsbFwiIGNsYXNzTmFtZT1cImxoLWNvcHlcIj5BbGwgUHJvZHVjdHM8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRjIGRpYlwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm1yMlwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiQmFjaWxsdXNcIiB2YWx1ZT1cIkJhY2lsbHVzXCIvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkJhY2lsbHVzXCIgY2xhc3NOYW1lPVwibGgtY29weVwiPkJhY2lsbHVzPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YyBkaWJcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtcjJcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIkJpZmlkb2JhY3Rlcml1bVwiIHZhbHVlPVwiQmlmaWRvYmFjdGVyaXVtXCIvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkJpZmlkb2JhY3Rlcml1bVwiIGNsYXNzTmFtZT1cImxoLWNvcHlcIj5CaWZpZG9iYWN0ZXJpdW08L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRjIGRpYlwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm1yMlwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiRW50ZXJvY29jY3VzXCIgdmFsdWU9XCJFbnRlcm9jb2NjdXNcIi8+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiRW50ZXJvY29jY3VzXCIgY2xhc3NOYW1lPVwibGgtY29weVwiPkVudGVyb2NvY2N1czwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGMgZGliXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibXIyXCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJMYWN0b2JhY2lsbHVzXCIgdmFsdWU9XCJMYWN0b2JhY2lsbHVzXCIvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkxhY3RvYmFjaWxsdXNcIiBjbGFzc05hbWU9XCJsaC1jb3B5XCI+TGFjdG9iYWNpbGx1czwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGMgZGliXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibXIyXCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJMZWN0b2NvY2N1c1wiIHZhbHVlPVwiTGVjdG9jb2NjdXNcIi8+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiTGVjdG9jb2NjdXNcIiBjbGFzc05hbWU9XCJsaC1jb3B5XCI+TGVjdG9jb2NjdXM8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRjIGRpYlwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm1yMlwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiU2FjY2hhcm9teWNlc1wiIHZhbHVlPVwiU2FjY2hhcm9teWNlc1wiLz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJTYWNjaGFyb215Y2VzXCIgY2xhc3NOYW1lPVwibGgtY29weVwiPlNhY2NoYXJvbXljZXM8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRjIGRpYlwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm1yMlwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiU3RyZXB0b2NvY2N1c1wiIHZhbHVlPVwiU3RyZXB0b2NvY2N1c1wiLz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJTdHJlcHRvY29jY3VzXCIgY2xhc3NOYW1lPVwibGgtY29weVwiPlN0cmVwdG9jb2NjdXM8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICBcbiAgICAgICAgPC9mb3JtPlxuICAgICBcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibXc2IGNlbnRlciB0Y1wiPlxuICAgICAgICAgICAgPERhdGFDb20vPlxuICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIFxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3NoYXJlUGFnZS5qcz9lbnRyeSIsImltcG9ydCB7TW9uZ29DbGllbnQgLE9iamVjdElkfSBmcm9tICdtb25nb2RiJztcblxuLy8gMVxuY29uc3QgTU9OR09fVVJMID0gJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvbGFiZG9vcic7XG5cbi8vIDJcbm1vZHVsZS5leHBvcnRzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoTU9OR09fVVJMKTtcbiAgcmV0dXJuIHtsaXN0XzE6IGRiLmNvbGxlY3Rpb24oJ2xpc3RfMScpfTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9tb25nby1jb25lY3Rvci5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQWNBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUpBO0FBUUE7QUFUQTtBQVNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7OztBQUVBO0FBR0E7QUFIQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUtBO0FBTEE7QUFBQTs7Ozs7QUE1RUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        