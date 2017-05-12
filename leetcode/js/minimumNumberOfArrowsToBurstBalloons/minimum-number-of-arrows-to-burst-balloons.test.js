jest.dontMock('./minimum-number-of-arrows-to-burst-balloons');

describe('minimum-number-of-arrows-to-burst-balloons', function(){
    var func = require('./minimum-number-of-arrows-to-burst-balloons');
    it('minimum-number-of-arrows-to-burst-balloons', function(){
        expect(func()).toEqual(true);

    });
});