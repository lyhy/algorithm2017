var fib = function(n){
    if(n===1)return 0;
    if(n===2)return 1;
    return fib(n-1) + fib(n-2);
}
var fib2 = function(n){
    if(n===1)return 0;
    if(n===2)return 1;
    var a = 0;
    var b = 1;
    var sum;
    for(var i=3;i<=n;i++){
        sum =  a + b;
        a = b;
        b = sum;
    }

    return sum;
}


var n = 40;
var start = new Date().getTime();
for(var i = 1; i<n;i++){
    console.log(fib(i));
}
var end = new Date().getTime();
console.log(end-start);

console.log('============fib2===========')
start = new Date().getTime();
for(var i = 1; i<n;i++){
    console.log(fib2(i));
}
end = new Date().getTime();
console.log(end-start);