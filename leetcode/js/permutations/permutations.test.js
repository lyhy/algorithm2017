jest.dontMock('./permutations');

describe('permutations', function(){
    var func = require('./permutations');
    it('permutations', function(){
        var input = [1,2,3],
            output = [
                [1,2,3],
                [1,3,2],
                [2,1,3],
                [2,3,1],
                [3,1,2],
                [3,2,1]
            ];
        expect(func(input)).toEqual(output);

    });
});