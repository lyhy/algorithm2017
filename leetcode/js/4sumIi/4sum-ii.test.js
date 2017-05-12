jest.dontMock('./4sum-ii');

describe('4sum-ii', function(){
    var func = require('./4sum-ii');
    it('4sum-ii', function(){
        expect(func()).toEqual(true);

    });
});