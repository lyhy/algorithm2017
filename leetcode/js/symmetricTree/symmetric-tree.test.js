jest.dontMock('./symmetric-tree');

describe('symmetric-tree', function(){
    var func = require('./symmetric-tree');
    it('symmetric-tree', function(){
        expect(func()).toEqual(true);

    });
});