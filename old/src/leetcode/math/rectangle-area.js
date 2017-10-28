//https://leetcode.com/problems/rectangle-area/
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var res;
    res = Math.abs((D-B)*(C-A)) + Math.abs((G-E)*(H-F));
    var A1 = Math.max(A, E);
    var B1 = Math.max(B, F);
    var C1 = Math.min(C, G);
    var D1 = Math.min(D, H);

    if(D1 <= B1 ||C1<=A1 )return res;
    return res - Math.abs((D1-B1)*(C1-A1));

};

var A = -3;
var B = 0;
var C = 3;
var D = 4;
var E = 0;
var F = -1;
var G = 9;
var H = 2;

console.log(computeArea(A,B,C,D,E,F,G,H))//6