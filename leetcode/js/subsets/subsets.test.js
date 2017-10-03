jest.dontMock('./subsets');

describe('subsets', function(){
    var func = require('./subsets');
    it('subsets', function(){
        var input = [1,2,3];
        var output = [
            [3],
            [1],
            [2],
            [1,2,3],
            [1,3],
            [2,3],
            [1,2],
            []
        ];
        expect(func(input)).toEqual(output);

    });
});