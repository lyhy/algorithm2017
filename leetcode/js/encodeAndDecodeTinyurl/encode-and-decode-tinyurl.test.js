jest.dontMock('./encode-and-decode-tinyurl');

describe('encode-and-decode-tinyurl', function(){
    var func = require('./encode-and-decode-tinyurl');
    it('encode-and-decode-tinyurl', function(){
        expect(func()).toEqual(true);

    });
});