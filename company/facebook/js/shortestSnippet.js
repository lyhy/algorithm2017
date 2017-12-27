//Given a sequence [A, x, x, B, A, x, B], return the shortest sub-sequence for the given query [A, B].
var a = ['A', 'x', 'x', 'B', 'A', 'x', 'B'], query = ['A', 'B'], out = ['A', 'x', 'B'];

var shortestSnippet = function(a, q) {
    var ret = [];
    //var allSeqs = [];
    var indexA = [];
    var i = 0, j = 0, min = 0;
    for(;i < q.length, j < a.length; j++){
        if(a[j] === q[i]){
            //found it;
            indexA.push(j);
            i++;
        }
        if(indexA.length === query.length ){
            if(min < (indexA[indexA.length -1] - indexA[0]  + 1)){
                ret = indexA;
            }
            j = indexA[0] + 1;
            i = 0;
            indexA = [];
            continue;
            //allSeqs.push(indexA);
        }else {
            j++;
        }
    }


    return ret;
}

console.log(shortestSnippet(a,query));