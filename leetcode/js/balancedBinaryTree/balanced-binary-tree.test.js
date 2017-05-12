jest.dontMock('./balanced-binary-tree');

describe('balanced-binary-tree', function(){
    var func = require('./balanced-binary-tree');
    it('balanced-binary-tree', function(){
        expect(func()).toEqual(true);

    });
});