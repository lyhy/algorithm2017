jest.dontMock('./set-matrix-zeroes');

describe('set-matrix-zeroes', function(){
    var func = require('./set-matrix-zeroes');
    it('set-matrix-zeroes', function(){
        expect(func()).toEqual(true);

    });
});