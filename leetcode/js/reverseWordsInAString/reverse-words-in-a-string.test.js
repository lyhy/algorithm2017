jest.dontMock('./reverse-words-in-a-string');

describe('reverse-words-in-a-string', function(){
    var func = require('./reverse-words-in-a-string');
    it('reverse-words-in-a-string', function(){
        expect(func()).toEqual(true);

    });
});