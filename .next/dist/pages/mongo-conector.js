'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongodb = require('mongodb');

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