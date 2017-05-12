jest.dontMock('./binary-search-tree-iterator');

describe('binary-search-tree-iterator', function(){
    var func = require('./binary-search-tree-iterator');
    it('binary-search-tree-iterator', function(){
        expect(func()).toEqual(true);

    });
});