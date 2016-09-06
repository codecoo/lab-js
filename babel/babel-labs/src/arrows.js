
// General 

var func = x => x * x;                  // concise syntax, implied "return"
var func = (x, y) => { return x + y; }; // with block body, explicit "return" needed
var func = () => ({  foo: 1  });         // return object literal
var func = () => ({foo: function() {} });   // return method

//Loops

var even=[];
[1,2,3,4,5,6].forEach(x=>{
  if(x%2===0){
      even.push(x);
  }
})
console.log('Output #1',even);
var double=[];
double=[1,2,3,4,5,6].map(x=>x*2);
console.log('Output #2',double);

//Class
var person = {
    _name:"CodeCoo",
    _friends:['Lisa','Obama'],
    printFriends(){
        this._friends.forEach(x=>{
            console.log(this._name+" knows "+x);
        });

    }
}
person.printFriends();

//With Rest Parameter

var f = (...args)=>args[0];
console.log('Args is ',f(1)); // 1

//More examples

(() => "foobar")() // IIFE, returns "foobar"

var simple = a => a > 15 ? 15 : a; 
simple(16); // 15

let max = (a, b) => a > b ? a : b;

//all array & filtering & Mapping

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b);  // 66
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]