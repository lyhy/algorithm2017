jest.dontMock('./magical-string');

describe('magical-string', function(){
    var func = require('./magical-string');
    it('magical-string', function(){
        expect(func()).toEqual(true);

    });
});