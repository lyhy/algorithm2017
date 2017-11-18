var Foo = function( a ) {
    //this.a = a;

    function bar() {
        return a;
    }
    this.baz = function() {
        return a;
    };
};

Foo.prototype = {
    biz: function() {
        return a;
    }
};

var f = new Foo( 7 );
console.log(f.bar()); // bar is undefined,
//console.log(f.baz()); // answer: 7
//console.log(f.biz()); // answer: undefined