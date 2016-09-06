'use strict';

// General 

var func = function func(x) {
    return x * x;
}; // concise syntax, implied "return"
var func = function func(x, y) {
    return x + y;
}; // with block body, explicit "return" needed
var func = function func() {
    return { foo: 1 };
}; // return object literal
var func = function func() {
    return { foo: function foo() {} };
}; // return method

//Loops

var even = [];
[1, 2, 3, 4, 5, 6].forEach(function (x) {
    if (x % 2 === 0) {
        even.push(x);
    }
});
console.log('Output #1', even);
var double = [];
double = [1, 2, 3, 4, 5, 6].map(function (x) {
    return x * 2;
});
console.log('Output #2', double);

//Class
var person = {
    _name: "CodeCoo",
    _friends: ['Lisa', 'Obama'],
    printFriends: function printFriends() {
        var _this = this;

        this._friends.forEach(function (x) {
            console.log(_this._name + " knows " + x);
        });
    }
};
person.printFriends();

//With Rest Parameter

var f = function f() {
    return arguments.length <= 0 ? undefined : arguments[0];
};
console.log('Args is ', f(1)); // 1

//More examples

(function () {
    return "foobar";
})(); // IIFE, returns "foobar"

var simple = function simple(a) {
    return a > 15 ? 15 : a;
};
simple(16); // 15

var max = function max(a, b) {
    return a > b ? a : b;
};

//all array & filtering & Mapping

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce(function (a, b) {
    return a + b;
}); // 66
var even = arr.filter(function (v) {
    return v % 2 == 0;
}); // [6, 0, 18]
var double = arr.map(function (v) {
    return v * 2;
}); // [10, 12, 26, 0, 2, 36, 46]