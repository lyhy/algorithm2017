jest.dontMock('./search-in-rotated-sorted-array');

describe('search-in-rotated-sorted-array', function(){
    var func = require('./search-in-rotated-sorted-array');
    var input = [4, 5, 6, 7, 0, 1, 2], target = 0, output = 4;
    it('search-in-rotated-sorted-array', function(){
        expect(func(input, target)).toEqual(output);

    });
});