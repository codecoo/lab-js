//Let : Declares a block scope local variable, optionally initializing it to a value.

let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
console.log(x);  // 1


var a = 1; //global
var b = 2; //global

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block
 
  console.log(a);  // 11
  console.log(b);  // 22
} 

console.log(a); // 11
console.log(b); // 2


function go(n){
  for (let n of n.a) {
    console.log(n);
  }
}

go({a:[1,2,3]});


//cont : Declares a read-only named constant and holds is immutable

const MY_FAV = 7;
const A = 1; B = 2;

// const also works on objects
const MY_OBJECT = {"key": "value"};

// Use Object.freeze() to make object immutable
//const MY_OBJECT = Object.freeze({"key": "value"});
//MY_OBJECT.key = "otherValue"; 
