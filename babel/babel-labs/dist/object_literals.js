"use strict";

var _mycar;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var model = 'Honda City 2010';
var mycar = (_mycar = {
    "": "No My Car",
    "!": "Car My Cash",
    "price": 500000
}, _defineProperty(_mycar, 'year_' + function () {
    return 2010;
}(), 2010), _defineProperty(_mycar, "model", model), _defineProperty(_mycar, "toString", function toString() {
    return "My Car is the " + this.model;
}), _mycar);
console.log(mycar.toString());
console.log(mycar[""]); //No My Car
console.log(mycar["!"]); //Car My Cash