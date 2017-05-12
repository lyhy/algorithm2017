jest.dontMock('./delete-node-in-a-bst');

describe('delete-node-in-a-bst', function(){
    var func = require('./delete-node-in-a-bst');
    it('delete-node-in-a-bst', function(){
        expect(func()).toEqual(true);

    });
});