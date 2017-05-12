jest.dontMock('./recover-binary-search-tree');

describe('recover-binary-search-tree', function(){
    var func = require('./recover-binary-search-tree');
    it('recover-binary-search-tree', function(){
        expect(func()).toEqual(true);

    });
});