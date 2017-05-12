jest.dontMock('./is-subsequence');

describe('is-subsequence', function(){
    var func = require('./is-subsequence');
    it('is-subsequence', function(){
        expect(func()).toEqual(true);

    });
});