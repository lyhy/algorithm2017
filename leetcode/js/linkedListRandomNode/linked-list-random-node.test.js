jest.dontMock('./linked-list-random-node');

describe('linked-list-random-node', function(){
    var func = require('./linked-list-random-node');
    it('linked-list-random-node', function(){
        expect(func()).toEqual(true);

    });
});