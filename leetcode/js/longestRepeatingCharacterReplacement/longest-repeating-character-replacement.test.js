jest.dontMock('./longest-repeating-character-replacement');

describe('longest-repeating-character-replacement', function(){
    var func = require('./longest-repeating-character-replacement');
    it('longest-repeating-character-replacement', function(){
        expect(func()).toEqual(true);

    });
});