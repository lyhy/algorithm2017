jest.dontMock('./letter-combinations-of-a-phone-number');

describe('letter-combinations-of-a-phone-number', function(){
    var func = require('./letter-combinations-of-a-phone-number');
    it('letter-combinations-of-a-phone-number', function(){
        expect(func()).toEqual(true);

    });
});