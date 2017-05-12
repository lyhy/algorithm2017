jest.dontMock('./longest-consecutive-sequence');

describe('longest-consecutive-sequence', function(){
    var func = require('./longest-consecutive-sequence');
    it('longest-consecutive-sequence', function(){
        expect(func()).toEqual(true);

    });
});