jest.dontMock('./number-of-digit-one');

describe('number-of-digit-one', function(){
    var func = require('./number-of-digit-one');
    it('number-of-digit-one', function(){
        expect(func()).toEqual(true);

    });
});