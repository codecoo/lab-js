"use strict";

//Let : Declares a block scope local variable, optionally initializing it to a value.

var x = 1;
if (true) {
  var _x = 2; // different variable
  console.log(_x); // 2
}
console.log(x); // 1


var a = 1; //global
var b = 2; //global

if (a === 1) {
  var a = 11; // the scope is global
  var _b = 22; // the scope is inside the if-block

  console.log(a); // 11
  console.log(_b); // 22
}

console.log(a); // 11
console.log(b); // 2


function go(n) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = n.a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _n = _step.value;

      console.log(_n);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

go({ a: [1, 2, 3] });

//cont : Declares a read-only named constant and holds is immutable

var MY_FAV = 7;
var A = 1;B = 2;

// const also works on objects
var MY_OBJECT = { "key": "value" };

// Use Object.freeze() to make object immutable
//const MY_OBJECT = Object.freeze({"key": "value"});
//MY_OBJECT.key = "otherValue";