jest.dontMock('./unique-substrings-in-wraparound-string');

describe('unique-substrings-in-wraparound-string', function(){
    var func = require('./unique-substrings-in-wraparound-string');
    it('unique-substrings-in-wraparound-string', function(){
        expect(func()).toEqual(true);

    });
});