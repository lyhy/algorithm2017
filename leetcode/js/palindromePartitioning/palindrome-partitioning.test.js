jest.dontMock('./palindrome-partitioning');

describe('palindrome-partitioning', function(){
    var func = require('./palindrome-partitioning');
    it('palindrome-partitioning', function(){
        expect(func()).toEqual(true);

    });
});