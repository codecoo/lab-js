// list matching
var [a=0, ,b] = [1,2,3];
console.log('a === 1',a === 1);
console.log('b === 3',b === 3);

// Fail-soft destructuring
var [a] = [];
console.log('a === undefined',a === undefined);

// Fail-soft destructuring with defaults
var [a = 1] = [];
console.log('a === 1',a === 1);

function g({name: x}) {
  console.log(x);
}
g({name: 5});

function r({x, y, w = 10, h = 10}) {
  return x + y + w + h;
}
console.log('r({x:1, y:2}) === 23',r({x:1, y:2}) === 23);