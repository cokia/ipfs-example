'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slash = require('slash');

var _slash2 = _interopRequireDefault(_slash);

var _helper = require('./helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replacePrefix = function replacePrefix(path) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var sourceFile = arguments[2];

  if ('paths' in opts) {
    opts = opts['paths'];
  }

  var options = [].concat(opts);

  for (var i = 0; i < options.length; i++) {
    var rootPathSuffix = '';
    var rootPathPrefix = '';
    var option = options[i];

    if (option.rootPathSuffix && typeof option.rootPathSuffix === 'string') {
      rootPathSuffix = option.rootPathSuffix;
    }
    if (option.rootPathPrefix && typeof option.rootPathPrefix === 'string') {
      rootPathPrefix = option.rootPathPrefix;
    } else {
      rootPathPrefix = '~';
    }

    if ((0, _helper.hasRootPathPrefixInString)(path, rootPathPrefix)) {
      return (0, _helper.transformRelativeToRootPath)(path, rootPathSuffix, rootPathPrefix, (0, _slash2.default)(sourceFile));
    }
  }

  return path;
};

/**
 * Recursively traverses binary  expressions to find the first `StringLiteral` if any.
 * @param  {Object} t           Babel types
 * @param  {Node} arg           a Babel node
 * @return {StringLiteral?}
 */
var traverseExpression = function traverseExpression(t, arg) {
  if (t.isStringLiteral(arg)) {
    return arg;
  }

  if (t.isBinaryExpression(arg)) {
    return traverseExpression(t, arg.left);
  }

  return null;
};

exports.default = function (_ref) {
  var t = _ref['types'];

  var visitor = {
    CallExpression: function CallExpression(path, state) {
      if (!(path.node.callee.name === 'require' || t.isImport(path.node.callee))) {
        return;
      }

      var args = path.node.arguments;
      if (!args.length) {
        return;
      }

      var firstArg = traverseExpression(t, args[0]);

      if (firstArg) {
        firstArg.value = replacePrefix(firstArg.value, state.opts, state.file.opts.filename);
      }
    },
    ImportDeclaration: function ImportDeclaration(path, state) {
      path.node.source.value = replacePrefix(path.node.source.value, state.opts, state.file.opts.filename);
    },
    ExportNamedDeclaration: function ExportNamedDeclaration(path, state) {
      if (path.node.source) {
        path.node.source.value = replacePrefix(path.node.source.value, state.opts, state.file.opts.filename);
      }
    },
    ExportAllDeclaration: function ExportAllDeclaration(path, state) {
      if (path.node.source) {
        path.node.source.value = replacePrefix(path.node.source.value, state.opts, state.file.opts.filename);
      }
    }
  };
  return {
    'visitor': {
      Program: function Program(path, state) {
        path.traverse(visitor, state);
      }
    }
  };
};