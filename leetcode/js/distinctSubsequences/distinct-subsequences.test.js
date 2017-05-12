jest.dontMock('./distinct-subsequences');

describe('distinct-subsequences', function(){
    var func = require('./distinct-subsequences');
    it('distinct-subsequences', function(){
        expect(func()).toEqual(true);

    });
});