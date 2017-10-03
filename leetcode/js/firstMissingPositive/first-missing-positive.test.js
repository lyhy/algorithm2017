jest.dontMock('./first-missing-positive');

describe('first-missing-positive', function(){
    var func = require('./first-missing-positive');
    it('first-missing-positive', function(){
        //var input = [1,2,0], output = 3;
        var input = [3,4,-1,1], output = 2;
        expect(func(input)).toEqual(output);

    });
});