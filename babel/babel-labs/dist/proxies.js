'use strict';

// Proxying a normal object
var target = {};
var handler = {
  get: function get(receiver, name) {
    return 'Hello, ' + name + '!';
  }
};

var p = new Proxy(target, handler);
console.log(p.world === 'Hello, world!');

// Proxying a function object
var target = function target() {
  return 'I am the target';
};
var handler = {
  apply: function apply(receiver) {
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