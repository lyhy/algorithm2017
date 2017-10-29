jest.dontMock('./maximum-product-of-three-numbers');

describe('maximum-product-of-three-numbers', function(){
    var func = require('./maximum-product-of-three-numbers');
    it('maximum-product-of-three-numbers', function(){
        var input = [1,2,3], output = 6;
        expect(func(input)).toEqual(output);

    });
});