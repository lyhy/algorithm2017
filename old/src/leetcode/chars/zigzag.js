/*
 The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 P   A   H   N
 A P L S I I G
 Y   I   R
 And then read line by line: "PAHNAPLSIIGYIR"
 Write the code that will take a string and make this conversion given a number of rows:
 string convert(string text, int nRows);
 convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 row-i
 column-j
 i=0 || i=rowNum-1, j-gap=2*(rowNum-1)
 0<i<rowNum-1, j-gap=2*(rowNum-1-i), 2i
* */

function zigzag(s,numRows){
    var rs = '';
    var len = s.length;
    var k;
    if(len<=1 || numRows <= 1)return s;
    for(var i = 0; i < numRows; i++){
        for(var j=i; j<len; j+=2*(numRows-1)){
            rs +=s[j];

            if(i>0 && i< numRows -1 && j+2*(numRows-1-i)<len){
                rs +=s[j+2*(numRows-1-i)];
            }


        }
    }
    return rs;
}

module.exports=zigzag;
console.log(zigzag('ab', 1));