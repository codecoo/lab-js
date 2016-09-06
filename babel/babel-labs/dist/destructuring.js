'use strict';

// list matching
var _ref = [1, 2, 3];
var _ref$ = _ref[0];
var a = _ref$ === undefined ? 0 : _ref$;
var b = _ref[2];

console.log('a === 1', a === 1);
console.log('b === 3', b === 3);

// Fail-soft destructuring
var _ref2 = [];
var a = _ref2[0];

console.log('a === undefined', a === undefined);

// Fail-soft destructuring with defaults
var _ref3 = [];
var _ref3$ = _ref3[0];
var a = _ref3$ === undefined ? 1 : _ref3$;

console.log('a === 1', a === 1);

function g(_ref4) {
  var x = _ref4.name;

  console.log(x);
}
g({ name: 5 });

function r(_ref5) {
  var x = _ref5.x;
  var y = _ref5.y;
  var _ref5$w = _ref5.w;
  var w = _ref5$w === undefined ? 10 : _ref5$w;
  var _ref5$h = _ref5.h;
  var h = _ref5$h === undefined ? 10 : _ref5$h;

  return x + y + w + h;
}
console.log('r({x:1, y:2}) === 23', r({ x: 1, y: 2 }) === 23);