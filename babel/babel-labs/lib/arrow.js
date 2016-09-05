"use strict";

[1, 2, 3, 4].map(function (x) {
    return x * x;
});

var odds = [];

[1, 2, 3, 4, 5, 6].forEach(function (x) {
    if (x % 2 === 0) {
        odds.push(x);
    }
});

var odds = [1, 2, 3, 4, 5, 6].map(function (x) {
    return x % 2;
});

var person = {
    _name: "CodeCoo",
    _friends: [],
    printFriends: function printFriends() {
        var _this = this;

        this._friends.forEach(function (x) {
            console.log(_this._name + " knows " + x);
        });
    }
};

person.printFriends();