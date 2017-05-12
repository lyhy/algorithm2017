jest.dontMock('./increasing-subsequences');

describe('increasing-subsequences', function(){
    var func = require('./increasing-subsequences');
    it('increasing-subsequences', function(){
        expect(func()).toEqual(true);

    });
});