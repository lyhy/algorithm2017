function factor(num){
    var l=1, r=num/l, ret = [];
    while(l <= r){
        if(num % l === 0){
            ret.push(l);
            l !== r && ret.push(r);
        }
        l++;
        r = num / l;
    }
    return ret;

}

//console.log(factor(4));
console.log(factor(130));