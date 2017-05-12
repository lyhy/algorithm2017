jest.dontMock('./delete-node-in-a-linked-list');

describe('delete-node-in-a-linked-list', function(){
    var func = require('./delete-node-in-a-linked-list');
    it('delete-node-in-a-linked-list', function(){
        expect(func()).toEqual(true);

    });
});