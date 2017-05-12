jest.dontMock('./reverse-string');

describe('reverse-string', function(){
    var func = require('./reverse-string');
    it('reverse-string', function(){
        expect(func()).toEqual(true);

    });
});