jest.dontMock('./maximum-product-subarray');

describe('maximum-product-subarray', function(){
    var func = require('./maximum-product-subarray');
    var input = [2,3,-2,4], output = 6;
    it('maximum-product-subarray', function(){
        expect(func(input)).toEqual(output);

    });
});