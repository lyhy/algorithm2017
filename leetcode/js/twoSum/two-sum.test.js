jest.dontMock('./two-sum');

describe('two-sum', function(){
    var func = require('./two-sum');
    var input = [2, 7, 11, 15], target = 9, output = [0, 1];
    it('two-sum', function(){
        expect(func(input, target)).toEqual(output);

    });
});