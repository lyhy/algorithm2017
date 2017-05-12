jest.dontMock('./convert-bst-to-greater-tree');

describe('convert-bst-to-greater-tree', function(){
    var func = require('./convert-bst-to-greater-tree');
    it('convert-bst-to-greater-tree', function(){
        expect(func()).toEqual(true);

    });
});