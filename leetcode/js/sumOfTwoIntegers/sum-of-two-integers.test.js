jest.dontMock('./sum-of-two-integers');

describe('sum-of-two-integers', function(){
    var func = require('./sum-of-two-integers');
    it('sum-of-two-integers', function(){
        expect(func()).toEqual(true);

    });
});