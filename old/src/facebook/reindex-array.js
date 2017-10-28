var origArray = ['a', 'b', 'c', 'd', 'e', 'f'];
var indexArray = [2,3,4,0,5,1];
var expectArray = ['d','f','a','b','c','e'];

//function reIndex(arr,indexArr){
//    return indexArr.map(function(item, index){
//        return arr[indexArr.indexOf(index)] ;
//    });
//}

function reIndex(A, B){
    var p, tmp;
    var index = 0;
    var i = 0, len = B.length;
        for(var i = 0; i< B.length; i++){
            //p = B.indexOf(i);
            tmp = i;
            while (B[tmp] !== tmp) {
                swap(A, B[tmp], tmp);
                swap(B, B[tmp], tmp);
                tmp = B[tmp];
                console.log(++index);
            }





        }



}

var swap = function(A, i, j){
    var temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}
var A = ['C','D','B','A'];
var B = [1,2,3,0];

reIndex(A,B)
console.log(A);

//testing
//'use strict'
//var Mocha = require('mocha');
//var expect = require('chai').expect;
//var mocha = new Mocha({ui: 'bdd'});
//mocha.suite.emit('pre-require', this, 'solution', mocha);
//
//describe("reindex array", () => {
//    it('it', function () {
//        var result = reIndex(origArray, indexArray);
//        expect(result).to.be.deep.equal(expectArray);
//    })
//});
