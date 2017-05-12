jest.dontMock('./palindrome-linked-list');

describe('palindrome-linked-list', function(){
    var func = require('./palindrome-linked-list');
    it('palindrome-linked-list', function(){
        expect(func()).toEqual(true);

    });
});