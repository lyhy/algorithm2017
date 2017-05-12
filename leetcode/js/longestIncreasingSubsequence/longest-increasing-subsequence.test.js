jest.dontMock('./longest-increasing-subsequence');

describe('longest-increasing-subsequence', function(){
    var func = require('./longest-increasing-subsequence');
    it('longest-increasing-subsequence', function(){
        expect(func()).toEqual(true);

    });
});