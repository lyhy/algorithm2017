jest.dontMock('./wiggle-subsequence');

describe('wiggle-subsequence', function(){
    var func = require('./wiggle-subsequence');
    it('wiggle-subsequence', function(){
        expect(func()).toEqual(true);

    });
});