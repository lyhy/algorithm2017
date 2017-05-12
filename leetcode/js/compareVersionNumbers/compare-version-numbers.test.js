jest.dontMock('./compare-version-numbers');

describe('compare-version-numbers', function(){
    var func = require('./compare-version-numbers');
    it('compare-version-numbers', function(){
        expect(func()).toEqual(true);

    });
});