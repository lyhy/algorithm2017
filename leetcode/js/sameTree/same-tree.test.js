jest.dontMock('./same-tree');

describe('same-tree', function(){
    var func = require('./same-tree');
    it('same-tree', function(){
        expect(func()).toEqual(true);

    });
});