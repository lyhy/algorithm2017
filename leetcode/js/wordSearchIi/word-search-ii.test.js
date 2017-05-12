jest.dontMock('./word-search-ii');

describe('word-search-ii', function(){
    var func = require('./word-search-ii');
    it('word-search-ii', function(){
        expect(func()).toEqual(true);

    });
});