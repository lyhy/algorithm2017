jest.dontMock('./sum-of-left-leaves');

describe('sum-of-left-leaves', function(){
    var func = require('./sum-of-left-leaves');
    it('sum-of-left-leaves', function(){
        expect(func()).toEqual(true);

    });
});