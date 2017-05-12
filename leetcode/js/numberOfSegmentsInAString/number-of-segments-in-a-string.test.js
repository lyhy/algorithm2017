jest.dontMock('./number-of-segments-in-a-string');

describe('number-of-segments-in-a-string', function(){
    var func = require('./number-of-segments-in-a-string');
    it('number-of-segments-in-a-string', function(){
        expect(func()).toEqual(true);

    });
});