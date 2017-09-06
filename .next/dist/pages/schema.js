'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _graphqlTools = require('graphql-tools');

var _mongoConector = require('./mongo-conector');

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