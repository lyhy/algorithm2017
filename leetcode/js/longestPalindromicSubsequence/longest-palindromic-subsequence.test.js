jest.dontMock('./longest-palindromic-subsequence');

describe('longest-palindromic-subsequence', function(){
    var func = require('./longest-palindromic-subsequence');
    it('longest-palindromic-subsequence', function(){
        expect(func()).toEqual(true);

    });
});