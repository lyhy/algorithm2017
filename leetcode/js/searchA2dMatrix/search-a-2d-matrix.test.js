jest.dontMock('./search-a-2d-matrix');

describe('search-a-2d-matrix', function(){
    var func = require('./search-a-2d-matrix');
    var a = [
        [1,   3,  5,  7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ], target = 3, output = true;
    it('search-a-2d-matrix', function(){
        expect(func(a, target)).toEqual(output);

    });
});