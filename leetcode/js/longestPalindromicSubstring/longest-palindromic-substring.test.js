jest.dontMock('./longest-palindromic-substring');

describe('longest-palindromic-substring', function(){
    var func = require('./longest-palindromic-substring');
    it('longest-palindromic-substring', function(){
        expect(func()).toEqual(true);

    });
});