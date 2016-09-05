[1,2,3,4].map(x=>x*x)

var odds=[];

[1,2,3,4,5,6].forEach(x=>{
  if(x%2===0){
      odds.push(x);
  }
})

var odds=[1,2,3,4,5,6].map(x=>x%2);

var person = {
    _name:"CodeCoo",
    _friends:[],
    printFriends(){
        this._friends.forEach(x=>{
            console.log(this._name+" knows "+x);
        });
    }
}

person.printFriends();
