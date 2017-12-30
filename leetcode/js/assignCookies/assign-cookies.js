/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    if(!g || !s)return 0;
    g.sort(function(a,b){return a - b;});
    s.sort(function(a,b){return a - b;});
    var  j = 0;

    for(var i = 0; i < s.length &&  j < g.length; i++){
        if(s[i] >= g[j])j++;
    }

    return j;

};

//var g = [1,2,3], s = [1,1],Output= 1;
var g=[10,9,8,7], s=[5,6,7,8], output = 2;
console.log(findContentChildren(g,s));