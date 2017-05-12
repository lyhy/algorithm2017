jest.dontMock('./intersection-of-two-arrays');

describe('intersection-of-two-arrays', function(){
    var func = require('./intersection-of-two-arrays');
    it('intersection-of-two-arrays', function(){
        expect(func()).toEqual(true);

    });
});