function factorial(num) {
    if(num <=1)return 1;
    return num * factorial(num-1);
}

var input = 3;
console.log(factorial(input));