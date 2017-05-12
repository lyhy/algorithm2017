jest.dontMock('./unique-binary-search-trees');

describe('unique-binary-search-trees', function(){
    var func = require('./unique-binary-search-trees');
    it('unique-binary-search-trees', function(){
        expect(func()).toEqual(true);

    });
});