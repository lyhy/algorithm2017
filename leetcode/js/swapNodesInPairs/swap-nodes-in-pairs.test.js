jest.dontMock('./swap-nodes-in-pairs');

describe('swap-nodes-in-pairs', function(){
    var func = require('./swap-nodes-in-pairs');
    it('swap-nodes-in-pairs', function(){
        expect(func()).toEqual(true);

    });
});