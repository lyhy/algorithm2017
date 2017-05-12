jest.dontMock('./4sum');

describe('4sum', function(){
    var func = require('./4sum');
    it('4sum', function(){
        expect(func()).toEqual(true);

    });
});