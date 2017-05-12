jest.dontMock('./validate-binary-search-tree');

describe('validate-binary-search-tree', function(){
    var func = require('./validate-binary-search-tree');
    it('validate-binary-search-tree', function(){
        expect(func()).toEqual(true);

    });
});