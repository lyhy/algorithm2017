/*
function Person() {

    var insideName = 'inside wj';
    if(!(this instanceof Person)){
        return new Person();
    }
    this.name = 'wj';
    this.getName = function() {
        return insideName;
    }


}

var p = new Person();
var p1 = Person();
console.log(p.name);
console.log(p.getName());
console.log(p.insideName);
console.log(p1.name);

Person.prototype.age = 10;

console.log(p.age);
console.log(p1.age);
    */



function Person(){
    //return a new object, prototype chain broke, could not add new public function by prototype
    //return {
    //    getName: function(){
    //        return 'wj'
    //    }
    //}


    this.getName = function(){
        return 'wj'
    }

}

Person.prototype.getAge = function() {
    return 7;
}

var a = new Person();
console.log(a.getName())
console.log(a.getAge())