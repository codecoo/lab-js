// Basic literal string creation
console.log(`This is a pretty little template string.`);

// Multiline strings
var str=`In ES5 this is
 not legal.`;

console.log(str);

// Interpolate variable bindings
var name = "Bob", time = "today";

console.log(`Hello ${name}, how are you ${time}?`);

// Unescaped template strings
console.log(String.raw`In ES5 "\n" is a line-feed.`);
