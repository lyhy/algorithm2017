/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(!beginWord || !endWord || beginWord.length !== endWord.length)return 0;
    var queue = [beginWord];
    var step = 2;
    var endWordLen = endWord.length;
    var aChar = 'a'.charCodeAt(0);
    var cLen = 'z'.charCodeAt(0) - aChar;
    var inDict = {};
    wordList.forEach((word)=>{
        inDict[word] = true;
    });
    while(queue.length){
        var size = queue.length;
        for(var j = 0; j < size; j++){
            var currWord = queue.shift();
            for(var i = 0; i < endWordLen; i++){
                for(var c = 0; c <= cLen; c++){
                    var newWord = currWord.substr(0,i) + String.fromCharCode(aChar + c) + currWord.substr(i+1);
                    var found = inDict[newWord];
                    if(endWord == newWord && found)return step;
                    else if(found){
                        inDict[newWord] = false;
                        queue.push(newWord);
                    }
                }
            }

        }
        step++;
    }

    return 0;
    
};

module.exports = ladderLength;