// Proxying a normal object
var target = {};
var handler = {
  get: function (receiver, name) {
    return `Hello, ${name}!`;
  }
};

var p = new Proxy(target, handler);
console.log(p.world === 'Hello, world!');

// Proxying a function object
var target = function () { return 'I am the target'; };
var handler = {
  apply: function (receiver, ...args) {
    return 'I am the proxy';
  }
};

var p = new Proxy(target, handler);
p() === 'I am the proxy';

// var handler =
// {
//   get:...,
//   set:...,
//   has:...,
//   deleteProperty:...,
//   apply:...,
//   construct:...,
//   getOwnPropertyDescriptor:...,
//   defineProperty:...,
//   getPrototypeOf:...,
//   setPrototypeOf:...,
//   enumerate:...,
//   ownKeys:...,
//   preventExtensions:...,
//   isExtensible:...
// }