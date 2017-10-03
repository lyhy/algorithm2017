jest.dontMock('./search-insert-position');

describe('search-insert-position', function(){
    var func = require('./search-insert-position');
    it('search-insert-position', function(){
        //var input = [1,3,5,6], target = 5, output = 2;
        //var input = [1,3,5,6], target = 2, output = 1;
        //var input = [1,3,5,6], target = 7, output = 4;
        //var input = [1], target = 0, output = 0;
        var input = [1], target = 2, output = 1;
        expect(func(input, target)).toEqual(output);

    });
});