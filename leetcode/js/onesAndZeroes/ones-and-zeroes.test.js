jest.dontMock('./ones-and-zeroes');

describe('ones-and-zeroes', function(){
    var func = require('./ones-and-zeroes');
    it('ones-and-zeroes', function(){
        expect(func()).toEqual(true);

    });
});