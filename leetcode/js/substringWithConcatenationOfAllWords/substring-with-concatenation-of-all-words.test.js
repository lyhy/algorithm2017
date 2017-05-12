jest.dontMock('./substring-with-concatenation-of-all-words');

describe('substring-with-concatenation-of-all-words', function(){
    var func = require('./substring-with-concatenation-of-all-words');
    it('substring-with-concatenation-of-all-words', function(){
        expect(func()).toEqual(true);

    });
});