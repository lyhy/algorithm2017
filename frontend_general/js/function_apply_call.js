function callme(){
    console.log(this.name);
    var args = [].slice.call(arguments);
    console.log(args);
}

callme.call({name: 'wj'}, 1,2,3);
callme.apply({name: 'apply'}, [1,2,3]);