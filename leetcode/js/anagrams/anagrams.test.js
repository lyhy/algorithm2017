jest.dontMock('./anagrams');

describe('anagrams', function(){
    var func = require('./anagrams');
    it('anagrams', function(){
        expect(func()).toEqual(true);

    });
});