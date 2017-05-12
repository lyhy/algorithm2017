jest.dontMock('./word-search');

describe('word-search', function(){
    var func = require('./word-search');
    it('word-search', function(){
        expect(func()).toEqual(true);

    });
});