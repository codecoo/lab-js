// Set
var s= new Set();
s.add('A').add('B').add('C');
console.log('s size',s.size);
console.log('s has B value',s.has('B'));

// Maps
var m= new Maps();
m.set('hello',42);
m.get('hello') == 42;

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });