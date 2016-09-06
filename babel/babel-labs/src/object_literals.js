var model = 'Honda City 2010';
var mycar ={
    "":"No My Car",
    "!":"Car My Cash",
    "price":500000,
    [ 'year_' + (() => 2010)() ]: 2010, //dynamic property
    model, //shorthand for model
    toString(){
        return "My Car is the "+this.model
    }
}
console.log(mycar.toString());
console.log(mycar[""]); //No My Car
console.log(mycar["!"]); //Car My Cash