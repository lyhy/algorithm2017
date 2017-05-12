jest.dontMock('./non-overlapping-intervals');

describe('non-overlapping-intervals', function(){
    var func = require('./non-overlapping-intervals');
    it('non-overlapping-intervals', function(){
        expect(func()).toEqual(true);

    });
});