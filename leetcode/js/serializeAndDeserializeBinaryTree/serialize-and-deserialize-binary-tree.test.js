jest.dontMock('./serialize-and-deserialize-binary-tree');

describe('serialize-and-deserialize-binary-tree', function(){
    var func = require('./serialize-and-deserialize-binary-tree');
    it('serialize-and-deserialize-binary-tree', function(){
        expect(func()).toEqual(true);

    });
});