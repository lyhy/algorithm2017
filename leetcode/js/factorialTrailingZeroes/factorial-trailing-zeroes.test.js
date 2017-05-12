jest.dontMock('./factorial-trailing-zeroes');

describe('factorial-trailing-zeroes', function(){
    var func = require('./factorial-trailing-zeroes');
    it('factorial-trailing-zeroes', function(){
        expect(func()).toEqual(true);

    });
});