jest.dontMock('./shortest-palindrome');

describe('shortest-palindrome', function(){
    var func = require('./shortest-palindrome');
    it('shortest-palindrome', function(){
        expect(func()).toEqual(true);

    });
});