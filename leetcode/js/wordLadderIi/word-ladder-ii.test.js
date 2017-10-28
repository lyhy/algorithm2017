jest.dontMock('./word-ladder-ii');

describe('word-ladder-ii', function(){
    var func = require('./word-ladder-ii');
    it('word-ladder-ii', function(){
        var beginWord = "hit",
        endWord = "cog",
        wordList = ["hot","dot","dog","lot","log","cog"],
            output = [
                ["hit","hot","dot","dog","cog"],
                ["hit","hot","lot","log","cog"]
            ];
        expect(func()).toEqual(true);

    });
});