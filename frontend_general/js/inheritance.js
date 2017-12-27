/**
 * Inheritance 1
 */
    /*

var Parent = function() {
    this.name = 'parent';

};

Parent.prototype.getName = function() {
    return this.name;
}

var p = new Parent();

var Child = function(){}

var inheritance = function(C, P) {
    C.prototype = new P();
}

inheritance(Child, Parent);

var c = new Child();
//c.name = "Patrick";

Parent.prototype.getNewName = function() {
    return this.name + 'new';
}
p.name = 'new parent name'

console.log(c.name);
console.log(c.name);
console.log(p.name);
console.log(c.getName());
console.log(p.getName());

console.log(c.getNewName());
console.log(p.getNewName());

console.log(c.hasOwnProperty('name'));
console.log(p.hasOwnProperty('name'));
console.log(c.hasOwnProperty('getName'));
console.log(p.hasOwnProperty('getName'));

*/

/**
 *2
 */
var klass = function (Parent, props) {
    var Child, F, i;
// 1.
// new constructor
Child = function () {
    if (Child.uber && Child.uber.hasOwnProperty("__construct")) {
        Child.uber.__construct.apply(this, arguments);
    }
    if (Child.prototype.hasOwnProperty("__construct")) {
        Child.prototype.__construct.apply(this, arguments);
    }
}
// 2.
// inherit
Parent = Parent || Object;
F = function () {};
F.prototype = Parent.prototype;
Child.prototype = new F();
Child.uber = Parent.prototype;
Child.prototype.constructor = Child;
// 3.
// add implementation methods
 for (i in props) {
if (props.hasOwnProperty(i)) {
    Child.prototype[i] = props[i];
}
 }
// return the "class"
return Child;
};

var Man = klass(null, { __construct: function (what) {
    console.log("Man's constructor");
    this.name = what; },
    getName: function () {
        return this.name; }
});

var SuperMan = klass(Man, {
    __construct: function (what) {
        console.log("SuperMan's constructor");
    },
    getName: function () {
        var name = SuperMan.uber.getName.call(this);
        return "I am " + name;
    }
})
var clark = new SuperMan('Clark Kent');
console.log(clark.getName()); // "I am Clark Kent"
console.log(clark instanceof Man); // true
console.log(clark instanceof SuperMan); // true




