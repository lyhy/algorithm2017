jest.dontMock('./remove-nth-node-from-end-of-list');

describe('remove-nth-node-from-end-of-list', function(){
    var func = require('./remove-nth-node-from-end-of-list');
    it('remove-nth-node-from-end-of-list', function(){
        expect(func()).toEqual(true);

    });
});