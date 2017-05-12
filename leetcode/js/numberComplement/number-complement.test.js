jest.dontMock('./number-complement');

describe('number-complement', function(){
    var func = require('./number-complement');
    it('number-complement', function(){
        expect(func()).toEqual(true);

    });
});