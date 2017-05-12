jest.dontMock('./integer-to-english-words');

describe('integer-to-english-words', function(){
    var func = require('./integer-to-english-words');
    it('integer-to-english-words', function(){
        expect(func()).toEqual(true);

    });
});