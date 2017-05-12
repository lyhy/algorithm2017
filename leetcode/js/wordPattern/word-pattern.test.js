jest.dontMock('./word-pattern');

describe('word-pattern', function(){
    var func = require('./word-pattern');
    it('word-pattern', function(){
        expect(func()).toEqual(true);

    });
});