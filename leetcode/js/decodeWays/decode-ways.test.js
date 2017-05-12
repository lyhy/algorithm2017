jest.dontMock('./decode-ways');

describe('decode-ways', function(){
    var func = require('./decode-ways');
    it('decode-ways', function(){
        expect(func()).toEqual(true);

    });
});