"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Prototype Methods

var Polygon = function () {
    function Polygon(height, width) {
        _classCallCheck(this, Polygon);

        this.height = height;
        this.width = width;
    }

    _createClass(Polygon, [{
        key: "calcArea",
        value: function calcArea() {
            return this.height * this.width;
        }
    }, {
        key: "area",
        get: function get() {
            return this.calcArea();
        }
    }]);

    return Polygon;
}();

var square = new Polygon(10, 10);

console.log(square.area);

//Static methods

var Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
    }

    _createClass(Point, null, [{
        key: "distance",
        value: function distance(a, b) {
            var dx = a.x - b.x;
            var dy = a.y - b.y;

            return Math.sqrt(dx * dx + dy * dy);
        }
    }]);

    return Point;
}();

var p1 = new Point(5, 5);
var p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));

//Sb classing with extends

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: "speak",
        get: function get() {
            console.log(this.name + " make a noice.");
        }
    }, {
        key: "yourname",
        set: function set(name) {
            this.name = name;
        }
    }]);

    return Person;
}();

// Person.prototype.speak = function () {
//   console.log(this.name + ' makes a noise.');
// }

var ThaiPeople = function (_Person) {
    _inherits(ThaiPeople, _Person);

    function ThaiPeople() {
        _classCallCheck(this, ThaiPeople);

        return _possibleConstructorReturn(this, (ThaiPeople.__proto__ || Object.getPrototypeOf(ThaiPeople)).apply(this, arguments));
    }

    _createClass(ThaiPeople, [{
        key: "speak",
        value: function speak() {
            //super.speak(); //Super class calls with super
            console.log(this.name + " speak in Thai langauge.");
        }
    }]);

    return ThaiPeople;
}(Person);

var thai = new ThaiPeople('CodeCoo');
//thai.yourname='CodeCoo1'; //settle
thai.speak(); // getter