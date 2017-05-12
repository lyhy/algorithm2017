jest.dontMock('./minimum-time-difference');

describe('minimum-time-difference', function(){
    var func = require('./minimum-time-difference');
    it('minimum-time-difference', function(){
        expect(func()).toEqual(true);

    });
});