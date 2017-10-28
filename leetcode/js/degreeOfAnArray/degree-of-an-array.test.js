jest.dontMock('./degree-of-an-array');

describe('degree-of-an-array', function(){
    var func = require('./degree-of-an-array');
    it('degree-of-an-array', function(){
        //var input = [1, 2, 2, 3, 1], output = 2;
        var input = [1,2,2,3,1,4,2], output = 6;
        expect(func(input)).toEqual(output);

    });
});