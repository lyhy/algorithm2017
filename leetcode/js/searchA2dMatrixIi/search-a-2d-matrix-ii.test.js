jest.dontMock('./search-a-2d-matrix-ii');

describe('search-a-2d-matrix-ii', function(){
    var func = require('./search-a-2d-matrix-ii');
    it('search-a-2d-matrix-ii', function(){
        //var input = [
        //    [1,   4,  7, 11, 15],
        //    [2,   5,  8, 12, 19],
        //    [3,   6,  9, 16, 22],
        //    [10, 13, 14, 17, 24],
        //    [18, 21, 23, 26, 30]
        //];
        //var target = 5, output = true;
        //var targt = 20, output = false;
        var input = [[-5]], target = -5, output = true;
        expect(func(input, target)).toEqual(output);

    });
});