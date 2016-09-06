//Prototype Methods

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }  
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Polygon(10, 10);

console.log(square.area);

//Static methods

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));

//Sb classing with extends

class Person {
    constructor(name){
        this.name=name
    }
    get speak(){
        console.log(this.name+" make a noice.");
    }
    set yourname(name) {
      this.name = name;
    }
}

// Person.prototype.speak = function () {
//   console.log(this.name + ' makes a noise.');
// }

class ThaiPeople extends Person{
    speak(){
        //super.speak(); //Super class calls with super
       console.log(this.name+" speak in Thai langauge.");
    }
}

var thai = new ThaiPeople('CodeCoo');
//thai.yourname='CodeCoo1'; //settle
thai.speak(); // getter

