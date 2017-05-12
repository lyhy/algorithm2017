jest.dontMock('./product-of-array-except-self');

describe('product-of-array-except-self', function(){
    var func = require('./product-of-array-except-self');
    it('product-of-array-except-self', function(){
        expect(func()).toEqual(true);

    });
});