"use strict";

//Default 
function f(x) {
  var y = arguments.length <= 1 || arguments[1] === undefined ? 12 : arguments[1];

  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
console.log("f(3) == 15", f(3) == 15);

//Spread & Rest Parameter
function f(x) {
  // y is an Array
  return x * (arguments.length <= 1 ? 0 : arguments.length - 1);
}

console.log("f(3, \"hello\", true) == 6", f(3, "hello", true));

function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
console.log('f(...[1,2,3]) == 6', f.apply(undefined, [1, 2, 3]) == 6);