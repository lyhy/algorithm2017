jest.dontMock('./serialize-and-deserialize-bst');

describe('serialize-and-deserialize-bst', function(){
    var func = require('./serialize-and-deserialize-bst');
    it('serialize-and-deserialize-bst', function(){
        expect(func()).toEqual(true);

    });
});