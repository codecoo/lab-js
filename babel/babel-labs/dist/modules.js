"use strict";

var _math = require("./math");

var _math2 = _interopRequireDefault(_math);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _math2.default)("2π = " + (0, _math.sum)(_math.pi, _math.pi));

// Dynamic loading – ‘System’ is default loader
//import * as math from "./math" 
System.import('lib/math').then(function (m) {
  alert("2π = " + m.sum(m.pi, m.pi));
});