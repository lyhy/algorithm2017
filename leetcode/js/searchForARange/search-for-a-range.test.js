jest.dontMock('./search-for-a-range');

describe('search-for-a-range', function(){
    var func = require('./search-for-a-range');
    it('search-for-a-range', function(){
        var input = [5, 7, 7, 8, 8, 10], target = 8, output = [3,4];
        expect(func(input, target)).toEqual(output);

    });
});