jest.dontMock('./reverse-linked-list');

describe('reverse-linked-list', function(){
    var func = require('./reverse-linked-list');
    it('reverse-linked-list', function(){
        expect(func()).toEqual(true);

    });
});