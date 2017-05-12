jest.dontMock('./find-all-anagrams-in-a-string');

describe('find-all-anagrams-in-a-string', function(){
    var func = require('./find-all-anagrams-in-a-string');
    it('find-all-anagrams-in-a-string', function(){
        expect(func()).toEqual(true);

    });
});