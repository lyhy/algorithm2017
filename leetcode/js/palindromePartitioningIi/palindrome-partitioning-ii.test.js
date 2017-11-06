jest.dontMock('./palindrome-partitioning-ii');

describe('palindrome-partitioning-ii', function(){
    var func = require('./palindrome-partitioning-ii');
    it('palindrome-partitioning-ii', function(){
        var input = "abca", output = true;
        expect(func(input)).toEqual(output);

    });
});