jest.dontMock('./decode-string');

describe('decode-string', function(){
    var func = require('./decode-string');
    it('decode-string', function(){
        expect(func()).toEqual(true);

    });
});