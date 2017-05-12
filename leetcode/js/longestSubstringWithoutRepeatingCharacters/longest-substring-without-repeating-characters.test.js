jest.dontMock('./longest-substring-without-repeating-characters');

describe('longest-substring-without-repeating-characters', function(){
    var func = require('./longest-substring-without-repeating-characters');
    it('longest-substring-without-repeating-characters', function(){
        expect(func()).toEqual(true);

    });
});