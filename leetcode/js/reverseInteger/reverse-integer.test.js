jest.dontMock('./reverse-integer');

describe('reverse-integer', function(){
    var func = require('./reverse-integer');
    it('reverse-integer', function(){
        expect(func()).toEqual(true);

    });
});