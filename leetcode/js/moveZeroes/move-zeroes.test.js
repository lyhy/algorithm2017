jest.dontMock('./move-zeroes');

describe('move-zeroes', function(){
    var func = require('./move-zeroes');
    it('move-zeroes', function(){
        expect(func()).toEqual(true);

    });
});