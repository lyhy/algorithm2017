var F = function() {
    var ages = [];
    var instance = null;

    function createInstance(){

    }
    return {
        getAges: function(){
            return ages;
        },

        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }

            return instance;
        },

        setAges: function(age){
            ages.push(age);
        }
    }
};

var f1 = new F();
var f2 = new F();
f1.setAges(1);
f2.setAges(2);

console.log(f1.getAges());
console.log(f2.getAges());