jest.dontMock('./reverse-nodes-in-k-group');

describe('reverse-nodes-in-k-group', function(){
    var func = require('./reverse-nodes-in-k-group');
    it('reverse-nodes-in-k-group', function(){
        expect(func()).toEqual(true);

    });
});