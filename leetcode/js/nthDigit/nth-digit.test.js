jest.dontMock('./nth-digit');

describe('nth-digit', function(){
    var func = require('./nth-digit');
    it('nth-digit', function(){
        expect(func()).toEqual(true);

    });
});