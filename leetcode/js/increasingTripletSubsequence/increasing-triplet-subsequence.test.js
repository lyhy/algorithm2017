jest.dontMock('./increasing-triplet-subsequence');

describe('increasing-triplet-subsequence', function(){
    var func = require('./increasing-triplet-subsequence');
    it('increasing-triplet-subsequence', function(){
        expect(func()).toEqual(true);

    });
});