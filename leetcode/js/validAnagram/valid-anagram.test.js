jest.dontMock('./valid-anagram');

describe('valid-anagram', function(){
    var func = require('./valid-anagram');
    it('valid-anagram', function(){
        expect(func()).toEqual(true);

    });
});