jest.dontMock('./gray-code');

describe('gray-code', function(){
    var func = require('./gray-code');
    it('gray-code', function(){
        expect(func()).toEqual(true);

    });
});