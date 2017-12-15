function randomColor(){
    var color = '#';
    var cArray = ['A','B','C','D','E','F'];
    //Math.random() //v>=0 , v<1, 0, F
    var max = 16;
    for(var i = 0,len =6; i <len; i++){
        var randomInt = Math.floor(Math.random() * max );// [0, 15];
        color += randomInt < 10 ? randomInt : cArray[randomInt - 10]; //charAt
//parseInt(randomInt + ‘’, 16);//0, F F to 15
    }

    return color;
}

var a = randomColor();
console.log(a)
