jest.dontMock('./max-consecutive-ones');

describe('max-consecutive-ones', function(){
    var func = require('./max-consecutive-ones');
    it('max-consecutive-ones', function(){
        expect(func()).toEqual(true);

    });
});