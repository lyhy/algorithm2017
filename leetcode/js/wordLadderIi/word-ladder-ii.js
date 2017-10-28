/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    //wordList.push(endWord);//?
    var preNode = {};

    bfs(preNode, wordList, beginWord, endWord);


};

function bfs(preNode, wordList, beginWord, endWord) {
    var q = [];
    var visit = [];
    visit.push(beginWord);
    var connect = [];
    q.push(beginWord);

    while(q.length){
        var len = q.length;
        var tempVisit = [];
        while(len--){
            var current = q.shift();
            isConnected(connect, wordList, current, endWord, visit);
        }

    }
}

function isConnected(connect, wordList, current, endWord, visit) {
    connect = [];
    var cur = current;
    var aChar = 'a'.charCodeAt(0);
    var cLen = 'z'.charCodeAt(0) - aChar;
    var wordListLen = wordList.length;
    var visitLen = visit.length;
    for(var i = 0; i < cur.length; i++){
        var t = cur[i];

        for(var ci = 0; ci <= cLen; ci++){
            var c = String.fromCharCode(ci);
            if(c === t)continue;
            cur[i] = c;
            //if((cur == endWord || wordList.indexOf(cur) !== wordListLen) && visit.indexOf(cur) === visitLen) {
            if(wordList.indexOf(cur) !== -1 && visit.indexOf(cur) === visitLen) {
                connect.push(cur);
            }
        }
        cur[i] = t;
    }
}

module.exports = findLadders;

var beginWord = "hit",
    endWord = "cog",
    wordList = ["hot","dot","dog","lot","log","cog"],
    output = [
        ["hit","hot","dot","dog","cog"],
        ["hit","hot","lot","log","cog"]
    ];

findLadders(beginWord, endWord, wordList);