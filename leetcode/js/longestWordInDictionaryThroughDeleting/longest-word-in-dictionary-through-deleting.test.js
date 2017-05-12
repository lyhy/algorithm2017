jest.dontMock('./longest-word-in-dictionary-through-deleting');

describe('longest-word-in-dictionary-through-deleting', function(){
    var func = require('./longest-word-in-dictionary-through-deleting');
    it('longest-word-in-dictionary-through-deleting', function(){
        expect(func()).toEqual(true);

    });
});