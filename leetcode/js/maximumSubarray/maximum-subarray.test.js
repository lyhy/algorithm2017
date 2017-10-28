jest.dontMock('./maximum-subarray');

describe('maximum-subarray', function(){
    var func = require('./maximum-subarray');
    it('maximum-subarray', function(){
        var input = [-2,1,-3,4,-1,2,1,-5,4], output = [4,-1,2,1], value = 6;
        expect(func(input)).toEqual(value);

    });
});